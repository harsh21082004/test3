const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{type: String,required:true},
    email:{type: String,required:true,unique:true,index:true},
    image:{type: String,default:'https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg'},
    password:{type: String},
    isVerified:{type: Boolean,default:false},
    verifyToken:{type: String},
    verifyTokenExpiry:{type: Date},
    forgotPasswordToken:{type: String},
    forgotPasswordTokenExpiry:{type: Date}
},{timestamps:true});

export default mongoose.models.User || mongoose.model("User",UserSchema);
// export default mongoose.model("user",UserSchema);
