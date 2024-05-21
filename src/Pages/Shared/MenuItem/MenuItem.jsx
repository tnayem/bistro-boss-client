const MenuItem = ({ item }) => {
    const { category, image, name, price, recipe, _id } = item;
    return (
        <div>
            <div className="flex">
                <img style={{borderRadius:"0 200px 200px 200px"}} className="w-[120px]" src={image} alt="" />
                <div>
                    <h3 className="uppercase">{name}----------</h3>
                    <p>{recipe}</p>
                </div>
                <p className="text-yellow-500">{price}</p>
            </div>
        </div>
    );
};

export default MenuItem;