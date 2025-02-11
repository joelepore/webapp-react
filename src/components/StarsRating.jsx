import React from 'react'
import { FaStar, FaRegStar } from "react-icons/fa";


const StarsRating = ({ vote }) => {
  const roundedVote = Math.round(vote);

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= roundedVote) {
        stars.push(<FaStar key={i} />);
      } else {
        stars.push(<FaRegStar key={i} />);
      }
    }

    return stars;
  }

  return (
    <div className='flex text-yellow-500'>{renderStars()}</div>
  )
}

export default StarsRating