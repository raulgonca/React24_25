
import { useReviews } from '../contexts/ReviewsContext';
import ReviewForm from '../components/ReviewForm';
import ReviewItem from '../components/ReviewItem';

const Reviews = ({ movieId }) => {
  const { addReview, removeReview, getMovieReviews } = useReviews();
  const movieReviews = getMovieReviews(movieId);

  const handleSubmit = (review) => {
    addReview(movieId, review);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-sky-900">Reseñas</h2>
      
      <ReviewForm onSubmit={handleSubmit} />

      <div className="space-y-4">
        {movieReviews.map(review => (
          <ReviewItem 
            key={review.id} 
            review={review} 
            onDelete={(reviewId) => removeReview(movieId, reviewId)}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;