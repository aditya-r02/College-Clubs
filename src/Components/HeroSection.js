import HeroLeft from "./HeroLeft";
import Circle from "./Circle";
import './HeroSection.css';


function HeroSection(){
    

    return (
        <div className="w-full  flex justify-evenly items-center heroSection  py-10">
            <HeroLeft className=''></HeroLeft>
            <Circle></Circle>
        </div>
    );
}

export default HeroSection;