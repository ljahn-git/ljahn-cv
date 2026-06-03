import Image from "next/image";

type ProjectModalTypes = {
    image: string,
    imageH: number,
    imageW: number
}

export default function ProjectImageModal({image, imageH, imageW }: ProjectModalTypes) {
    return(
        <dialog id={image} className="sm:max-w-4/5 max-w-full min-w-2/3 justify-center items-center m-auto border-4 rounded-2xl border-black">
            <div className="flex flex-col m-2">
                <div className="flex justify-end">
                    <button className="h-auto px-2 py-1 border-2 items-center cursor-pointer hover:text-red-300 hover:border-red-300" commandFor={image} command="close">X</button>
                </div>
                <Image className="h-full w-full mt-2 border-4 border-black"
                    src={image}
                    height={imageH}
                    width={imageW}
                    alt="Project Image"/> 
            </div>
        </dialog>
    )
}