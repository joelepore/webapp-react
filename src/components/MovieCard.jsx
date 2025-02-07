const MovieCard = ({ data }) => {
  const { title, release_year, image } = data;
  return (
    <div className="relative aspect-[2/3] flex flex-col justify-end items-center">
      <img
        src={image}
        alt={title}
        className="aspect-[2/3] absolute -z-20 w-full"
      />
      {/* Overlay */}
      <div className="absolute -z-10 bg-gradient-to-t from-black to-transparent w-full h-full opacity-50"></div>
      <h4 className="text-white p-4">{`${title} (${release_year})`}</h4>
    </div>
  )
}

export default MovieCard