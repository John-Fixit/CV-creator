export default function handler(req, res){
    if(req.method==="POST"){
        const {userUniqueId, skillDetail} = req.body;
        userModel.findOneAndUpdate(
            { userUniqueId },
            { $push: { skill: skillDetail } },
            (err, result) => {
              if (err) {
                  console.log(err)
                res.send({
                  message:
                    "Unexpected error, please check your connection",
                  status: false,
                });
              } else {
                res.send({
                  message:
                    "Skill added successfully, add another one or click next to continue",
                  status: true,
                });
              }
            }
          );
    }
}