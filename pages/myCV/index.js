import React, { useEffect, useState } from "react";
import style from "/styles/mycv.module.css";
import Image from "next/image";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import {
  FaDownload,
  FaEnvelope,
  FaFlag,
  FaGithub,
  FaHome,
  FaPhoneAlt,
  FaUserAlt,
} from "react-icons/fa";

function MyCv() {
  const componentRef = useRef()
  const [personalInfo, setpersonalInfo] = useState({});
  const [employment, setemployment] = useState([]);
  const [education, seteducation] = useState([]);
  const [skill, setskill] = useState([]);
  const [profile, setprofile] = useState("");

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
  }, []);
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
      <div className={`col-sm-7 mx-auto shadow-sm py-2 ${style.col_sm}`}>
      <button className="btn bg-color float-end" onClick={downloadBtn}><FaDownload /> Download</button>
        <div className={`${style.cvBody} shadow`} ref={componentRef}>
          <div className={`${style.sideCl} shadow-sm rounded p-2`}>
            <div className={`avatar text-center`}>
              <Image
                src="/user.jpg"
                alt=""
                width="130"
                height="130"
                className="rounded-circle"
              />
          
            </div>
            <div className={`contact`}>
              <p className={`border-bottom pb-2 opacity-75`}>Contact</p>
              {contactInfo.map((item, index) => (
                <div className="row" key={index}>
                  <p className="col-1">{item.icon}</p>
                  <div className="col-9">
                    <span>{item.name}</span>
                  </div>
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

            <div className={`employment my-2 h-25`}>
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
                    <div className="col-8">
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
                    <div className="col-8">
                    <b className="text-color">{item.education}</b>
                      <p>{item.city}</p>
                    </div>
                  </div>
                  {/* <div className=" p-2">
                    {item.description}
                  </div> */}
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
