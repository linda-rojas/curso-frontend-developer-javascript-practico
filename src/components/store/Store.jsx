import { CardsProducts } from '../products/CardsProducts';
import { useCategoryFilter } from '../../hooks/useCategoryFilter';
import Navbar from '../navbar/Navbar';


export default function Store() {

    const { setCategory, filteredProducts } = useCategoryFilter();

    return (
        <>
            <Navbar setCategory={setCategory}/>
            <CardsProducts products={filteredProducts}/>
        </>
    )
}