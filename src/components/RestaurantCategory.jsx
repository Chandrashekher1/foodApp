import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {

    const [showItems,setShowItems] = useState(false)

    if (!data) {
        return null; 
    }   

    const handleClick = () => {
       if(showItems === true){
        return setShowItems(false)
       }else{
        return setShowItems(true)
       }
    }
    
    return (
        <div className="">
            <div className="w-6/12 mx-auto my-6 py-4 bg-gray-50 shadow-xl p-4 cursor-pointer rounded-xl">
                <div className="flex justify-between" onClick={handleClick}>
                    <span className="font-bold text-base mx-2" onClick={handleClick}>{data.title}({data.title.length})</span>
                    <span onClick={handleClick}>{!showItems? "⏬" : "⏫"}</span>
                </div>
                {showItems && <ItemList items={data.itemCards}/>}
                
            </div>
        </div>
        
    );
}

export default RestaurantCategory;
