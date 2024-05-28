import SectionTItle from '../../../components/SectionTitle/SectionTItle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMeu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item=>item.category === "popular")
    // const [menu,setMenu] = useState([])
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const popularItem = data.filter(item=>item.category === "popular")
    //         setMenu(popularItem)
    //     })
    // },[])
    return (
        <div className='mb-12 container mx-auto'>
            <SectionTItle
            heading={"FROM OUR MENU"}
            subHeading={"---Check it out---"}
            ></SectionTItle>
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    popular.map(item=><MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopularMeu;