import express from "express"; // expressni chaqiramiz
import { login, register } from "../controllers/authController.js"; // controllerdagi functionlarni olib kelamiz

const router = express.Router(); // yangi router yaratamiz

// register route (yangi user qo‘shish)
router.post("/register", register);

// login route (user tizimga kiradi)
router.post("/login", login);

// routerni export qilamiz boshqa faylda ishlatish uchun
export default router;