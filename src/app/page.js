"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
export default function Home() {
  const [advice,setAdvice]=useState('click the button to get advice');
  const [count,setCount]=useState(0);

  async function getadvice(){
    const res=await fetch("https://api.adviceslip.com/advice");
    const data =await res.json();
    setAdvice(data.slip.advice);
    setCount((c)=>c+1);

  };
  return (
    <div className={styles.container}>
      <div className={styles.circle}></div>
      <div className={styles.circle2}></div>
      <h1>{advice}</h1>
      <button className={styles.button} onClick={getadvice} >get advice</button>
      <div className={styles.shadow}></div>
      <p>you read  <strong>{count}</strong> advice </p>
      <div className={styles.angle}></div>
    </div>
  );
}
