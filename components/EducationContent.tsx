export default function EducationContent() {
    return(
        // <p>Education test test</p>
        <div className=" lg:h-full h-auto flex flex-col  text-xl gap-4">
            
            <div className="h-full md:grid grid-cols-[20%_80%] items-center justify-center p-4 border border-4 rounded-4xl border-red-300 shadow-lg">
                <div className="h-auto p-8 w-full flex flex-col break-words text-2xl text-center justify-center items-center font-bold">
                    <p>University of Georgia</p>
                    <p className="italic">2024 - Present</p>
                </div>
                <ul className="flex-col md:list-disc md:ml-32 md:text-left text-center break-words">
                    <li className="-indent-4 pl-4">Bachelor of Science in Computer Science, Bachelor of Arts in Music</li>
                    <li className="-indent-4 pl-4">Presidential Scholar: Spring 2026</li>
                    <li className="-indent-4 pl-4">Dean's List: Fall 2024, Fall 2025</li>
                </ul>
            </div>
            <div className="h-full w-full md:grid grid-cols-[20%_80%] break-normal items-center p-4 border border-4 rounded-4xl border-red-300 shadow-lg">
                <div className="h-auto p-8 w-full flex flex-col break-normal text-2xl text-center justify-center items-center font-bold">
                    <p>Kennesaw State University</p>
                    <p className="italic">2022 - 2024</p>
                </div>
                <ul className="md:list-disc md:ml-32 md:text-left text-center">
                    <li className="-indent-4 pl-4">Bachelor of Science in Computer Science, Bachelor of Arts in Music Performance</li>
                    <li className="-indent-4 pl-4">Presidential Scholar: Fall 2022, Spring 2023</li>
                    <li className="-indent-4 pl-4">Dean's List: Fall 2023, Spring 2024</li>
                </ul>
            </div>

        </div>
    )
}