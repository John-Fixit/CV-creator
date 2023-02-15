import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
function Navbar() {
  const [selectedIndex, setselectedIndex] = useState(undefined)
  const [currentRoute, setcurrentRoute] = useState("")
  const router = useRouter()
  const labels = [
    "Personal_info",
    "Education",
    "Profile",
    "Employment",
    "Skill",
    "Language",
  ];
  useEffect(()=>{
    setcurrentRoute((router.route).split("/")[2]) 
  })

const changeLabel=(label, index)=>{
    setselectedIndex(index)
    router.push(`/build-cv/section/${label.toLowerCase()}`)
}

const opp = {
  
}

  return (
    <Component>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light">
        <div className="container">
          <a
            className="navbar-brand fw-bold fs-4 text-decoration-none"
            href="#"
          >
            <span className="" style={{ color: "navy" }}>
              Create
            </span>
            <span className="text-danger">My</span>
            <span style={{ color: "navy" }}>CV</span>
          </a>
      {
        currentRoute =="section" &&
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
      }
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb- mb-lg-0" style={{ display: "flex",
          gap: "3rem"}}>
              { currentRoute =="section" &&
              labels.map((label, index) => (
                 <li className={`nav-item rounded-pill ${index == selectedIndex&&"selected px-2"}`} key={label} onClick={()=>changeLabel(label, index)}>
                  <a
                    className={`nav-link ${index == selectedIndex&&"px-2 bg-color"}`}
                    href="#"
                    tabIndex="-1"
                  >
                    {label}
                  </a>
                </li>
              ))}
              
            </ul>
          </div>
        </div>
      </nav>
    </Component>
  );
}

export default Navbar;

const Component = styled.div`
  nav{
    .container{
      .navbar-collapse{
        ul{
          display: flex;
          // gap: 3rem;
          .nav-item{
            border-radius: 5vh;
          }
          .selected{
            background-color: navy;
            transition: all 0.5s ease;
          }
        }

      }
    }
  }
  @media only screen and (max-width: 625px){
    ul{
      gap: 0.5rem !important;
    }
  }
`
