import RestaurantCard from "./RestaurantCard";

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const Body = () => {


    const [restaurantLists , setrestaurantLists] = useState([]);

    const [searchText , setSearchText] = useState([]);

    const [filteredRestaurant , setFilteredRestaurant] = useState([]);

    useEffect(()=> {
        fetchData();
    } ,[]) ;

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8855171&lng=75.77675599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#");

        const json = await data.json();

        console.log(json);
        // optional chaining
        setrestaurantLists(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    // conditional rendering
    if(restaurantLists.length === 0){
        return  <Shimmer />;
    }

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type ="text" className="search-box" 
                    value={searchText} onChange={
                        (e)=>{
                            setSearchText(e.target.value);
                        }
                    }/>
                    <button onClick={() =>
                        {
                            

                            const filteredRestaurant = restaurantLists.filter(
                                (res) =>{ return res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
                            });

                            setFilteredRestaurant(filteredRestaurant);
                          
                        }
                    } >search</button>
                </div>
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
                filteredRestaurant.map(restaurant => <RestaurantCard key ={restaurant.info.id} resData = {restaurant} />)
                }
            </div>
        </div>
    )
}

export default Body;