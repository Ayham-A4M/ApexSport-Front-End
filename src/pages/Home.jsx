import HomeHero from '../Home/HomeHero'
import Services from '../Home/Services'
import { useFetchProductsByCatagory } from '../hooks/useFetchProductsByCatagory'
import ExploreCategory from '../Home/ExploreCategory'
import SliderProductsCards from '../Home/SliderProductsCards'

const Home = () => {
    const clothesProducts = useFetchProductsByCatagory('clothes');
    const equipmentProducts = useFetchProductsByCatagory('equipment');
    
    return (

        <>
            <HomeHero />
            <ExploreCategory />
            <Services />
            <SliderProductsCards sectionName={'Top Clothes'} products={clothesProducts} />
            <SliderProductsCards sectionName={'Top Equipment'} products={equipmentProducts} />
        </>

    )
}
export default Home