import { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from './ToastContext';

const ReviewsContext = createContext();

export const useReviews = () => {
  const context = useContext(ReviewsContext);
  if (!context) {
    throw new Error('useReviews must be used within a ReviewsProvider');
  }
  return context;
};

export const ReviewsProvider = ({ children }) => {
  const [reviews, setReviews] = useState(() => {
    const savedReviews = localStorage.getItem('movieReviews');
    return savedReviews ? JSON.parse(savedReviews) : {};
  });

  const { showToast } = useToast();

  useEffect(() => {
    localStorage.setItem('movieReviews', JSON.stringify(reviews));
  }, [reviews]);

  const addReview = (movieId, review) => {
    const newReview = {
      id: Date.now(),
      ...review,
      date: new Date().toISOString(),
    };

    setReviews(prevReviews => ({
      ...prevReviews,
      [movieId]: [...(prevReviews[movieId] || []), newReview]
    }));

    showToast('Reseña añadida correctamente', 'success');
  };

  const removeReview = (movieId, reviewId) => {
    setReviews(prevReviews => ({
      ...prevReviews,
      [movieId]: prevReviews[movieId]?.filter(review => review.id !== reviewId) || []
    }));

    showToast('Reseña eliminada correctamente', 'success');
  };

  const getMovieReviews = (movieId) => {
    return reviews[movieId] || [];
  };

  const value = {
    addReview,
    removeReview,
    getMovieReviews
  };

  return (
    <ReviewsContext.Provider value={value}>
      {children}
    </ReviewsContext.Provider>
  );
};