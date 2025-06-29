import RestaurantCard from "./RestaurantCard";

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {


    const [restaurantLists , setrestaurantLists] = useState([]);

    const [searchText , setSearchText] = useState([]);

    const [filteredRestaurant , setFilteredRestaurant] = useState([]);

    console.log("Body Rendered " , restaurantLists);

    useEffect(()=> {
        fetchData();
    } ,[]) ;

    const fetchData = async () => {
        const data = await fetch(
            RESTAURANT_API);

        const json = await data.json();

        // console.log(json);
        // optional chaining
        setrestaurantLists(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false)
        return(
    <h1>Looks like you're offline!!! Please check your internet connection</h1>)

    // conditional rendering
    if(restaurantLists.length === 0){
        return  <Shimmer />;
    }

    return (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4 ">
                    <input 
                    type ="text" 
                    className="border border-solid border-black" 
                    value={searchText} onChange={
                        (e)=>{
                            setSearchText(e.target.value);
                        }
                    }/>
                    <button
                    className ="px-4 py-1 bg-green-100 m-4 rounded-xl" 
                    onClick={() =>
                        {
                            

                            const filteredRestaurant = restaurantLists.filter(
                                (res) =>{ return res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
                            });

                            setFilteredRestaurant(filteredRestaurant);
                          
                        }
                    } >search</button>
                </div>
                <div className="search m-4 p-4 flex items-center" >

                    <button 
                    className ="px-4 py-1 bg-gray-100 rounded-xl" 
                    onClick = {

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
            </div>
            <div className="res-container flex flex-wrap">
                {
                filteredRestaurant.map((restaurant)=>(
                    <Link 
                        key ={restaurant.info.id}
                        to ={"/restaurants/" + restaurant.info.id}
                    >
                        <RestaurantCard  resData = {restaurant} />
                    </Link>))
                }
            </div>
        </div>
    )
}

export default Body;