import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function ApodDate({ startDate, setStartDate, endDate, setEndDate }) {
    return (
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex flex-col sm:flex-row gap-1 border rounded-lg px-3 py-2 shadow-sm bg-[#111e32]">
                <label className="text-sm font-medium text-gray-700">
                    From
                </label>
                <DatePicker 
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="flex flex-col sm:flex-row gap-1 border rounded-lg px-3 py-2 shadow-sm bg-[#111e32]">
                <label className="text-sm font-medium text-gray-700">
                    To
                </label>
                <DatePicker 
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    className=" focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </div>
    )
}