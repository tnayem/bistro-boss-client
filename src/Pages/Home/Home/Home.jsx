import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMeu from "../PopularMenu/PopularMeu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
            <title>Bistro Restaurent || Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMeu></PopularMeu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;