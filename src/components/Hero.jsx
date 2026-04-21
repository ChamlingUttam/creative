import React, { useEffect, useRef } from 'react'

const Hero = () => {
    const videoRef = useRef(

        useEffect(()=>{
            if(videoRef.current) videoRef.current.playbackRate = 2
        },[])
    )
  return (
    <section id='hero'>
        <div>
           <h1>MacBook Pro</h1>
           <img src="/title.png" alt="title" />
        </div>
        <video src='/videos/hero.mp4' autoPlay muted playsInline/>
        <button>
            Buy
        </button>
        <p>from $1500 - $5000</p>

    </section>
  )
}

export default Hero
