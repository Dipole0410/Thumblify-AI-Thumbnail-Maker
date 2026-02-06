import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true, lowercase: true },
    password: { type: String, required: true }
}, { timestamps: true });
const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User;
