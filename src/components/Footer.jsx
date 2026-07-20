import { MdCopyright } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { CiGlobe } from "react-icons/ci";

export default function Footer(){
    return (
        <>
            <div>
                <div>
                    <h2>Stargazer</h2>
                    <p>An unofficial project for NASA's Astronomy Picture of the Day archive - exploring the cosmos one image at a time.</p>
                </div>
                <div>
                    <p>Resources</p>
                    <ul>
                        <li><a href="https://apod.nasa.gov/apod/archivepixFull.html" target="_blank">NASA APOD Archive</a></li>
                        <li><a href="https://github.com/nasa/apod-api" target="_blank"></a></li>
                        <li><a href="https://science.nasa.gov/mission/hubble/" target="_blank">Hubble Site</a></li>
                        <li><a href="https://eyes.nasa.gov/apps/solar-system/#/home" target="_blank">JPL Solar System</a></li>
                    </ul>
                </div>
                <div>
                    <p>Connect</p>
                    <ul>
                        <li><a href="https://github.com/createdbyamir" target="_blank"><FiGithub /></a></li>
                        <li><a href="https://createdbyamir.com/" target="_blank"><CiGlobe /></a></li>
                    </ul>
                    <p>Image credits belong to their respective photographers and institutions.<br />Data sourced from NASA APOD API.</p>
                </div>
            </div>
            <div>
                <p><MdCopyright /> {new Date().getFullYear()} STARGAZER - NOT AFFILIATED WITH NASA</p>
                <p>BUILT WITH NASA APOD API</p>
            </div>
        </>
    )
}