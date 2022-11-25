    import React, {useEffect, useState} from 'react'
    import styles from "/styles/experience.module.css";
    import { useRouter } from 'next/router';
    function Register() {
        const router = useRouter()
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [userDetail, setuserDetail] = useState({})
    const [notValid, setnotValid] = useState(undefined)
    useEffect(()=>{
        if(localStorage.personalInfo){
           let user = JSON.parse(localStorage.getItem("personalInfo"))
            setuserDetail(user)
            setemail(user.email)
        }
    }, [])

    const submit=()=>{
        userDetail.password = password
        if(password != ""){
            localStorage.setItem("personalInfo", JSON.stringify(userDetail))
            setnotValid(false)
            setpassword(""); setemail("")
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
            <h3 className='card-header text-center text-color'>Proceed to have an account in other to keep your details</h3>
            <div className='form my-2'>
                <label htmlFor="" className='fw-bold'>E-mail Address</label>
                <div className='form-floating'>
                    <input type="email" className='form-control' placeholder='email' value={email} readOnly/>
                    <label htmFor="">Email</label>
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
                <button className='btn bg-color btn-danger' onClick={submit}>Submit</button>
        </div>
        </div>
        </div>
   </>
  )
}

export default Register