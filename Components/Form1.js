import React, {useRef, useState} from "react";
import styles from "../styles/experience.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
// import useReactToPrint from "react-to-print"

function Form1() {
  const componentRef = useRef()
  const router = useRouter()
  const [firstName, setfirstName] = useState("");
  const [surname, setsurname] = useState("");
  const [strAddress, setstrAddress] = useState("");
  const [cityTown, setcityTown] = useState("");
  const [country, setcountry] = useState("");
  const [phoneContact, setphoneContact] = useState("");
  const [email, setemail] = useState("")
  const [notValid, setnotValid] = useState(undefined)
  
  // const handleChange=(e)=>{
  //       let fileSelected = e.target.files[0]
  //       console.log(fileSelected);
  //     }
  const nextOpt =()=>{

   let userDetail = {firstName, surname, strAddress, cityTown, country, phoneContact, email, password: ""};
   if(email == ""){
      setnotValid(true)
   }
   else{
      setnotValid(false)
     localStorage.setItem('personalInfo', JSON.stringify(userDetail));
     router.push('/build-cv/section/education');
   }

}

const navigateBack =()=>{
  router.back();
}

// const handlePrint= useReactToPrint({
//   content: ()=>componentRef.content
// })
  return (
    <>
      <div className={`px-3`}>
        <h2><span className="text-danger">Personal</span> <span className="text-color"> Information</span><hr /></h2>
        <h5 className="text-color">What's the best way for employers to contact you?</h5>
       
        <div className="form">
          <div className="profile_imageSetUp p-3">
              <div className="row shadow-sm">
                <div className="col-sm-5 align-items-center text-center mx-auto">
                    <Image src="/user.jpg" alt="" width="300" height="300" className="align-center "/>
                </div>
                <div className="col-sm-5">
                  <h5>Add a photo to your CV</h5>
                  <p>Supported file formats are .jpg, .gif and .png. The size limit is set at 10 MB.</p>
                  <label htmlFor="nFile" >
                  <p className="btn rounded-pill text-color" style={{border: '1px solid navy'}}>Add Photo</p>
                  <input type="file" id="nFile" accept=".png, .jpg, .gif" className="d-none"/>
                  </label>
                </div>
              </div>
          </div>
          <div className="row my-2">
            <div className="col-sm-6">
              <div className="form-block">
                <label htmlFor="">FIRST NAME</label>
                <div className="form-floating rounded-0">
                  <input
                    type="text"
                    placeholder="e.g John"
                    className="form-control"
                    onChange={(e)=>setfirstName(e.target.value)}
                  />
                  <label htmlFor="">first name</label>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-block">
                <label htmlFor="">SURNAME</label>
                <div className="form-floating">
                  <input
                    type="text"
                    placeholder="e.g John"
                    className="form-control"
                    onChange={(e)=>setsurname(e.target.value)}
                  />
                  <label htmlFor="">surname</label>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-2">
            <div className="col-sm-12">
              <div className="form-block">
                <label htmlFor="">STREET ADDRESS</label>
                <div className="form-floating rounded-0">
                  <input
                    type="text"
                    placeholder="e.g John"
                    className="form-control"
                    onChange={(e)=>setstrAddress(e.target.value)}
                  />
                  <label htmlFor="">street address</label>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-2">
            <div className="col-sm-6">
              <div className="form-block">
                <label htmlFor="">CITY/TOWN</label>
                <div className="form-floating rounded-0">
                  <input
                    type="text"
                    placeholder="e.g John"
                    className="form-control"
                    onChange={(e)=>setcityTown(e.target.value)}
                  />
                  <label htmlFor="">e.g Ogbomoso</label>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-block">
                <label htmlFor="">COUNTRY</label>
                <div className="form-floating">
                  <input
                    type="text"
                    placeholder="e.g John"
                    className="form-control"
                    onChange={(e)=>setcountry(e.target.value)}
                  />
                  <label htmlFor="">Your Country</label>
                </div>
              </div>
            </div>
            
          </div>
          <div className="row my-2">
            <div className="col-sm-6">
              <div className="form-block">
                <label htmlFor="">PHONE</label>
                <div className="form-floating rounded-0">
                  <input
                    type="tel"
                    placeholder="e.g John"
                    className="form-control"
                    onChange={(e)=>setphoneContact(e.target.value)}
                  />
                  <label htmlFor="">Phone Number</label>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-block">
                <label htmlFor="">E-MAIL ADDRESS</label>
                <div className="form-floating">
                  <input
                    type="text"
                    placeholder="e.g John"
                    className={`form-control ${notValid && "is-invalid border-danger"}`}
                    onChange={(e)=>setemail(e.target.value)}
                  />
                  <label htmlFor="">E-mail Address</label>
                </div>
                <span className="text-danger">{notValid&&'Email is required before proceeding'}</span>
              </div>
            </div>
          </div>
          
        </div>
        <div className="d-flex justify-content-between my-4">
              <button
                className="btn rounded-pill btn-lg btn-danger"
                onClick={navigateBack}
              >
                <FaArrowLeft /> back
              </button>
              <button
                className="btn btn-lg bg-color"
                onClick={nextOpt}
              >
                <FaArrowRight/> Next
              </button>
            </div>
           
      </div>
    </>
  );
}

export default Form1;
