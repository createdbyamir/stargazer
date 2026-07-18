import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function ApodDate({ startDate, setStartDate, endDate, setEndDate }) {
    return (
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">
                    Start Date
                </label>
                <DatePicker 
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">
                    End Date
                </label>
                <DatePicker 
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    className="border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </div>
    )
}