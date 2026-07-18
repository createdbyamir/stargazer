import { IoClose } from "react-icons/io5";
export default function NasaModal( { item, onClose } ) {
    console.log(item);
    return (
        <>
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 relative">
                    <button 
                        onClick={onClose}
                        className="flex w-fit items-center gap-2 mb-6 rounded-md px-3 py-2  shadow-md transition hover:bg-gray-100 hover:cursor-pointer"
                    >
                        <span>Close</span>
                        <IoClose className="text-lg shrink-0" />
                    </button>
                    <h1 className="text-2xl font-semibold mb-4">
                        {item.title}
                    </h1>

                    <img
                        src={item.url}
                        alt={item.title}
                        className="w-full object-contain rounded-lg mb-4"
                    />

                    <p className="text-sm text-gray-500 mb-2">
                        {item.date}
                    </p>

                    <p className="text-gray-700 mb-4">
                        {item.explanation}
                    </p>

                    <p className="text-sm text-gray-500">
                        {item.copyright || "NASA"}
                    </p>
                </div>
            </div>
        </>
    )
}