import Image from "next/image";
import Link from "next/link";
import ProjectImageModal from "../components/ProjectImageModal";

type ProjectModalTypes = {
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

export default function ProjectModal({image1, image1H, image1W, image2, image2W, image2H, image3, image3W, image3H, title, description, description2, description3}: ProjectModalTypes) {
    return(
        <div>
            <dialog id={title} className="max-w-3/4 justify-center items-center m-auto border-4 rounded-2xl">
                <div className="flex flex-col m-4">
                    <div className="flex justify-between mb-4">
                        <p className="text-3xl items-center font-bold">{title}</p>
                        <button className="h-auto px-2 border-2 border-black items-center cursor-pointer hover:text-red-300 hover:border-red-300" commandFor={title} command="close">X</button>
                    </div>
                    <div className="md:grid grid-cols-3 gap-3 mb-4">
                        <button command="show-modal" commandFor={image1} className="cursor-pointer overflow-hidden border-4 rounded-4xl border-black hover:border-red-300 md:mb-0 mb-4">
                            <Image className="h-full w-full "
                                src={image1}
                                height={image1H}
                                width={image1W}
                                alt="Project Image"/>
                        </button>
                        <button command="show-modal" commandFor={image2} className="cursor-pointer overflow-hidden border-4 rounded-4xl border-black hover:border-red-300 md:mb-0 mb-4">
                            <Image className="h-full w-full border-2 border-black"
                                src={image2}
                                height={image2H}
                                width={image2W}
                                alt="Project Image"/> 
                        </button>
                        <button command="show-modal" commandFor={image3} className="cursor-pointer overflow-hidden border-4 rounded-4xl border-black hover:border-red-300 md:mb-0 mb-4">
                            <Image className="h-full w-full border-2 border-black"
                                src={image3}
                                height={image3H}
                                width={image3W}
                                alt="Project Image"/> 
                        </button>
                    </div>

                    {/* Descriptive text below images */}
                    <div className="flex-col whitespace-pre-wrap text-xl">
                        <p>{description}</p>
                        {description2 ? <p className="mt-4">{description2}</p> : <></>}
                        {description3 ? <p className="mt-4">GitHub: <Link target="_blank" className="text-red-300 underline"href={description3}>{description3}</Link></p> : <></>}
                    </div>
                
                </div>
            </dialog>

            {/* Image Modal Window Code */}
            <ProjectImageModal image={image1} imageH={image1H} imageW={image1W}/>
            <ProjectImageModal image={image2} imageH={image2H} imageW={image2W}/>
            <ProjectImageModal image={image3} imageH={image3H} imageW={image3W}/>
        </div>
    )
}
