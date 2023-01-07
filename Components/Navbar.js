import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
function Navbar() {
  const [selectedIndex, setselectedIndex] = useState(undefined)
  const router = useRouter()
  const labels = [
    "Personal_info",
    "Education",
    "Profile",
    "Employment",
    "Skill",
    "Language",
  ];

const changeLabel=(label, index)=>{
    setselectedIndex(index)
    router.push(`/build-cv/section/${label.toLowerCase()}`)
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              {labels.map((label, index) => {
                return <li className={`nav-item rounded-pill ${index == selectedIndex&&"selected px-2 bg-color"}`} key={label} onClick={()=>changeLabel(label, index)}>
                  <a
                    className={`nav-link ${index == selectedIndex&&"px-2 bg-color"}`}
                    href="#"
                    tabindex="-1"
                  >
                    {label}
                  </a>
                </li>;
              })}
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
          gap: 3rem;
          .selected{
            transition: all 0.5s ease;
          }
        }

      }
    }
  }
`
