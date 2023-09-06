import mongoose from 'mongoose';

// Define the schema for the User collection
const userSchema = new mongoose.Schema({
        userName: String,
        userEmail: String,
});

// Create the User model based on the schema
const User = mongoose.model('User', userSchema);

export default User