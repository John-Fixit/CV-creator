    import React, {useEffect, useState} from 'react'
    import styles from "/styles/experience.module.css";
    import { useRouter } from 'next/router';
    import { ToastContainer, toast } from 'react-toastify';
    import "react-toastify/dist/ReactToastify.css"
import axios from 'axios';
    function Register() {
        const router = useRouter()
    const [uniqueId, setuniqueId] = useState("")
    const [password, setpassword] = useState("")
    const [userDetail, setuserDetail] = useState({})
    const [notValid, setnotValid] = useState(undefined)
    useEffect(()=>{
        if(localStorage.userUniqueId){
           let userUniqueId = JSON.parse(localStorage.getItem("userUniqueId"))
            setuniqueId(userUniqueId)
        }
        }, [])
    const submit=()=>{
        const reqDetail = {userUniqueId, password}
        userDetail.password = password
        if(password != ""){
            setnotValid(false)
            axios.post("/api/addPassword", reqDetail).then((res)=>{
                    console.log(res)
            }).catch((err)=>{
                toast.error(err)
            })
            // localStorage.setItem("personalInfo", JSON.stringify(userDetail))
            setpassword("");
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
            <h3 className='card-header text-center text-color'>Proceed create your password to secure your details</h3>
            <div className='form my-2'>
                <label htmlFor="" className='fw-bold'>Unique Id</label>
                <div className='form-floating'>
                    <input type="text" className='form-control' placeholder='Unique Id' value={uniqueId} readOnly/>
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
                <button className='btn bg-color' onClick={submit}>Submit</button>
        </div>
        </div>
        </div>
        <ToastContainer />
   </>
  )
}

export default Register