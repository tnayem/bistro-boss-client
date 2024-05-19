import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTItle from '../../../components/SectionTitle/SectionTItle';
const Category = () => {
    return (
        <div className='container mx-auto '>
            {/* <p className='text-sm text-center py-2 text-[#D99904] italic'>---From 11:00am to 10:00pm---</p>
            <h4 className='text-center text-3xl font-bold pb-2'>ORDER ONLINE</h4> */}
            <SectionTItle
                subHeading={"---From 11:00am to 10:00pm---"}
                heading={"ORDER ONLINE"}

            ></SectionTItle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className='text-center text-4xl -mt-20 text-white uppercase'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className='text-center text-4xl -mt-20 text-white uppercase'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='text-center text-4xl -mt-20 text-white uppercase'>Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className='text-center text-4xl -mt-20 text-white uppercase'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className='text-center text-4xl text-white uppercase'>Salad</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;