import React from "react";
import { Bookmark } from "lucide-react";

const Card = (props) => {
  return (
    <div className="card">
      <div>
        <div className="nav">
          <img
            src={props.logo}
            alt=""
          />
          <button>
            Save <Bookmark size={14} />{" "}
          </button>
        </div>

        <div className="card-content">
          <h3>
           {props.name}<span>{props.post}</span>
          </h3>
          <h2>Senior UI/UX Designer</h2>
          <div className="job-status">
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h3>{props.pay}</h3>
          <p>{props.loc}</p>
        </div>
        <div>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
