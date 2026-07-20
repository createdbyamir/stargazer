import { MdCopyright } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { CiGlobe } from "react-icons/ci";

export default function Footer(){
    return (
        <div className="bg-[#0b1527] py-6">
            <div className="inner max-w-[1440px] w-full m-auto text-[#5a6d87] ">
                <div className="flex justify-between">
                    <div className="basis-1/3 pr-40 pt-2">
                        <h2 className="text-white uppercase tracking-widest pb-2">Stargazer</h2>
                        <p className="text-sm italic">An unofficial project for NASA's Astronomy Picture of the Day archive - exploring the cosmos one image at a time.</p>
                    </div>
                    <div className="basis-1/3 px-4">
                        <p className="uppercase tracking-widest text-sm pb-2">Resources</p>
                        <ul className="text-sm">
                            <li><a className='hover:text-white' href="https://apod.nasa.gov/apod/archivepixFull.html" target="_blank">NASA APOD Archive</a></li>
                            <li><a className='hover:text-white' href="https://github.com/nasa/apod-api" target="_blank">APOD API Documentation</a></li>
                            <li><a className='hover:text-white' href="https://science.nasa.gov/mission/hubble/" target="_blank">Hubble Site</a></li>
                            <li><a className='hover:text-white' href="https://eyes.nasa.gov/apps/solar-system/#/home" target="_blank">JPL Solar System</a></li>
                        </ul>
                    </div>
                    <div className="basis-1/3 pl-4">
                        <p className="uppercase tracking-widest text-sm pb-3">Connect</p>
                        <ul className="flex gap-2 pb-3">
                            <li className="border rounded-sm p-2 hover:text-white"><a className="block" href="https://github.com/createdbyamir" target="_blank"><FiGithub /></a></li>
                            <li className="border rounded-sm p-2 hover:text-white"><a className='hover:text-white' href="https://createdbyamir.com/" target="_blank"><CiGlobe /></a></li>
                        </ul>
                        <p className="max-w-[250px] tracking-wide text-xs">Image credits belong to their respective photographers and institutions.<br />Data sourced from NASA APOD API.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3 border-t pt-6 mt-6 text-xs sm:flex-row sm:justify-between">
                    <p className="flex items-center gap-2"><MdCopyright /> {new Date().getFullYear()} STARGAZER - NOT AFFILIATED WITH NASA</p>
                    <p>BUILT WITH NASA APOD API</p>
                </div>
            </div>
        </div>
    )
}