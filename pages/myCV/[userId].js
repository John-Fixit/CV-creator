import React, { useEffect, useState } from "react";
import style from "/styles/mycv.module.css";
import Image from "next/image";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import loaderStyle from "/styles/loader.module.css";
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
  const componentRef = useRef();
  const router = useRouter();
  const [isLoading, setisLoading] = useState(true);
  const [userDetail, setUserDetail] = React.useState(undefined);

  useEffect(() => {
    console.log(router.query.userId)
    if (router.query.userId) {
      axios.get(`/api/getUserData/${router.query.userId}`).then((res) => {
        console.log(res);
        if (res.data.status) {
          setisLoading(false);
          setUserDetail(res.data.data);
        }
      });
    }
  }, [router]);
  const contactInfo = [
    {
      icon: <FaUserAlt />,
      name: userDetail
        ? `${userDetail.firstName} ${userDetail.surname}`
        : "Full Name",
    },
    { icon: <FaEnvelope />, name: userDetail ? userDetail.email : "email" },
    {
      icon: <FaPhoneAlt />,
      name: userDetail ? userDetail.phoneContact : "Contact",
    },
    { icon: <FaHome />, name: userDetail ? userDetail.strAddress : "Address" },
    { icon: <FaFlag />, name: userDetail ? userDetail.country : "Country" },
    {
      icon: <FaGithub />,
      name: `${
        userDetail && !!userDetail.githubLink
          ? userDetail.githubLink
          : "Github Repo link"
      }`,
    },
  ];

  const downloadBtn = useReactToPrint({
    content: () => componentRef.current,
  });
  const backBtn=()=>{
      router.back()
  }
  return (
    <>
      <div className={`mx-auto ${style.body}`}>
        <div >
        {!isLoading && (
          <button className={`btn btn-danger ${style.backBtn}`} onClick={backBtn}>
            Back
          </button>
        )}
        {!isLoading && (
          <button className={`btn bg-color float-end ${style.dwnBtn}`} onClick={downloadBtn}>
            <FaDownload />
          </button>
        )}
        <div className={`${style.cvBody}`} ref={componentRef}>
          <div className={`${style.sideCl} shadow-sm rounded p-2`}>
            <div className={`avatar text-center`}>
              <Image
                src={
                  userDetail && !!userDetail.profilePic
                    ? userDetail.profilePic
                    : "/user.jpg"
                }
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
                  <p className="px-2" style={{ fontSize: "2vh" }}>
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
            <div className={`skill`}>
              <p className={`border-bottom pb-2 opacity-75`}>Skill</p>
              {userDetail &&
                userDetail.skill.length &&
                userDetail.skill.map((skill, index) => (
                  <div className="my-2" key={index}>
                    <span>{skill.skillName}</span>
                    <input type="range" value={skill.skillRange} />
                  </div>
                ))}
            </div>
          </div>
          {/* body content */}
          {
            isLoading? <div className={`${loaderStyle.loader}`}>
            <div className={`${loaderStyle.bar1}`}></div>
            <div className={`${loaderStyle.bar2}`}></div>
            <div className={`${loaderStyle.bar3}`}></div>
            <div className={`${loaderStyle.bar4}`}></div>
            <div className={`${loaderStyle.bar5}`}></div>
            <div className={`${loaderStyle.bar6}`}></div>
            <div className={`${loaderStyle.bar7}`}></div>
            <div className={`${loaderStyle.bar8}`}></div>
            <div className={`${loaderStyle.bar9}`}></div>
            <div className={`${loaderStyle.bar10}`}></div>
            <div className={`${loaderStyle.bar11}`}></div>
            <div className={`${loaderStyle.bar12}`}></div>
        </div>: 
          <div className={`bodyContent px-2 py-3`}>
            <Profile className={`profile my-2`}>
              {userDetail ? (
                <div>
                  <b className="text-danger">Profile</b>
                  <p style={{ textAlign: "justify" }}>
                    {!!userDetail.profile ? userDetail.profile : "Profile"}
                  </p>
                </div>
              ) : (
                ""
              )}
            </Profile>

            <div className={`employment my-2`}>
              {userDetail && userDetail.employment.length ? (
                <div>
                  <b className="text-danger">Employment</b>
                  {userDetail.employment.map((item) => (
                    <div className={`my-2`}>
                      <div className="d-flex">
                        <div className="col-4">
                          <b className="text-color">{item.position}</b>
                          <p>
                            {item.startDate} -{" "}
                            {item.present ? "present" : item.endDate}
                          </p>
                        </div>
                        <div className="col-8 px-3">
                          <b className="text-danger">{item.employer}</b>
                          <p>{item.city}</p>
                        </div>
                      </div>
                      <div className="">{item.description}</div>
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>

            <div className={`education my-2`}>
              {userDetail && userDetail.education.length ? (
                <div>
                  <b className="text-danger">Education</b>
                  {userDetail.education.map((item) => (
                    <div className={`my-2`}>
                      <div className="d-flex">
                        <div className="col-4">
                          <p>
                            {item.startDate} -{" "}
                            {item.present ? "present" : item.endDate}
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
              ) : (
                ""
              )}
            </div>

            <div className={`language my-2`}>
              {userDetail && userDetail.language.length ? (
                <div>
                  <b className="text-danger">Language</b>
                  {userDetail.language.map((item) => (
                    <div className={`my-2`}>
                      <ul>
                        <li>
                          {item.languageName} -{" "}
                          <span>{item.languageRange}%</span>
                          <input type="range" value={item.languageRange} />
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          }
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

const Profile = styled.div`
  max-height: "5vh";
`;
