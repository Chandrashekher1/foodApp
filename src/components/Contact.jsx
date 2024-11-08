import { useDispatch, useSelector } from "react-redux";
// import ItemList from "./ItemList";
import { CDN_URL } from "../utils/constants";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems[0]?.card?.info);

  // remove selector

  const dispatch = useDispatch()

  const handleRemoveItem = () => {
    dispatch(removeItem())
  }

  const handleClearItem = () => {
    dispatch(clearCart())
  }
  return (

    
    <div className="h-full w-3/5 p-4 text-center">
        <button className="font-bold bg-black text-red-50 rounded-lg  px-5 active:scale-90" onClick={handleClearItem}>Clear Cart</button>
        <div className="h-screen p-4 flex flex-col">
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div className="flex m-4 p-4">
            <div key={item?.card?.info?.id} className="p-2 border-b">
            <h2 className="font-bold text-green-600">{item?.card?.info?.name || "No Name"}</h2>
            <p className="font-semibold">₹ {item?.card?.info?.defaultPrice/100 || "No Price"}</p>
            <p className="text-gray-500">{item?.card?.info?.description || "No Description"}</p>

            </div>
            <div>
                <button className="font-bold bg-gray-200 my-5 rounded-lg  px-5 active:scale-90" onClick={handleRemoveItem}>Remove</button>
                <img src={CDN_URL + item?.card?.info?.imageId} alt="" className="w-24 h-24 rounded-lg" />
            </div>
          </div>
          
        ))
      ) : (
        <h2 className="font-semibold ">Your cart is empty</h2>

      )}
    </div>
    </div>
  );
};

export default Cart;
