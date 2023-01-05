import { userModel } from "../../Database/Schema";

export default async function handler(req, res, next) {
  if (req.method === "POST") {
    const { userUniqueId, employmentDetail } = req.body;
    userModel.findOneAndUpdate(
      { userUniqueId },
      { $push: { employment: employmentDetail } },
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
              "Employment added successfully, add another one or click next to continue",
            status: true,
          });
        }
      }
    );
  }
}
