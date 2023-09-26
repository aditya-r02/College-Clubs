import React, { useState } from 'react'
import Temp from "./Temp"

import photo from "./dance1.png"

export default function Largecard() {

    const clubName="DANCE CLUB";
    const objective="Every year Google developers release exciting new updates to the world's most popular operating system. We always have sessions to keep you updated and mastering the latest trends in modern Android development"
    
    return (
        <div className='flex  flex-col  justify-center bg-[#fafafa] items-center p-4'>
            <div className='flex flex-row w-full px-36'>
                <div className='w-[50%]'>
                    <img alt="dance" src={photo} className="w-[75%] aspect-square"></img>
                </div>
                <div className='flex flex-col justify-center w-[50%] space-y-3'>
                    <h1 className="text-3xl font-bold p-1 ">DANCE CLUB</h1>
                    <p className='text-[#637282]'>
                    With the philosophy “Love the art in yourself and not yourself in the art”, the Dance Club is one of the most glamorous clubs in UIET. The audience participation in this club is overwhelming, and the Duo Dance and the Group Dance events are among the most eagerly awaited events of the year.
                       </p>
                    <Temp  clubName={clubName} objective={objective} />
              
                    
                </div>
            </div>

           
        </div>
    )
}
