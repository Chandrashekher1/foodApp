import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    // Fetch data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${MENU_API}${resId}`);  // Use proper API URL concatenation
                const json = await response.json();  // Parse JSON correctly
                setResInfo(json?.data);  // Update the state with the fetched data
            } catch (error) {
                console.error("Error fetching restaurant menu:", error);
            }
        };

        if (resId) {
            fetchData();  // Call fetchData only when resId is available
        }
    }, [resId]);  // Add resId as a dependency to trigger effect when it changes

    return resInfo;  // Return the fetched data
};

export default useRestaurantMenu;
