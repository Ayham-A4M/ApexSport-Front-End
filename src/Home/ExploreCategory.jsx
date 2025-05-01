
import dumbbell from '../assets/exploreCategoryImages/dumbbell-gym.svg'
import soccerShoes from '../assets/exploreCategoryImages/soccer-shoes.svg'
import sportBag from '../assets/exploreCategoryImages/sport-bag.svg'
import teamShirt from '../assets/exploreCategoryImages/team-shirt.svg'
import waterBottle from '../assets/exploreCategoryImages/water-bottle.svg'
import smartWatch from '../assets/exploreCategoryImages/smart-watch.svg'
import runningShoes from '../assets/exploreCategoryImages/running-shoes.svg'
import recovery from '../assets/exploreCategoryImages/recovery.svg'
const Category = [
    { title: 'gym equipments', image: dumbbell },
    { title: 'soccer shoes', image: soccerShoes },
    { title: 'sport bags', image: sportBag },
    { title: 'team shirts', image: teamShirt },
    { title: 'hydration packs', image: waterBottle },
    { title: 'recovery', image: recovery },
    { title: 'fitness watches', image: smartWatch },
    { title: 'running shoes', image: runningShoes },
]
const ExploreCategory = () => {
    return (
        <div>
            <div className='text-center  py-[20px] text-[18px] font-semibold'>
                <span>Explore different categories for all your shopping needs</span>
            </div>
            <div className='grid gap-y-[15px] grid-cols-4 max-[768px]:grid-cols-2'>


                {
                    Category.map((element, i) => (
                        <div className='hover:scale-[1.03] duration-300 w-full flex items-center justify-center' key={i} >
                            <div data-aos="zoom-in" data-aos-dely={`${i * 200}`} data-aos-duration="800" className='flex flex-col items-center justify-center  gap-[5px]'>
                                <div className='w-[110px] aspect-square bg-gray-300 rounded-full p-[10px] '>
                                    <img src={element.image} alt="" className='object-cover w-full' />
                                </div>
                                <span className='font-semibold text-center  py-[5px] max-w-[85%] max-[768px]:max-w-full'>
                                    {element.title}
                                </span>
                            </div>
                        </div>
                    ))
                }


            </div>

        </div>
    )
}

export default ExploreCategory