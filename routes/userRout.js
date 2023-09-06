import { Router } from "express";
import useClass from "../moduls/user_modul.js";
import sendLoginEmail from "../notifications/login_Email_Send.js"

const userClass = new useClass();
const rout = Router();

rout.put("/addUser", async (req, res) => {
        try {
                const { userName, userEmail } = req.body;

                console.log(req.body)

                const isdataSave = await userClass.addUser({ userName, userEmail })

                const isMailSend = sendLoginEmail.sendMail({ userName, userEmail })

                res.status(200).json(isdataSave)

        } catch (error) {
                console.log(error)
                res.status(400).json({ sms: "Somthing is Worng" })
        }
})

export default rout