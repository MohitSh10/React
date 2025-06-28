import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const{resData} = props;
    const {cuisines , cloudinaryImageId, name , avgRating ,sla , costForTwo} = resData?.info;
    return (
        <div className ="res-card  m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-300 rounded-lg">
            <img className="rounded-lg" alt = "res-img" src={CDN_URL + resData.info.cloudinaryImageId}/>
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla?.deliveryTime} min</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard;