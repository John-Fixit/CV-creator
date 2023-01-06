import { userModel } from "../../Database/Schema";

export default function handler(req, res){
    if(req.method==="POST"){
        const {profile, userUniqueId, verify} = req.body;
        userModel.findOneAndUpdate({userUniqueId}, {profile, verify}, (err, result)=>{
            if(err){
                res.send({message: "Connection error, try again", status: false})
            }
            else{
                res.send({message: "profile Bio added successfully", status: true})
            }
        })
    }
}