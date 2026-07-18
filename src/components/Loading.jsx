import { Atom } from 'react-loading-indicators';

export default function LoadingAtom() {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <Atom 
                    color="#3d1148" 
                    size="large" 
                />
                <p className="mt-2 text-[#3d1148] text-xl">
                    Launching Stargazer...
                </p>
            </div>
        </>
    )
}