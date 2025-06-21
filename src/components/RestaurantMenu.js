import { useState ,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";



const RestaurantMenu = () => {
    const [resInfo , setResInfo] = useState(null);

    const {resId} = useParams();


    useEffect(()=> {
        fetchMenu();
    },[] );
    

    const fetchMenu = async () => {
        const data = await fetch(
            MENU_API+resId);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };
    const info =resInfo?.cards[2]?.card?.card?.info;
    const menuInfo = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card.itemCards;
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
                    menuInfo.map((item) => (
                       <li key ={item.card.info.id}>
                        { item.card.info.name} -{item.card.info.price/100}
                       </li>))

                }
            </ul>
        </div>
    );

}

export default RestaurantMenu;