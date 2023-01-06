import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    surname: {
        type: String,
        require: true
    },
    firstName: {
        type: String,
        require: true
    },
    strAddress: {
        type: String,
        require: true
    },
    cityTown: {
        type: String,
        require: true
    },
    country: {
        type: String,
        require: true
    },
    phoneContact: {
        type: String,
        require: true
    },
    githubLink: {
        type: String,
        require: true
    },
    profilePic: String,
    email: String,
    password: String,
    education: [],
    employment: [],
    language: [],
    skill: [],
    profile: String,
    certificate: [],
    userUniqueId: String,
    verify: String
})

let userModel = mongoose.models.users_tb || mongoose.model("users_tb", userSchema)

export {userModel}
