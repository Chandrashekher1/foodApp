import { useEffect, useState } from "react";
import RestaurantCard from './RestaurantCard';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Footer from "./Footer"
// import LoginForm from "./LoginForm";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4794221&lng=77.1068059&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
        );
        const json = await data.json();
        console.log(json);
        
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus()

    if(onlineStatus === false){
        return (
            <div>
                {/* <h1>Looks like you're offline !! Please check your internet connection</h1> */}

                <h1>Ooops! You have lost your internet connection</h1>
            </div>
        )
    }

    
    return listOfRestaurant.length === 0 ? (<Shimmer/>) : (
        <div className="body overflow-x-hidden">
            <div className="search-btn">
                <input className="input"
                    type="text"
                    placeholder="Search for restaurant and food..."
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />
                <button onClick={() => {
                    const filteredRestaurants = listOfRestaurant.filter((res) => 
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setFilteredRestaurant(filteredRestaurants); // Update the filtered list
                }} className="font-semibold">Search</button>
            </div>

            <div className="filter m-10">
                <button className="Tbtn" onClick={() => {
                    const topRatedList = listOfRestaurant.filter((res) => res.info.avgRating > 4.3);
                    setFilteredRestaurant(topRatedList); // Update the filtered list
                }}>
                    Top Rated Restaurant
                </button>
            </div>

            <div className="res-container mx-40">
                {
                    filteredRestaurant.map(restaurant => 
                       <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><RestaurantCard resData={restaurant} /> </Link> 
                    )
                }
            </div>
            <Footer />        
        </div>

    );
};

export default Body;
