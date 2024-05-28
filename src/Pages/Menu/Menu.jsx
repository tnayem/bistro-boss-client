import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg"
import useMenu from "../../hooks/useMenu";
import SectionTItle from "../../components/SectionTitle/SectionTItle";
import MenuCatagory from "../MenuCatagory/MenuCatagory";

const Menu = () => {
    const [menu] = useMenu()
    const dessert = menu.filter(item=>item.category === "dessert")
    const soup = menu.filter(item=>item.category === "soup")
    const salad = menu.filter(item=>item.category === "salad")
    const pizza = menu.filter(item=>item.category === "pizza")
    const offered = menu.filter(item=>item.category === "offered")
    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            <Cover img ={menuImg} title="Our Menu"></Cover>
            <SectionTItle heading="TODAY'S OFFER" subHeading="---Don't miss---"></SectionTItle>
            <MenuCatagory items={offered}></MenuCatagory>
        </div>
    );
};

export default Menu;