import React from "react";
import Card from "./card-component/Card";

const App = () => {
  const jobOpenings = [
    {
      brandlogo: "https://cdn.vectorstock.com/i/1000v/47/20/google-logo-vector-50014720.jpg",
      name: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Mumbai, India",
    },
    {
      brandlogo: "https://www.kindpng.com/picc/m/106-1065269_small-amazon-logo-vector-hd-png-download.png",
      name: "Amazon",
      datePosted: "3 days ago",
      post: "Software Development Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$50/hr",
      location: "Bangalore, India",
    },
    {
      brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNbpIfA-_GwTVZBVlpCvdIcLVOsCxn4BmqHA&s",
      name: "Meta",
      datePosted: "10 days ago",
      post: "React Developer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$70/hr",
      location: "Hyderabad, India",
    },
    {
      brandlogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      name: "Apple",
      datePosted: "7 days ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$80/hr",
      location: "Pune, India",
    },
    {
      brandlogo: "https://static.vecteezy.com/system/resources/previews/020/336/373/non_2x/netflix-logo-netflix-icon-free-free-vector.jpg",
      name: "Netflix",
      datePosted: "2 days ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$90/hr",
      location: "Mumbai, India",
    },
    {
      brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDiQXGMUd-boRykgZmJXW-MG1JD2x8GHwIyw&s",
      name: "Microsoft",
      datePosted: "4 days ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$55/hr",
      location: "Noida, India",
    },
    {
      brandlogo: "https://static.vecteezy.com/system/resources/previews/020/336/735/non_2x/tesla-logo-tesla-icon-transparent-png-free-vector.jpg",
      name: "Tesla",
      datePosted: "8 days ago",
      post: "Data Engineer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$75/hr",
      location: "Delhi, India",
    },
    {
      brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9UoxZj0CuFNbu7MpLsxbSrOmDiNq2sH2n7Q&s",
      name: "Adobe",
      datePosted: "6 days ago",
      post: "UI/UX Designer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$40/hr",
      location: "Bangalore, India",
    },
  ];

  return (
    <div className="parent">
      {jobOpenings.map(function (elem) {
        return <Card 
        logo={elem.brandlogo}
        name={elem.name} post={elem.datePosted} 
        tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} loc={elem.location}/>;
      })}
    </div>
  );
};

export default App;
