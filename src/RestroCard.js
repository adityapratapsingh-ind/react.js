import { CON_URL } from "../utils/constants";

const RestroCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, costForTwo } = resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0 " }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CON_URL + resData.info.cloudinaryImageId}
      />
      <h2>{name}</h2>
      <h4>{cuisines.join(" ,")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} minutes</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestroCard;
