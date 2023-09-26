import React, { useState } from 'react'
import Temp from "./Temp"
import photo from "./singer.png"

export default function Singer() {
    const clubName="MUSIC CLUB";
    const objective="Every year Google developers release exciting new updates to the world's most popular operating system. We always have sessions to keep you updated and mastering the latest trends in modern Android development"
   
    return (
        <div className='flex  flex-col  justify-center  items-center p-4'>
           
            <div className='flex flex-row w-full px-36'>
                <div className='flex flex-col justify-center w-[50%] space-y-3'>
                    <h1 className="text-3xl font-bold p-1 ">MUSIC CLUB</h1>
                    <p className='text-[#637282]'>
                    Known for uniting the music fraternity of UIET, the Music Club promotes the music culture among the students and faculty alike, giving a stage to willing performers and a platform to beginners to cultivate their skills. 
                    

                    </p>
                    <Temp  clubName={clubName} objective={objective} />
              
                    
                </div>
                <div className='w-[50%] flex justify-end '>
                    <img alt="singer" src={photo} className="w-[50%]"></img>
                </div>
            </div>

            

        </div>
    )
}
