import connection from "../../Database/Connect"
import bcrypt from "bcryptjs"
import { userModel } from "../../Database/Schema"
connection()
export default function handler(req, res){
    if(req.method === 'POST'){
       const {userUniqueId, password} = req.body
       userModel.findOne({userUniqueId}, (err, data)=>{
        if(err){
            res.send({message: "Unexpected error, please check your connection", status: false})
        }
        else{
            bcrypt.compare(password, data.password, (err, same)=>{
               if(err){
                res.send({message: "Internal server error, try again", status: false})
               }
               else{
                same?
                    res.send({message: "Authenticated successfully", status: true, data}):
                    res.send({message: "Incorrect password", status: false})
               }
            })
        }
       }).catch((err)=>{
        console.log(err)
       })
    }  
}