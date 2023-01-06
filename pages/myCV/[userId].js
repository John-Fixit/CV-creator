import React, { useEffect, useState } from "react";
import style from "/styles/mycv.module.css";
import Image from "next/image";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  FaDownload,
  FaEnvelope,
  FaFlag,
  FaGithub,
  FaHome,
  FaPhoneAlt,
  FaUserAlt,
} from "react-icons/fa";
import { useRouter } from "next/router";
import axios from "axios";

function MyCv() {
  const componentRef = useRef()
  const router = useRouter()
  const [personalInfo, setpersonalInfo] = useState({});
  const [employment, setemployment] = useState([]);
  const [education, seteducation] = useState([]);
  const [skill, setskill] = useState([]);
  const [profile, setprofile] = useState("");
  const [languages, setlanguages] = useState([])

  useEffect(() => {
    if (localStorage.personalInfo) {
      setpersonalInfo(JSON.parse(localStorage.personalInfo));
    }
    if (localStorage.employment) {
      setemployment(JSON.parse(localStorage.employment));
    }
    if (localStorage.profileBio) {
      setprofile(JSON.parse(localStorage.profileBio));
    }
    if (localStorage.skill) {
      setskill(JSON.parse(localStorage.skill));
    }
    if (localStorage.education) {
      seteducation(JSON.parse(localStorage.education));
    }
    if (localStorage.language) {
      setlanguages(JSON.parse(localStorage.language));
    }
  }, []);
  useEffect(()=>{
    if(router.query.userId){
      axios.get(`/api/getUserData/${router.query.userId}`).then((res)=>{
        if(res.data.status){

        }
      })
    }
  }, [router.query.user])
  const contactInfo = [
    {
      icon: <FaUserAlt />,
      name: personalInfo.firstName + " " + personalInfo.surname,
    },
    { icon: <FaEnvelope />, name: personalInfo.email },
    { icon: <FaPhoneAlt />, name: personalInfo.phoneContact },
    { icon: <FaHome />, name: personalInfo.strAddress },
    { icon: <FaFlag />, name: personalInfo.country },
    { icon: <FaGithub />, name: `${personalInfo.githubLink? personalInfo.githubLink: "Github repo link"}`},
  ];

  const downloadBtn = useReactToPrint({
    content: ()=>componentRef.current
  })
  return (
    <>
      <div className={`col-sm-8 mx-auto py-2 ${style.col_sm}`}>
      <button className="btn bg-color float-end" onClick={downloadBtn}><FaDownload /> Download</button>
        <div className={`${style.cvBody} shadow-sm`} ref={componentRef}>
          <div className={`${style.sideCl} shadow-sm rounded p-2`}>
            <div className={`avatar text-center`}>
              <Image
                src={personalInfo.profilePic? personalInfo.profilePic : "/user.jpg"}
                alt=""
                width="130"
                height="130"
                className="rounded-circle border border-3 p-1"
              />
          
            </div>
            <div className={`contact`}>
              <p className={`border-bottom pb-2 opacity-75`}>Contact</p>
              {contactInfo.map((item, index) => (
                <div className="d-flex align-items-center" key={index}>
                  <p className="">{item.icon}</p>
                    <p className="px-2" style={{fontSize: '2vh'}}>{item.name}</p>
                  </div>

              ))}
            </div>
            <div className={`skill`}>
              <p className={`border-bottom pb-2 opacity-75`}>Skill</p>
              {skill.map((skill, index) => (
                <div className="my-2" key={index}>
                  <span>{skill.skillName}</span>
                  <input type="range" value={skill.skillRange} />
                </div>
              ))}
            </div>
          </div>
          {/* body content */}
          <div className={`bodyContent px-2 py-3`}>
            <div className={`profile my-2 h-25`}>
              <b className="text-danger">Profile</b>
              <p style={{ textAlign: "justify" }}>{profile}</p>
            </div>

            <div className={`employment my-2`}>
              <b className="text-danger">Employment</b>
              {employment.map((item) => (
                <div className={`my-2`}>
                  <div className="d-flex">
                    <div className="col-4">
                      <b className="text-color">{item.position}</b>
                      <p>
                       {item.startDate} - {item.present? "present" : item.endDate}
                      </p>
                    </div>
                    <div className="col-8 px-3">
                      <b className="text-danger">{item.employer}</b>
                      <p>{item.city}</p>
                    </div>
                  </div>
                  <div className="">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>

            <div className={`education my-2`}>
              <b className="text-danger">Education</b>
              {education.map((item) => (
                <div className={`my-2`}>
                  <div className="d-flex">
                    <div className="col-4">
                    <p>
                       {item.startDate} - {item.present? "present" : item.endDate}
                      </p>
                    </div>
                    <div className="col-8 px-3">
                    <b className="text-color">{item.education}</b>
                      <p>{item.school}</p>
                      <small>{item.address}</small>
                    </div>
                  </div>
           
                </div>
              ))}
            </div>

            <div className={`language my-2`}>
              <b className="text-danger">Language</b>
              {languages.map((item) => (
                <div className={`my-2`}>
                  <ul>
                    <li>{item.languageName} - <span>{item.languageRange}%</span>
                    <input type="range" value={item.languageRange} />
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyCv;

MyCv.getLayOut = (page) => {
  return <>{page}</>;
};




