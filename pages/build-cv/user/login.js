import React, {useEffect, useState} from 'react'
import styles from "/styles/experience.module.css";
import { useRouter } from 'next/router';
function Login() {
    const router = useRouter()
const [userUniqueId, setuserUniqueId] = useState("")
const [password, setpassword] = useState("")
const [userDetail, setuserDetail] = useState({})
const [notValid, setnotValid] = useState(undefined)
useEffect(()=>{
    if(localStorage.personalInfo){
       let user = JSON.parse(localStorage.getItem("personalInfo"))
        setuserDetail(user)
    }
    }, [])
const submit=()=>{
    userDetail.password = password
    if(password != ""){
        localStorage.setItem("personalInfo", JSON.stringify(userDetail))
        setnotValid(false)
        setpassword(""); setuserUniqueId("")
    }
    else{
        setnotValid(true)
    }
}
return (
<>
    <div className={`col-sm-5 mx-auto shadow-sm p-3 border-0 ${styles.experience}`}>
        <div className='rounded p-2 bg-danger'>
        <div className='card shadow border-0 p-2'>
        <h3 className='card-header text-center text-color'>Log in to continue creating your CV</h3>
        <div className='form my-2'>
            <label htmlFor="" className='fw-bold'>Your Unique Id</label>
            <div className='form-floating'>
                <input type="email" className='form-control' placeholder='email' />
                <label htmFor="">Unique Id</label>
            </div>
        </div>
        <div className='form my-2'>
            <label htmlFor="" className='fw-bold'>Password</label>
            <div className='form-floating'>
                <input type="password"  className={`form-control ${notValid && "is-invalid border-danger"}`} placeholder='password' onChange={(e)=>setpassword(e.target.value)}/>
                <label htmFor="">Password</label>
            </div>
            <span className="text-danger">{notValid&&'Password is required for the secure of your details'}</span>
        </div>
            <button className='btn bg-color' onClick={submit}>Log In</button>
    </div>
    </div>
    </div>
</>
)
}

export default Login