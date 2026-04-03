import bcrypt from "bcrypt"; 
// bcrypt - passwordni xavfsiz saqlash uchun ishlatiladi (oddiy text emas, hash qiladi)
import jwt from "jsonwebtoken"
import users from "../data/db.js"; 
// bu yerda vaqtinchalik database (array) ishlatyapmiz
// keyinchalik bu o‘rniga MongoDB yoki boshqa DB ishlatiladi
const JWT_SECRET_KEY = "SECRET_KEY_FOR_TECHHOUSE"
export async function register(req, res) {

    console.log(req.body); 
    // frontenddan kelayotgan malumotni ko‘rish uchun (debug qilishda foydali)

    // request body ichidan kerakli fieldlarni ajratib olamiz
    const { username, email, password } = req.body;

    // agar username yoki email yoki password bo‘lmasa, error qaytaramiz
    // bu backend validation (frontenddan noto‘g‘ri data kelmasligi uchun)
    if (!username || !email || !password) {
        return res.status(400).json({ 
            message: "All inputs are required!" 
        });
    }

    // users array ichidan shu email bor-yo‘qligini tekshiramiz
    // .find() birinchi mos kelgan userni qaytaradi
    const existingUser = users.find((user) => user.email === email);

    // agar email allaqachon mavjud bo‘lsa, yangi user yaratmaymiz
    if (existingUser) {
        return res.status(409).json({ 
            message: "Email already exist!" 
        });
    }

    // passwordni to‘g‘ridan-to‘g‘ri saqlash xavfli
    // shuning uchun bcrypt bilan hash qilamiz
    // 10 bu salt rounds (xavfsizlik darajasi)
    const passwordHash = await bcrypt.hash(password, 10);

    // yangi user object yaratamiz
    const newUser = {
        id: Math.random(), 
        // vaqtinchalik id (real projectda uniq id ishlatiladi masalan uuid yoki DB id)

        username,
        email,

        password: passwordHash, 
        // user passwordi endi oddiy emas, hashlangan holda saqlanadi
    };

    // yangi userni database (array) ga qo‘shamiz
    users.push(newUser);

    // muvaffaqiyatli ro‘yxatdan o‘tganini qaytaramiz
    return res.status(201).json({
        message: "Royhatdan muvaffaqiyatli o'tdingiz!",
        newUser,
    });
};
export async function  login(req,res) {
    try{
        const {email, password} = req.body
        if(!email && !password){
            return res.status(400).json({message: "Email and password required!"})
        }
        const existingUser = users.find((user) => user.email === email);

        if(!existingUser){
            return res.status(404).json({message: "User emai not found!"});
        }
        
        const passwordMatch = await bcrypt.compare(password,existingUser.password);
        if(!passwordMatch){
            return res.status(401).json({message: "Incorrect password!"});
        }

        const token = jwt.sign(
            {
                id: existingUser.id,
                email:existingUser.email,
            }, JWT_SECRET_KEY, 
            {
                expiresIn: "7d",
            },
        );

        return res.status(200).json({message: "Login successfull!",token})
    } catch(err){
        return res.status(500).json({message: "Internal server error", err});
    }
};