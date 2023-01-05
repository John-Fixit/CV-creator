import { userModel } from "../../Database/Schema";

export default function handler(req, res){
    if(req.method==="POST"){
        const {profile, userUniqueId} = req.body;
        userModel.findOneAndUpdate({userUniqueId}, {profile}, (err, result)=>{
            if(err){
                res.send({message: "Connection error, try again", status: false})
            }
            else{
                res.send({message: "profile Bio added successfully", status: true})
            }
        })
    }
}