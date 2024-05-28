import MenuItem from "../Shared/MenuItem/MenuItem";

const MenuCatagory = ({items}) => {
    return (
        <div>
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    items.map(item=><MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCatagory;