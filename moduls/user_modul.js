
import mongoose from 'mongoose';
import UserCluster from "../Schimas/use_Schima.js"

class user {
        constructor() {
                this.UserModel = UserCluster
        }
        async addUser({ userName, userEmail }) {
                try {
                        const user = new this.UserModel({ userName, userEmail });
                        await user.save();
                        const send_all_Data = await this.UserModel.find();
                        return send_all_Data;
                } catch (error) {
                        throw error;
                }
        }
}

export default user