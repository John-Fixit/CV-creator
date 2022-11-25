import React from "react";
import style from "/styles/mycv.module.css";
import Image from "next/image";
import { FaUserAlt } from "react-icons/fa";
function MyCv() {
  const contactInfo = [
    { icon: <FaUserAlt />, name: "Adeoye John" },
    { icon: <FaUserAlt />, name: "Adeoye John" },
    { icon: <FaUserAlt />, name: "Adeoye John" },
    { icon: <FaUserAlt />, name: "Adeoye John" },
    { icon: <FaUserAlt />, name: "Adeoye John" },
    { icon: <FaUserAlt />, name: "Adeoye John" },
  ];
  return (
    <>
      <div className={`col-sm-7 mx-auto shadow-sm p-3 ${style.col_sm}`}>
        <div className={`${style.cvBody} shadow`}>
          <div className={`${style.sideCl} shadow-sm rounded p-2`}>
            <div className={`avatar text-center`}>
              <Image
                src="/user.jpg"
                alt=""
                width="150"
                height="150"
                className="rounded-circle"
              />
            </div>
            <div className={`contact`}></div>
            <b className={``}>Contact</b>
            <hr />
            <p className="row">
              <div>
                <div className="col-2">
                  <FaUserAlt />
                </div>
                <div className="col-8">
                  <span>Adeoye John Oluwakayode</span>
                </div>
              </div>
              {/* {contactInfo.map((item) => (
                <div className="border">
                  <div className="col-2">
                    {item.icon}
                  </div>
                  <div className="col-8">
                    <span>{item.name}</span>
                  </div>
                </div>
              ))} */}
            </p>
          </div>
          <div className={`bodyContent px-2`}>
            Body content
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              soluta, alias tempore officia quia excepturi cupiditate quas
              asperiores eius ullam laborum est beatae quod. Debitis non
              mollitia molestiae quam odit.
            </p>
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
