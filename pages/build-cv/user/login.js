import React, {useEffect, useState} from 'react'
import styles from "/styles/experience.module.css";
import { useRouter } from 'next/router';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
function Login() {
    const router = useRouter()
const [userUniqueId, setuserUniqueId] = useState("")
const [password, setpassword] = useState("")

const [notValid, setnotValid] = useState(undefined)

const submit=()=>{
    if(!!password){
        axios.post("/api/login", {userUniqueId, password}).then((res)=>{
            
            if(res.data.status){
                console.log(res.data)
                setpassword(""); setuserUniqueId("")
                setnotValid(false)
                localStorage.setItem("userUniqueId", JSON.stringify(res.data.data.userUniqueId))
                router.push(`/build-cv/section/${res.data.data.verify}`)
            }
            else{
                toast.error(res.data.message)
            }
        }).catch((err)=>{
            toast.error(err.message)
        })
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
                <input type="email" className='form-control' placeholder='email' onChange={(e)=>setuserUniqueId(e.target.value)}/>
                <label htmFor="">Unique Id</label>
            </div>
        </div>
        <div className='form my-2'>
            <label htmlFor="" className='fw-bold'>Password</label>
            <div className='form-floating'>
                <input type="password"  className={`form-control ${notValid && "is-invalid border-danger"}`} placeholder='password' onChange={(e)=>setpassword(e.target.value)} value={password}/>
                <label htmFor="">Password</label>
            </div>
            <span className="text-danger">{notValid&&'Password is required for the secure of your details'}</span>
        </div>
            <button className='btn bg-color' onClick={submit}>Log In</button>
    </div>
    </div>
    </div>
    <ToastContainer />
</>
)
}

export default Login