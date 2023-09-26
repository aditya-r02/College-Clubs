import './Circle.css'
import gdsc from './images/gdsc.png';
import book from './images/book.png';
import basket from './images/basket.png'
import camera from './images/camera.png'
import music from './images/music.png'
import dance from './images/dance.png'

function Circle(){
    return (
        <div className='rounded-full border border-gray-800 flex justify-center items-center relative  circle1'>
            <div className=' -left-8 circles1 ' >
                <img src={basket} className="w-full h-full  object-cover rounded-full p-2
                 " alt='sports' />
            </div>
            <div className='-right-8 circles1'>
            <img src={camera} className="w-full h-full  object-contain rounded-full 
                 " alt='camera' />
            </div>

            <div className='-top-8 circles1'>
            <img src={music} className="w-full h-full  object-cover p-2 rounded-full 
                 " alt='music' />
            </div>

            <div className=' -bottom-8 circles1'>
            <img src={dance} className="w-full h-full  object-cover  rounded-full 
                 " alt='dance' />
            </div>

            {/* inner circle */}
            <div className='bg-blue-500 flex justify-center items-center rounded-full inner-circle'>


            <div className='rounded-full   bg-white relative  flex justify-center items-center circle2'>

                <div className='  -right-8 overflow-hidden
                circles2'>
                <img src={gdsc} className="w-full h-full aspect-auto object-contain  p-1
                 " alt='gdsc logo' />
                </div>


                <div className=' -left-8 overflow-hidden
                circles2'>
                    <img src={book} className="w-full h-full aspect-auto object-fit p-2 
                 " alt='gdsc logo' />
                </div>
                
            </div>
            </div>
        </div>
    );
}

export default Circle;