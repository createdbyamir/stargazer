

export default function ApodSort({ sortOrder, setSortOrder }) {
    return (
        <>
            <select 
                name="Sort" 
                onChange={(event) => setSortOrder(event.target.value)}
            >
                <option value="newest">Newest to oldest</option>
                <option value="oldest">Oldest to newest</option>
            </select>

        </>
    )
}