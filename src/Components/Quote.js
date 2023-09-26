import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

function Quote(){
    return (
        <div className="flex flex-col w-fit mx-auto text-lg text-stone-500 py-4">
            <ImQuotesLeft></ImQuotesLeft>
            <span className="italic">Alone we can do so little;</span>
            <span className="italic">together we can do so much</span>
            <ImQuotesRight className="self-end"/>
            <span className="self-end relative left-16">- Helen Keller</span>
        </div>
    );
}

export default Quote;