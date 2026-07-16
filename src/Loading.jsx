import { Atom } from 'react-loading-indicators';

export default function LoadingAtom() {
    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <Atom 
                    color="#2f5d2f" 
                    size="medium" 
                    text="Loading Stargazer" 

                />
            </div>
        </>
    )
}