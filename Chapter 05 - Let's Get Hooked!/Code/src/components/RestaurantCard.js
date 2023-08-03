import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    avgRating,
    deliveryTime,
  } = resData?.data?.data;

  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-image"
        src={CDN_URL + cloudinaryImageId}
        alt="res-image"
      />
      {/* <h3>{props.resName}</h3> */}
      <h3>{name}</h3>
      {/* <h4>{props.cuisisne}</h4> */}
      <h4>{cuisines.join(", ")}</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{deliveryTime} Minutes</h4>
    </div>
  );
};

export default RestaurantCard;
