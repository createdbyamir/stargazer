

export default function ApodSort({ sortOrder, setSortOrder }) {
    return (
        <select
            value={sortOrder}
            name="Sort"
            onChange={(event) => setSortOrder(event.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 cursor-pointer"
        >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
        </select>
    )
}