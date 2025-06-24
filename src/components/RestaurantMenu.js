import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";



const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);
   
    const info =resInfo?.cards[2]?.card?.card?.info;
    const menuInfo = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards;
    console.log(menuInfo);
    

    return resInfo === null ? (
         <Shimmer />
        ) : (
            <div className="menu">
            <h1>{info.name}</h1>
            <p>{info.cuisines.join(", ")} - {info.costForTwoMessage}</p>
            <h2> Menu</h2>
            <ul>
                {
                    menuInfo?.map((item) => (
                       <li key ={item.card.info.id}>
                        { item.card.info.name} -{item.card.info.price/100}
                       </li>))

                }
            </ul>
        </div>
    );

}

export default RestaurantMenu;