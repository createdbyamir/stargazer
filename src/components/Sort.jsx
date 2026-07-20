

export default function ApodSort({ sortOrder, setSortOrder }) {
    return (
        <div className="flex flex-col sm:flex-row gap-1 items-center bg-[#111e32] border border-gray-700 rounded-md px-3 py-2  text-gray-700  shadow-sm ">
            <p>Sort</p>
            <select
                value={sortOrder}
                name="Sort"
                onChange={(event) => setSortOrder(event.target.value)}
                className=" cursor-pointer"
            >
                <option value="newest">Newest first</option>
                <option value="oldest">Oldest first</option>
            </select>
        </div>

    )
}