import React, { useState } from 'react'
import Temp from "./Temp"
import photo from "./literary.jpg"

export default function Literary() {

    const clubName="GOOGLE DEVELOPMENT STUDENT CLUB";
    const objective="Every year Google developers release exciting new updates to the world's most popular operating system. We always have sessions to keep you updated and mastering the latest trends in modern Android development"
    
    return (
        <div className='flex  flex-col  justify-center  items-center p-4'>
           
            <div className='flex flex-row w-full px-36'>
                <div className='flex flex-col justify-center w-[50%] space-y-3'>
                    <h1 className="text-3xl font-bold p-1 ">LITERARY CLUB</h1>
                    <p className='text-[#637282]'>
                    Have a knack for languages and literature? For those of you who feel that books are a natural extension of yourself, Literary Club is the place to be! We are a group of zealous students who never get tired of talking about poetry, literature, and language. 

                    </p>
                    <Temp  clubName={clubName} objective={objective} />
               
                    
                </div>
                <div className='w-[50%] flex justify-end '>
                    <img alt="Lite" src={photo} className="w-[75%]"></img>
                </div>
            </div>
            

        </div>
    )
}
