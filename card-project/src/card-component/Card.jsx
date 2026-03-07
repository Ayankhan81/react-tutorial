import React from "react";
import { Bookmark } from "lucide-react";

const Card = (props) => {
  return (
    <div className="card">
      <div>
        <div className="nav">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5OkW9RkLNurdw_VTuB4jP8c1wU5wZaVOsLA&s"
            alt=""
          />
          <button>
            Save <Bookmark size={14} />{" "}
          </button>
        </div>

        <div className="card-content">
          <h3>
            Amazon <span>5 Days ago</span>
          </h3>
          <h2>Senior UI/UX Designer</h2>
          <div className="job-status">
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h3>$120/hr</h3>
          <p>Mumbai, India</p>
        </div>
        <div>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
