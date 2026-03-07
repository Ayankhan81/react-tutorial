import React from 'react'
import Card from './card-component/Card'

const App = () => {
const jobOpenings = [
  {
    brandlogo: "https://logo.clearbit.com/google.com",
    name: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/amazon.com",
    name: "Amazon",
    datePosted: "3 days ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/meta.com",
    name: "Meta",
    datePosted: "10 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/apple.com",
    name: "Apple",
    datePosted: "7 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Pune, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/netflix.com",
    name: "Netflix",
    datePosted: "2 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/microsoft.com",
    name: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Noida, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/tesla.com",
    name: "Tesla",
    datePosted: "8 days ago",
    post: "Data Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Delhi, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/adobe.com",
    name: "Adobe",
    datePosted: "6 days ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Bangalore, India"
  }
];


  return (
    <div className='parent'>
      {jobOpenings.map(function(elem){
        return <Card/>
      })}
    </div>
  )
}

export default App
