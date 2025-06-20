import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const{resData} = props;
    const {cuisines , cloudinaryImageId, name , avgRating ,sla , costForTwo} = resData?.info;
    return (
        <div className ="res-card">
            <img className="res-img" alt = "res-img" src={CDN_URL + resData.info.cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla?.deliveryTime} min</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard;