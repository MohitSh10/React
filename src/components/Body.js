import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";


const Body = () => {


    const [restaurantLists , setrestaurantLists] = useState(resList);



    return (
        <div className="body">
            <div className="filter">
                <button className ="filter-btn" onClick = {
                    () =>{
                        // filter logic
                      const filteredLists = restaurantLists.filter(
                        (res) => {
                             return res.info?.avgRating >4.4}
                        );
                        setrestaurantLists(filteredLists);
                    }
                }>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {
                restaurantLists.map(restaurant => <RestaurantCard key ={restaurant.info.id} resData = {restaurant} />)
                }
            </div>
        </div>
    )
}

export default Body;