import Orders from "../../components/my-orders/Orders";
import Navbar from "../../components/Navbar/Navbar";
import { useCategoryFilter } from "../../hooks/useCategoryFilter";

export default function OrdersPage() {

        const { category:selectedCategory, setCategory } = useCategoryFilter();

    return (
        <>
        <Navbar 
            setCategory={setCategory} 
            selectedCategory={selectedCategory}
            mobileTitle="My orders"
        />
        <Orders />
        </>
    )
}