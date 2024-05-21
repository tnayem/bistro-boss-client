import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMeu from "../PopularMenu/PopularMeu";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMeu></PopularMeu>
            <Featured></Featured>
        </div>
    );
};

export default Home;