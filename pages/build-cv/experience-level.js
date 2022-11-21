import React from "react";
import style from "/styles/experience.module.css";
function experienceLevel() {
  const levels = [{ level: "Minimal Experince", year: "BEGINNER" }];
  const getInfo = (event) => {
    console.log((event.target.innerText).split(''));
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
              <section className={style.section}>
                <p>Minimal Experince</p>
                <p>BEGINNER</p>
              </section>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 my-2 mx-auto">
              <section className={style.section} onClick={() => getInfo(event)}>
                <p>0-3 years | ENTRY LEVEL</p>
                {/* <p>ENTRY LEVEL</p> */}
              </section>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 my-2 mx-auto">
              <section className={style.section}>
                <p>3-5 years</p>
                <p>MID-LEVEL</p>
              </section>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 my-2 mx-auto">
              <section className={style.section}>
                <p>5-10 years</p>
                <p>PROFESSIONAL</p>
              </section>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 my-2 mx-auto">
              <section className={style.section}>
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
