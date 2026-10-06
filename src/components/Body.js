import RestroCard from "../RestroCard";
import resList from "../../utils/MonkData";
import { useState } from "react";
const Body = () => {
  const [listOfRes, setListOfRes] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRes.filter(
              (res) => res.info.avgRating > 4,
            );
            setListOfRes(filteredList);
          }}
        >
          Rating 4+
        </button>
      </div>
      <div className="res-container">
        {listOfRes.map((resList) => (
          <RestroCard key={resList.info.id} resData={resList} />
        ))}
      </div>
    </div>
  );
};

export default Body;
