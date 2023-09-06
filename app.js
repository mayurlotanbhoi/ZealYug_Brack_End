import Express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from "./routes/userRout.js"
import cors from "cors"


const app = Express();
dotenv.config();

app.use(
        cors({
                origin: ["*", 'http://localhost:3000', "https://zealyug-login.netlify.app"],
        })
);
app.use(Express.json());


const DB_URL = process.env.DB_URL


const PORT = process.env.PORT || 3000;


mongoose.connect(DB_URL)
        .then(() => console.log('Connected!')).catch(() => {
                console.log("connection faild")
        })

app.use("/", User)

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
