import StarsRating from "./StarsRating"

const ReviewCard = ({ data }) => {
  return (
    <div className="bg-neutral-900 p-4 rounded-lg">
      <div className="flex justify-between">
        <h3 className="text-lg font-bold pb-2">{data.name}</h3>
        <p><StarsRating vote={data.vote} /></p>
      </div>
      <p>{data.text}</p>
    </div>
  )
}

export default ReviewCard