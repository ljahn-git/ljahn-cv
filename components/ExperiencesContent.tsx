import Link from "next/link";

export default function ExperiencesContent() {
    return(
        // <p>Experiences test test</p>
        <div className="flex flex-col text-xl">
            <Link target="_blank" href="https://www.lavnercampsandprograms.com/" className="flex flex-col p-4 mb-4 border border-red-300 border-4 rounded-2xl shadow-lg hover:bg-red-300 hover:cursor-pointer">
                <h1><p className="font-bold inline">STEM Instructor</p> - Lavner Education - (<p className="italic inline">June 2026 - July 2026</p>)</h1>
                <ul className="list-disc list-inside ml-4">
                    <li className="-indent-8 pl-8">Currently teaching and introducing kids to different STEM fields, with a current emphasis on 3D Modeling and Printing</li>
                </ul>
            </Link>

            <Link target="_blank" href="https://jaspercountyga.org/elections/" className="flex flex-col p-4 mb-4 border border-red-300 border-4 rounded-2xl shadow-lg hover:bg-red-300 hover:cursor-pointer">
                <h1><p className="font-bold inline">Poll Officer</p> - Jasper County Elections - (<p className="italic inline">May 2026</p>)</h1>
                <ul className="list-disc list-inside ml-4">
                    <li className="-indent-8 pl-8">Served as a poll officer for the Jasper County Martin & Burney voting precinct </li>
                    <li className="-indent-8 pl-8">Checked in, assisted, and monitored hundreds of voters</li>
                </ul>
            </Link>

            <Link target="_blank" href="https://virtualperceptionlab.weebly.com/" className="flex flex-col p-4 mb-4 border border-red-300 border-4 rounded-2xl shadow-lg hover:bg-red-300 hover:cursor-pointer">
            <h1><p className="font-bold inline">Student Research Assistant</p> - UGA Department of Psychology - (<p className="italic inline">January 2025 - May 2025</p>)</h1>
                <ul className="list-disc list-inside ml-4">
                    <li className="-indent-8 pl-8">Helped create a VR program for students to learn about and analyze 3D models of the human brain</li>
                    <li className="-indent-8 pl-8">Created scripts in Bash and Python to automate turning brain mri results into accurate 3D models</li>
                </ul>
            </Link>

            <Link target="_blank" href="https://www.georgiasymphony.org/" className="flex flex-col p-4 mb-4 border border-red-300 border-4 rounded-2xl shadow-lg hover:bg-red-300 hover:cursor-pointer">
            <h1><p className="font-bold inline">Site Coordinator</p> - Georgia Symphony Orchestra - (<p className="italic inline">August 2023 - May 2024</p>)</h1>
                <ul className="list-disc list-inside ml-4">
                    <li className="-indent-8 pl-8">Assisted the Operations Manager with overseeing orchestra members during rehearsal</li>
                    <li className="-indent-8 pl-8">Performed administrative duties as well as physically preparing the space</li>
                </ul>
            </Link>
        </div>
    )
}