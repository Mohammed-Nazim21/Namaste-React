import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  // Local State Variable - super powerful variable
  // Whenever a state variable updates, React re-renders the component.
  //   const [listOfRestaurants, setListOfRestaurants] = useState(resList); // This is Array Destructuring
  // Can also be written as
  const arr = useState(resList);
  //   const [listOfRestaurants, setListOfRestaurants] = arr;
  const listOfRestaurants = arr[0];
  const setListOfRestaurants = arr[1];

  // Normal JS variable
  // let listOfRestaurants = [];

  // Noraml JS variable
  let listOfRestaurantsJS = [
    {
      data: {
        data: {
          id: "182075",
          name: "Pind Punjab",
          cloudinaryImageId: "inuz5b1g03lxlrnck5kl",
          cuisines: [
            "North Indian",
            "Indian",
            "Punjabi",
            "Chinese",
            "Biryani",
            "Thalis",
            "Mughlai",
            "Beverages",
            "Desserts",
          ],
          costForTwo: 45000,
          deliveryTime: 27,
          avgRating: "4.1",
        },
      },
    },
    {
      data: {
        data: {
          id: "182000",
          name: "KGN",
          cloudinaryImageId: "inuz5b1g03lxlrnck5kl",
          cuisines: [
            "North Indian",
            "Indian",
            "Punjabi",
            "Chinese",
            "Biryani",
            "Thalis",
            "Mughlai",
            "Beverages",
            "Desserts",
          ],
          costForTwo: 45000,
          deliveryTime: 27,
          avgRating: "3.1",
        },
      },
    },
    {
      data: {
        data: {
          id: "182700",
          name: "Mathoshree FC",
          cloudinaryImageId: "inuz5b1g03lxlrnck5kl",
          cuisines: [
            "North Indian",
            "Indian",
            "Punjabi",
            "Chinese",
            "Biryani",
            "Thalis",
            "Mughlai",
            "Beverages",
            "Desserts",
          ],
          costForTwo: 45000,
          deliveryTime: 27,
          avgRating: "4.3",
        },
      },
    },
  ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //Filter logic here
            // listOfRestaurants = listOfRestaurants.filter(
            //   (res) => res.data.data.avgRating > 4
            // );
            // console.log(listOfRestaurants);
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.data.avgRating > 4
            );
            console.log(filteredList);
            setListOfRestaurants(filteredList);
            // Whenever a state variable updates, React re-renders the component.
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
