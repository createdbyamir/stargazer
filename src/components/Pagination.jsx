export default function Pagination({ page, totalPages, onPageChange }) {
    let previous;

    if (page === 1) {
        previous = (
            <button
                className="cursor-not-allowed rounded border px-3 py-2 text-gray-400"
                disabled
            >
                Previous
            </button>
        );
    } else {
        previous = (
            <button
                className="cursor-pointer rounded border px-3 py-2 transition hover:bg-gray-100"
                onClick={() => onPageChange(page - 1)}
            >
                Previous
            </button>
        );
    }

    let next;

    if (page === totalPages) {
        next = (
            <button
                className="cursor-not-allowed rounded border px-3 py-2 text-gray-400"
                disabled
            >
                Next
            </button>
        );
    } else {
        next = (
            <button
                className="cursor-pointer rounded border px-3 py-2 transition hover:bg-gray-100"
                onClick={() => onPageChange(page + 1)}
            >
                Next
            </button>
        );
    }

    return (
        <div className="flex flex-wrap items-center justify-center gap-2 py-6">
            {previous}

            {Array(totalPages)
                .fill(0)
                .map((_, index) => (
                    <button
                        key={index + 1}
                        className={`rounded border px-3 py-2 transition ${
                            page === index + 1
                                ? "bg-blue-600 text-white"
                                : "cursor-pointer hover:bg-gray-100"
                        }`}
                        onClick={() => onPageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}

            {next}
        </div>
    );
}