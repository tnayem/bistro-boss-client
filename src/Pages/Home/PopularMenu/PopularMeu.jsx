import { useEffect, useState } from 'react';
import SectionTItle from '../../../components/SectionTitle/SectionTItle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMeu = () => {
    const [menu,setMenu] = useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItem = data.filter(item=>item.category === "popular")
            setMenu(popularItem)
        })
    },[])
    return (
        <div className='mb-12 container mx-auto'>
            <SectionTItle
            heading={"FROM OUR MENU"}
            subHeading={"---Check it out---"}
            ></SectionTItle>
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    menu.map(item=><MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopularMeu;