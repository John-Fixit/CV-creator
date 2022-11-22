import React, { useState } from "react";
import style from "/styles/experience.module.css";
import { useRouter } from "next/router";
function experienceLevel() {
  const router = useRouter()
  const levels = [{ level: "Minimal Experince", year: "BEGINNER" }, {level: ""}];
  const [text, settext] = useState("")
  const getInfo = (params) => {
    if(params <2){

    }
    else{
      router.push('/build-cv/select-cv')
    }
  };
  return (
    <>
      <div className="container text-center">
        <div className={style.experience}>
          <div>
            <h4 className="">How long have you been working?</h4>
            <p className="fs-5">
              We'll find the best templates for your experience level.
            </p>
          </div>
          <div className="row my-3">
            <div className="col-lg-3 col-md-4 col-sm-12 my-2 mx-auto">
              <section className={style.section} onClick={() => getInfo(0)}>
                <p>Minimal Experince</p>
                <p>BEGINNER</p>
              </section>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 my-2 mx-auto">
              <section className={style.section} onClick={() => getInfo(1)}>
                <p>0-3 years</p>
                <p>ENTRY LEVEL</p>
              </section>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 my-2 mx-auto">
              <section className={style.section} onClick={() => getInfo(2)}>
                <p>3-5 years</p>
                <p>MID-LEVEL</p>
              </section>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 my-2 mx-auto">
              <section className={style.section} onClick={() => getInfo(3)}>
                <p>5-10 years</p>
                <p>PROFESSIONAL</p>
              </section>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 my-2 mx-auto">
              <section className={style.section} onClick={() => getInfo(4)}>
                <p>10+</p>
                <p>EXPERIENCED PROFESSIONAL</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default experienceLevel;
