// import { useEffect, useState } from "react";
// import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import ItemShimmer from "./ItemShimmer";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    const {
        name = "Unknown Restaurant",
        cuisines = [],
        avgRating,
        totalRatingsString,
        city,
        sla,
        costForTwoMessage = "Cost information not available",
    } = resInfo?.cards?.[2]?.card?.card?.info || {};

    // const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];
    const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    console.log(resInfo?.cards?.[2]?.card?.card?.info);
    

    if (resInfo === null) {
        return <ItemShimmer />;
    }

    return (
        <div className=" my-10">
            <h1 className="text-center font-bold text-2xl text-emerald-600">{name}</h1>
            <div className="shadow-xl w-3/4  mx-36 my-1 rounded-3xl border ">
                {/* <h1 className="font-bold text-2xl">{name}</h1> */}
                <p className="text-lg my-5 mx-5 px-4 ">
                    <h2 className="font-semibold">💠 {avgRating} ({totalRatingsString}) - {costForTwoMessage}</h2>
                    <h2 className="font-semibold text-gray-500">{cuisines.join(", ")}</h2>
                    <h2>{city}</h2>
                    <h2 className="font-semibold text-base">{sla.minDeliveryTime}-{sla.maxDeliveryTime} Mins</h2>
                </p>
                

            </div>

            {/* Render the categories using the RestaurantCategory component */}
            {categories.map((category) => (
                <RestaurantCategory 
                    key={category?.card?.card?.title} 
                    data={category?.card?.card} 
                />
            ))}
        </div>
    );
};

export default RestaurantMenu;
