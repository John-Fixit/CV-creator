import React, { useEffect } from 'react'

function Skills({skill}) {
   useEffect(()=>{
        console.log(skill.length);
   })
  return (
    <>
        <div className={`skill`}>
            <p className={`border-bottom pb-2 opacity-75`}>Skill</p>           
              
            </div>
    </>
  )
}

export default Skills