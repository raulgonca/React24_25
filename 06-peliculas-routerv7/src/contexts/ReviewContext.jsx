import { useState } from "react";
import { createContext } from "react";


export const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  const removeReview = (id) => {
    setReviews(reviews.filter((review) => review.id !== id));
  };

  const getReviews = () => reviews;

  

  return (
    <ReviewContext.Provider value={{ reviews, addReview, removeReview }}>
      {children}
    </ReviewContext.Provider>
  );
};
