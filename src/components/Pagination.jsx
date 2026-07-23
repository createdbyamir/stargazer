
export default function Pagination({ page, totalPages, onPageChange }) {
    return (
        <div>
            <button onClick={() => onPageChange(page - 1)}>Previous</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button onClick={() => onPageChange(page + 1)}>Next</button>
        </div>
    )
}