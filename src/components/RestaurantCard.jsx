import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    // console.log(props);
    
    const {resData} = props;
    
    const {
        cloudinaryImageId,
        name,
        costForTwo,
        cuisines,
        avgRating,
        sla,
    } = resData?.info
    
    return (
        <div className="res-card bg-gray-50 ">

            
            <img src={CDN_URL + cloudinaryImageId}  alt="logo_url"/>
            <h3 className="text-lg font-bold m-2">{name}</h3>
            <h4 className="m-2 text-sm font-semibold">{costForTwo}</h4>
            <h4 className="m-1 text-sm font-semibold">💠 {avgRating}- {sla.deliveryTime} minutes </h4>
            {/* <h4 className="m-2"></h4> */}
            <h4 className="m-2 text-sm font-normal">{cuisines.join(", ")}</h4>
        </div>
    )
}

export default RestaurantCard