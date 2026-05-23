// Serverdan ma'lumot olishni simulyatsiya qiluvchi funksiya
// Promise qaytaradi
function foydalanuvchiniOlish() {
    return new Promise((resolve, reject) => {
        console.log("Ma'lumot yuklanmoqda...");
        
        // 2 soniyadan keyin ma'lumotni qaytarish (setTimeout orqali)
        setTimeout(() => {
            const muvaffaqiyatli = true; // Buni false qilib xatolikni sinash mumkin
            
            if (muvaffaqiyatli) {
                resolve({ id: 1, ism: "Ali", kasb: "Dasturchi" });
            } else {
                reject("Ma'lumotni yuklab bo'lmadi!");
            }
        }, 2000);
    });
}

// Asinxron funksiya
async function main() {
    try {
        // await - funksiya bajarilishini kutib turadi, lekin 
        // butun brauzerni qotirib qo'ymaydi
        const natija = await foydalanuvchiniOlish();
        
        console.log("Ma'lumot keldi:", natija);
    } catch (xatolik) {
        // Agar Promise reject bo'lsa, xatolik shu yerda ushlanadi
        console.error("Xatolik yuz berdi:", xatolik);
    } finally {
        console.log("Jarayon yakunlandi.");
    }
}

// Funksiyani chaqiramiz
main();