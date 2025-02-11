import ReviewCard from "./ReviewCard"

const ReviewsList = ({ reviews }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Reviews</h2>
      {reviews.map(review => (
        <ReviewCard key={review.id} data={review} />
      ))}
    </div>
  )
}

export default ReviewsList