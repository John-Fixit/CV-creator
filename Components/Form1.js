import React, {useRef, useState} from "react";
import styles from "../styles/experience.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

function Form1() {
  const router = useRouter()
  const [firstName, setfirstName] = useState("");
  const [surname, setsurname] = useState("");
  const [strAddress, setstrAddress] = useState("");
  const [cityTown, setcityTown] = useState("");
  const [country, setcountry] = useState("");
  const [phoneContact, setphoneContact] = useState("");
  const [email, setemail] = useState("")
  const [notValid, setnotValid] = useState(undefined)
  const [githubLink, setgithubLink] = useState("")
  const [profilePic, setprofilePic] = useState("")
  
  const handleChange=(e)=>{
    let fileTypeRequired = [
      'jpg', 'png', 'jpeg', 'gif'
    ]
        let fileSelected = e.target.files[0]
        let fileType = fileSelected.name.split('.')
        let fileSize = fileSelected.size
        fileType = fileType[1]
       if(fileTypeRequired.includes(fileType)){
          if(fileSize > 10000000){
            alert(`the size of image selected is greater than 10mb and can not be uploaded`)
          }
          else{
            let reader = new FileReader();
            reader.readAsDataURL(fileSelected)

            reader.onload=()=>{
              setprofilePic(reader.result);
            }
          }
       }
       else{
          alert(`oooh sorry, you are uploading ${fileType} image, and it is not allowed. (only allowed extension is: jpg, png, jpeg, gif`)
       }
      }
  const nextOpt =()=>{

   let userDetail = {firstName, surname, strAddress, cityTown, country, phoneContact, email, password: "", githubLink, profilePic};
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

  return (
    <>
      <div className={`px-3`}>
        <h2><span className="text-danger">Personal</span> <span className="text-color"> Information</span><hr /></h2>
        <h5 className="text-color">What's the best way for employers to contact you?</h5>
       
        <div className="form">
          <div className="profile_imageSetUp p-3">
              <div className="row shadow-sm">
                <div className="col-md-5 align-items-center text-center mx-auto">
                    <Image src={profilePic != ""? profilePic : "/user.jpg"} alt="loading" width="300" height="300" className="align-center "/>
                </div>
                <div className="col-md-7">
                  <h5>Add a photo to your CV</h5>
                  <p>Supported file formats are .jpg, .gif and .png. The size limit is set at 10 MB.</p>
                  <label htmlFor="nFile" >
                  <p className="btn rounded-pill text-color" style={{border: '1px solid navy'}}>Add Photo</p>
                  <input type="file" id="nFile" className="d-none" onChange={(e)=>handleChange(e)}/>
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
                <label htmlFor="">ADDRESS</label>
                <div className="form-floating rounded-0">
                  <input
                    type="text"
                    placeholder="address"
                    className="form-control"
                    onChange={(e)=>setstrAddress(e.target.value)}
                  />
                  <label htmlFor="">address</label>
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
          <div className="col-sm-12">
          <div className="form-block">
                <label htmlFor="">Github Repo Link</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e)=>setgithubLink(e.target.value)}
                  />
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
