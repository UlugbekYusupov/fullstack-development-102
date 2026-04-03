import bcrypt from "bcrypt"; // passwordni hash qilish uchun
import users from "../data/db.js"; // fake database 

export async function register(req, res) {
    console.log(req.body); // kelayotgan malumotni tekshirish uchun

    // body dan malumotlarni olish
    const { username, email, password } = req.body;

    // agar birorta field yo‘q bo‘lsa error qaytaradi
    if (!username || !email || !password) {
        return res.status(400).json({ message: "All inputs are required!" });
    }

    // shu email oldin mavjudmi tekshiramiz
    const existingUser = users.find((user) => user.email === email);

    // agar user bor bo‘lsa ro‘yxatdan o‘tkazmaymiz
    if (existingUser) {
        return res.status(409).json({ message: "Email already exist!" });
    }

    // passwordni oddiy emas, hash qilib saqlaymiz (xavfsizlik uchun)
    const passwordHash = await bcrypt.hash(password, 10);

    // yangi user object yasaymiz
    const newUser = {
        id: Math.random(), // vaqtinchalik id
        username,
        email,
        password: passwordHash, // hashlangan password
    };

    // userni db ga qo‘shamiz
    users.push(newUser);

    // success response qaytaramiz
    return res.status(201).json({
        message: "Registered successfully!",
        newUser,
    });
}

// hozircha bo‘sh (keyin login logic yozamiz)
export function login() {}