import Express from 'express';
import mongoose from 'mongoose';
import User from "./routes/userRout.js"
import cors from "cors"


const app = Express();



app.use(
        cors({
                origin: ['http://localhost:3001', "*"],
        })
);

app.use(Express.json());


const port = 3000;
mongoose.connect('mongodb://127.0.0.1:27017/user_for_zealYug')
        .then(() => console.log('Connected!')).catch(() => {
                console.log("connection faild")
        })

app.use("/", User)

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
