
import Card3 from './Card3';
import cards3data from './allData/Cards3data';


function Cards3(){
    let data = cards3data;

    return (
        <div className='flex gap-4 justify-center  bg-cyan-500 py-8'>
            {
                data.map((card)=>{
                    return <Card3 data={card} > </Card3>
                })
            }
        </div>
    );
}

export default Cards3
