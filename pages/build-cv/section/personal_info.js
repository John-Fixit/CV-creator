import React from "react";
import styles from "/styles/experience.module.css";
import { useRouter } from "next/router";
import Form1 from "../../../Components/form1";
import { FaArrowLeft } from "react-icons/fa"

function Cnct() {
  return (
    <>
      <div className="container">
        <div className={`border-0 shadow`} style={{marginTop: '10vh'}}>
          <div className="row">
            <div className={`col-sm-8 mx-auto p-2`}>
              <Form1/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cnct;
