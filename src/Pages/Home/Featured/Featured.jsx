import SectionTItle from "../../../components/SectionTitle/SectionTItle";
import feturedImg from "../../../assets/home/featured.jpg"
import './Featured.css'

const Featured = () => {
    return (
        <div className="container mx-auto text-white">
            <div className="featured-item bg-fixed">
                <SectionTItle
                    subHeading="---Check it out---"
                    heading="FROM OUR MENU"
                ></SectionTItle>
                <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 py-20 px-36">
                    <div>
                        <img src={feturedImg} alt="" />
                    </div>
                    <div className="md:ml-10">
                        <p>March 20, 2023</p>
                        <p className="uppercase">WHERE CAN I GET SOME?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn btn-outline border-0 border-b-4 mt-4 text-white">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;