import Typed from 'react-typed';
import './HeroLeft.css';
import "animate.css/animate.min.css";


function HeroLeft() {


    return (
        <div className='HeroLeft animate__bounceInUp'>
            <div className=' font-bold heading'>UIET Kuk Clubs</div>
            <div className=' font-semibold para'>
                <span >Join </span>
                <span>
                    <Typed className="text-red-500"
                        strings={['Literary Club', 'Dance Club', 'Sports Club', 'GDSC', 'Singing Club']
                        }
                        typeSpeed={50}
                        backSpeed={60}
                        loop
                    />
                </span>
            </div>
            <p className='text-lg'>a place to hone and share your knowledge..</p>
        </div>
    );
}

export default HeroLeft;