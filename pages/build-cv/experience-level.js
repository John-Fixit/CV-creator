import React, { useState } from "react";
import style from "/styles/experience.module.css";
import { useRouter } from "next/router";
function ExperienceLevel() {
  const router = useRouter()
  // const levels = [{ level: "Minimal Experince", year: "BEGINNER", id: "0" }, {level: "ENTRY LEVEL", year: "0-3 years", id: "1" }, {level: "MID-LEVEL", year: "3-5 years", id: "3" }, {level: "PROFESSIONAL", year: "5-10 years", id: "4" }, {level: "EXPERIENCE PROFESSIONAL", year: "10+", id: "5" }];
  const levels = [{ level: "Minimal Experince", year: "BEGINNER", id: "0" }, {level: "ENTRY LEVEL", year: "0-3 years", id: "1" }, {level: "others", year: "3+ years", id: "3" }];
  const [text, settext] = useState("")
  const getInfo = (params) => {
    if(params <2){
        alert('you are welcome to world of Techies!')
    }
      router.push('/build-cv/select-cv')
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
           {
            levels.map((item)=>(
              <div className="col-lg-3 col-md-4 col-sm-12 my-2 mx-auto" key={item.id}>
              <section className={style.section} onClick={() => getInfo(`${item.id}`)}>
                <p>{item.level}</p>
                <p>{item.year}</p>
              </section>
            </div>
            ))
           }
            {/* <div className="col-lg-3 col-md-4 col-sm-12 my-2 mx-auto">
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
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ExperienceLevel;
