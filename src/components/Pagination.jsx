
export default function Pagination({ page, totalPages, onPageChange }) {
    let previous;
    if (page === 1)
    {
        previous = (
            <button className="hover:cursor-not-allowed" disabled>Previous</button>
        ) 
    } 
    else 
    {
        previous = (
            <button className="hover:cursor-pointer" onClick={() => onPageChange(page - 1)}>Previous</button>
        )
    }
        
    let next;
    if (page === totalPages)
    {
        next = (
            <button className="hover:cursor-not-allowed" disabled>Next</button>
        )
    } 
    else 
    {
        next = (
                <button className="hover:cursor-pointer" onClick={() => onPageChange(page + 1)}>Next</button>
        )
    }
    
    return (
        <div >
            {previous}
            
            {
                (Array(totalPages).fill(0).map((_, index) => {
               return <button key={index} className="hover:cursor-pointer" onClick={() => onPageChange(index + 1)}>{index + 1}</button>
            }))}

            {next}
        </div>
    )
}