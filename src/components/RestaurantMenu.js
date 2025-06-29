import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";



const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);
   
    const info =resInfo?.cards[2]?.card?.card?.info;
    const menuInfo = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards;
    // console.log(menuInfo);
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => 
            c.card?.card?.["@type"] === 
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    return resInfo === null ? (
         <Shimmer />
        ) : (
            <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{info.name}</h1>
            <p className="font-bold text-lg">{info.cuisines.join(", ")} - {info.costForTwoMessage}</p>
            
            {/* Categories Accordions */}
            {categories.map((category) => (
                <RestaurantCategory 
                key={category?.card?.card?.title}
                data = {category?.card?.card}/>
            ))}
        </div>
    );

}

export default RestaurantMenu;