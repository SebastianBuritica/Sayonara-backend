import { User } from "../models/User.js";
import jwt from "jsonwebtoken";

// Middleware para registrar un usuario

export async function register(req, res) {
    const { name, email, password } = req.body;

    const alreadyExistsUser = await User.findOne({ where: { email } }).catch(
        (err) => {
          console.log("Error: ", err);
        }
      );

      if (alreadyExistsUser) {
        return res.status(409).json({ message: "User with email already exists!" });
      }
      
      const newUser = await User.create({
        name,
        email,
        password,
});
      const savedUser = await newUser.save().catch((err) => {
        console.log("Error: ", err);
        res.status(500).json({ error: "Cannot register user at the moment!" });
      });

      if (savedUser) res.json({ message: "Thanks for registering" });
    
}; 

// Middleware para iniciar sesion

export async function login(req, res) {
    const { email, password } = req.body;
    
    const user = await User.findOne({ where: { email } }).catch((err) => {
      console.log("Error: ", err);
    }
);

    if (!user) {
      return res.status(401).json({ message: "Email or password does not match!" });
    }
    if (user.password !== password) {
      return res.status(401).json({ message: "Email or password does not match!" });
    }
    const jwtToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    res.json({ message: "Welcome Back!", token: jwtToken });
}