import React, { useState } from 'react'
import styles from '../../Styles/home.module.css'

const SectionTwo = () => {
  const [headingOne , setHeadingOne] = useState(false)
  const [headingTwo , setHeadingTwo]= useState(false)
  const [headingThree , setHeadingThree] = useState(false)

  return (
    <>
    <section>
        <div className={`${styles.three_buttons}`}>
           <button onClick={()=>{setHeadingOne(true); setHeadingTwo(false); setHeadingThree(false)}} style={headingOne ? {opacity:"1" ,borderBottom:"solid 3px black"} : null}>Best seller</button>
           <button onClick={()=>{setHeadingOne(false); setHeadingTwo(true); setHeadingThree(false)}} style={headingTwo ? {opacity:"1" ,borderBottom:"solid 3px black"} : null}>New arrivals</button>
           <button onClick={()=>{setHeadingOne(false); setHeadingTwo(false); setHeadingThree(true)}} style={headingThree ? {opacity:"1" ,borderBottom:"solid 3px black"} : null}>On Sale</button>
        </div>
    </section>
    </>
  )
}

export default SectionTwo