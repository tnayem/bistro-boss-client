
const FoodCard = ({ item }) => {
    const { image, name, price, recipe } = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-slate-900 text-white absolute right-0 px-4 mr-5 mt-5">${price}</p>
            <div className="card-body">
                <h2 className="card-title justify-center">{name}</h2>
                <p className="text-center">{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;