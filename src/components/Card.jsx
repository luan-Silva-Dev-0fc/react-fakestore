const Card = ({ title, image, rate, category, price}) => {
    return (
        <div className="bg-white rounded-lg p-4 flex flex-col justify-between h-full shadow-sm hover:shadow-md transition-shadow" title={title}>
            <div className="relative">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 sm:h-55 object-contain"
                />
                <div className="px-2 py-1 bg-orange-500 text-white font-bold absolute top-2 right-2 rounded text-sm shadow">
                    {rate}
                </div>
            </div>
            <div className="pt-4 flex flex-col flex-1 justify-between">
                <div>
                    <h2 className="font-semibold text-base sm:text-lg line-clamp-1">{title}</h2>
                    <h6 className="font-medium text-gray-500 text-sm">{category}</h6>
                </div>
                <h6 className="text-right text-xl sm:text-2xl font-bold text-gray-800 mt-2">R$ {price.toFixed(2)}</h6>
            </div>
        </div>
    );
};

export default Card;