/* eslint-disable react/prop-types */
const Card = ({ movie }) => {
    return (
        <div className="bg-gray-800 rounded shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
            <img
                src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450"}
                alt={`${movie.Title} Poster`}
                className="w-full h-64 object-cover"
            />
            <div className="p-4">
                <p className="font-bold text-lg">{movie.Title}</p>
                <p className="text-gray-400">Year: {movie.Year}</p>
                <p className="text-gray-400">Type: {movie.Type}</p>
            </div>
        </div>
    );
};

export default Card;