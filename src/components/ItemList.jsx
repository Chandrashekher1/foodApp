import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ items }) => {  // Destructure items from props
    const dispatch = useDispatch()
    // console.log(items);
    

    const handleAddItem = (item) => {
        // Dispatch an item
        dispatch(addItems(item))
    }
    return (
        <div>
            {items && items.length > 0 ? (
                items.map((item) => (
                    <div className="flex justify-between p-2 m-2 border-b-4 border-gray-300 text-left" key={item?.card?.info?.id}> 
                        <div>
                            <div className="p-2">
                                <span className="font-bold text-gray-700 cursor-text">{item?.card?.info?.name || "No Name Available"}</span>
                                <h3 className="font-semibold cursor-text"> ₹ {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100 || "Price not available"}</h3>  
                            </div>
                            <p className="text-xs px-2 cursor-text">{item?.card?.info?.description || "No Description Available"}</p>
                        </div>
                        <div className="w-3/12 p-2">
                            <div className="relative text-center">
                                {/* If there's more content or actions needed, you can add it here */}
                                <button className="px-8 font-bold py-3 rounded-xl text-green-500 bg-gray-100 shadow-lg cursor-pointer active:scale-90 " onClick={() => handleAddItem(item)}>ADD+</button>
                                <img className="w-36 h-28 rounded-xl" src={CDN_URL + item?.card?.info?.imageId} alt=""/>
                            </div>
                            
                        </div>
                        
                    </div>
                ))
            ) : (
                <p>No items available</p> 
            )}
        </div>
    );
};

export default ItemList;