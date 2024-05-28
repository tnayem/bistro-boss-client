import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg"
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"
import useMenu from "../../hooks/useMenu";
import SectionTItle from "../../components/SectionTitle/SectionTItle";
import MenuCatagory from "../MenuCatagory/MenuCatagory";

const Menu = () => {
    const [menu] = useMenu()
    const desserts = menu.filter(item=>item.category === "dessert")
    const soup = menu.filter(item=>item.category === "soup")
    const salad = menu.filter(item=>item.category === "salad")
    const pizza = menu.filter(item=>item.category === "pizza")
    const offered = menu.filter(item=>item.category === "offered")
    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            {/* Main Cover */}
            <Cover img ={menuImg} title="Our Menu"></Cover>
            <SectionTItle heading="TODAY'S OFFER" subHeading="---Don't miss---"></SectionTItle>
            {/* Offered Menu Items */}
            <MenuCatagory items={offered}></MenuCatagory>
            {/* Desserts menu items */}
            <MenuCatagory
            title="dessert"
            items={desserts}
            coverImg={dessertImg}
            ></MenuCatagory>
            {/* Pizza menu items */}
            <MenuCatagory
            title="pizza"
            items={pizza}
            coverImg={pizzaImg}
            ></MenuCatagory>
            {/* Salad Sections */}
            <MenuCatagory
            title="salad"
            items={salad}
            coverImg={saladImg}
            ></MenuCatagory>
            {/* Soups Sections */}
            <MenuCatagory
            title="soup"
            items={soup}
            coverImg={soupImg}
            ></MenuCatagory>
        </div>
    );
};

export default Menu;