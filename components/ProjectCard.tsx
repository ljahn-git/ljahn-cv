import Image from "next/image";
import ProjectModal from "../components/ProjectModal";

type ProjectCardTypes = {
    image1: string;
    image1W: number;
    image1H: number;
    image2: string;
    image2W: number;
    image2H: number;
    image3: string;
    image3W: number;
    image3H: number;
    title: string;
    description: string;
    description2: string;
    description3: string;
}

export default function ProjectCard({image1, image1H, image1W, image2, image2W, image2H, image3, image3W, image3H, title, description, description2, description3}: ProjectCardTypes) {
    return(
        <div>
        <button command="show-modal" commandfor={title} className="flex flex-col overflow-hidden h-full w-full border border-4 rounded-4xl border-black hover:border-red-300 bg-black cursor-pointer bg-white shadow-xl hover:bg-red-300 ">
            <div className="flex flex-col h-full w-full overflow-hidden justify-center border-b-4 ">
                {/* <p>Projects Card 1</p>
                <p>2-3 images that are cut off by the border. Card scales a bit when hovered over.</p> */}
                <Image className="object-cover h-full w-full"
                            src={image1}
                            height={image1H}
                            width={image1W}
                            alt="Project Image"/> 
                {/* <Image className="object-cover h-ful w-full"
                            src="/images/Proj-JCW-FAQ.png"
                            height={2714}
                            width={1530}
                            alt="Headshot of Leo Jahn"/>   */}
            </div>
            <div className="flex xl:h-1/5 h-1/3 w-full">
                <p className="py-2 px-4 font-bold text-left md:text-base text-2xl">{title}</p>
            </div>
        </button>

        {/* Modal Window Code */}
        <ProjectModal image1={image1} image1H={image1H} image1W={image1W} image2={image2} image2H={image2H} image2W={image2W} image3={image3} image3H={image3H} image3W={image3W} title={title} description={description} description2={description2} description3={description3}/>
        
        </div>
    )
}