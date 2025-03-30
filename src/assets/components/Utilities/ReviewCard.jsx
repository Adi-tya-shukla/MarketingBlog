const ReviewCard = ({ rating, text, name }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={`text-yellow-500 text-xl ${i < rating ? "" : "opacity-50"}`}
            >
              ★
            </span>
          ))}
          <span className="ml-2 text-gray-800 font-semibold">{rating}</span>
        </div>
        <p className="text-gray-700">{text}</p>
        <p className="mt-4 text-gray-900 font-semibold">{name}</p>
      </div>
    );
  };
  
  export default ReviewCard;