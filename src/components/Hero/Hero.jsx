import React from 'react'
import styles from "./Hero.module.css"
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className ={styles.container}>
      <div className={styles.content}>
         <h1 className={styles.title}>
            Hi, I'm Aakanksha</h1>
         <p className={styles.description}>
            I'm a java full-stack developer with
             6 months of experience using Java.   </p>
         <a href="#contact" 
         className={styles.contactBtn}> Contact me </a>
      </div>
      <img src={getImageUrl("hero/heroImage.png")} 
      alt="My image "className={styles.heroImg}/>
      <div className={styles.topBlur}/>
      <div className={styles.bottomBlur}/>
    </section>
  )
}
