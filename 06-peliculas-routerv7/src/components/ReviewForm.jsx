import { useState } from 'react';

const ReviewForm = ({ onSubmit }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      onSubmit({ comment });
      setComment('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Comentario
        </label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
          rows="3"
          required
        />
      </div>
      
      <button
        type="submit"
        className="bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700"
      >
        Añadir Reseña
      </button>
    </form>
  );
};

export default ReviewForm;