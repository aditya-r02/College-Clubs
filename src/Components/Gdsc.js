import React, { useState } from 'react'
import Temp from "./Temp"

import photo from "./gdsc.jpg"



export default function Gdsc() {
    const clubName="GOOGLE DEVELOPMENT STUDENT CLUB";
    const objective="Every year Google developers release exciting new updates to the world's most popular operating system. We always have sessions to keep you updated and mastering the latest trends in modern Android development"
    
   
    return (
        <>
        <div className='flex  flex-col  justify-center  items-center p-4 relative'>
           
            <div className='flex flex-row w-full px-36'>
                <div className='flex flex-col justify-center w-[50%] space-y-3'>
                    <h1 className="text-3xl font-bold p-1 ">GOOGLE DEVELOPER STUDENT CLUB</h1>
                    <p className='text-[#637282]'>
                    GDSC Club strives to spread applied computer science culture among the students of our institute. We work on projects to solve everyday problems students face. We combine the likes of coding, web development, android app development, and much more to come up with new and innovative, out-of-the-box solutions. 
                       </p>
                    <Temp  clubName={clubName} objective={objective} />
                </div>
                <div className='w-[50%] flex justify-end '>
                    <img alt="gdsc" src={photo} className=" h-[475px]"></img>
                </div>
            </div>
            

        </div>
       
        
        </>
    )
}
