import Image from "next/image";
import Link from "next/link";
import "@/css-animations.css";

type HomeContentProps = {
    currentPage: number;
}

export default function HomeContent({ currentPage }: HomeContentProps) {
    return(
        // <p>Home test test</p>
        <div className=" md:h-full md:grid grid-cols-[25%_75%] gap-4 flex flex-col justify-center">
            <div className="md:min-h-full flex-cols md:grid md:grid-rows-[50%_50%] gap-4">
                <div className="hidden md:flex relative object-scale-down justify-center mx-2">
                    <Image className="border-4 border-red-300 object-cover rounded-4xl max-w-xs"
                            src="/images/headshot.png"
                            // height={144}
                            // width={144}
                            fill={true}
                            // sizes="(max-width: 768px) 1vw, (max-width: 1200px) 50vw, 33vw"
                            alt="Headshot of Leo Jahn"/>  
                </div>
                <div className="md:flex hidden justify-center items-center underline text-xl">
                    <ul className="list-disc">
                        <li><Link className="text-red-300 underline" target="_blank" href="https://github.com/ltj05508">GitHub 1</Link></li>
                        <li><Link className="text-red-300 underline" target="_blank" href="https://github.com/ljahn-git">GitHub 2</Link></li>
                        <li><Link className="text-red-300 underline" target="_blank" href="https://www.linkedin.com/in/leo-jahn/">LinkedIn</Link></li>
                        <li><Link className="text-red-300 underline" target="_blank" href="https://app.joinhandshake.com/profiles/bzarhj">Handshake</Link></li>
                    </ul>
                </div>
            </div>
            
            {/* Rendered when width is sm (makes format a singular column) */}
            <div className="flex flex-col text-xl">
                <div className="h-auto md:hidden grid sm:grid-cols-2 sm:mb-4 justify-center">
                    <div className="relative justify-center flex h-full w-full object-scale-down sm:p-0 p-30">
                    <Image className="flex border-4 border-red-300 object-cover rounded-4xl max-w-xs "
                            src="/images/headshot.png"
                            // height={144}
                            // width={144}
                            fill={true}
                            // sizes="(max-width: 768px) 1vw, (max-width: 1200px) 50vw, 33vw"
                            alt="Headshot of Leo Jahn"/>  
                    </div>
                    <div className="md:hidden flex my-4 justify-center items-center underline text-xl sm:mb-8">
                        <ul className="list-disc">
                            <li><Link className="text-red-300 underline" target="_blank" href="https://github.com/ltj05508">GitHub 1</Link></li>
                            <li><Link className="text-red-300 underline" target="_blank" href="https://github.com/ljahn-git">GitHub 2</Link></li>
                            <li><Link className="text-red-300 underline" target="_blank" href="https://www.linkedin.com/in/leo-jahn/">LinkedIn</Link></li>
                            <li><Link className="text-red-300 underline" target="_blank" href="https://app.joinhandshake.com/profiles/bzarhj">Handshake</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="flex">
                    <p className="flex flex-nowrap whitespace-nowrap items-center text-center mr-4">My name is </p> <span className="flex"><h1 className={`${'typewriter'} m-0 w-auto italic text-3xl xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl`}>Leo Jahn</h1></span> {/* After page load replace with normal text? */}
                </div>
                <p className="mb-4">and I'm a 22 year old programmer/developer based out of Athens, Georgia.</p> <br/>
                <p className="mb-4">Currently, I'm a student at the University of Georgia studying Computer Science and Music.
                    In my free time, I enjoy practicing my violin, playing videogames, and making projects like this website!
                </p>
                <br/>

                <p>I'd define my skills as follows:</p>
                <p>Proficient:</p>
                <ul className="list-disc">
                    <li className="ml-8">HTML, CSS, Javascript/React, Java</li>
                </ul>
                <p>Intermediate:</p>
                <ul className="list-disc">
                    <li className="ml-8">C/C++/C#, Python, SQL</li>
                </ul>
                
                <br/>
                <p className="mt-4">I'm always open to opportunities, so feel free to reach out to me via <a className="text-red-300 underline"href="mailto:ljahn724@gmail.com">email</a>!</p>
            </div>
            

        </div>
    )
}