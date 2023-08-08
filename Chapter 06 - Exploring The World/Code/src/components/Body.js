import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // Local State Variable - super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]); // This is Array Destructuring
  const [filteredRestaurant, setFilteredRestuarant] = useState([]);

  // Local state variable to track the value of input box
  const [searchText, setSearchText] = useState("");

  // Whenever state variables update, react trigger a reconciliation cycle (re-renders the component)
  console.log("Body Rendered");

  useEffect(() => {
    // console.log("useEffect Called"); //put debugger
    fetchData();
  }, []);

  const fetchData = async () => {
    //newer approach to handle fetch()
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // console.log(json);
    setListOfRestaurants(
      // Optional Chaining
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    // console.log(listOfRestaurants);
    setFilteredRestuarant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // console.log("Body Rendered");

  // Conditional Rendering
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    //put debugger
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              // Filter restaurant cards and update the UI
              // SearchText
              console.log(searchText);
              // const filteredRestaurant = listOfRestaurants.filter((res) => {
              //   res.info.name.includes(searchText);
              // });
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              ); // -> find out why this code works and the above does not

              setFilteredRestuarant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
            // Whenever a state variable updates, React re-renders the component.
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
