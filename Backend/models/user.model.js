import mongoose from "mongoose"

const userSchema =new mongoose.Schema({
   email:{
    type:String,
    requird:true,
    unique:true
   },
   fullname:{
     type:String,
    requird:true
   },
   password:{
     type:String,
    requird:true,
    minlength:5,
   },
   profilepic:{
     type:String,
     default:"https://www.vhv.rs/dpng/d/256-2569650_men-profile-icon-png-image-free-download-searchpng.png"
   }
},{timestamps:true})

const User= mongoose.model("User",userSchema);
export default User;
