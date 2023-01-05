import connection from "../../Database/Connect";
import { userModel } from "../../Database/Schema";
import bcrypt from "bcryptjs"
connection()
export default function handler(req, res){
    let saltRound = 10
    if(req.method == "POST"){
        const {userUniqueId, password} = req.body
        bcrypt.hash(password, saltRound, (err, hashedPassword)=>{
            if(err){
                res.send({message:"Unexpected error, please try again!", status: false})
            }
            else{
                userModel.findOneAndUpdate({userUniqueId },{password: hashedPassword}, (err, user)=>{
                     if(err){
                         res.send({message: "Network error, please try again!", status: false})
                     }
                     else{
                         res.send({message: "Details saved successfully!", status: true})
                     }
                })
            }
        })
    }
}