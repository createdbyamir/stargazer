import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function ApodDate({ startDate, setStartDate, endDate, setEndDate }) {
    return (
        <>
            <div className="startdate">
                <label>Start Date</label>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />;
            </div>
            <div className="enddate">
                <label>End Date</label>
                <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />;
            </div>

        </>
    )
}