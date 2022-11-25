import React from 'react'

function MyCv() {
  return (
    <>
        <h1>This is the actual CV page</h1>
    </>
  )
}

export default MyCv

MyCv.getLayOut=(page)=>{
    return <>
        {page}
    </>
}