import HomeContent from "../components/HomeContent";
import ProjectsContent from "../components/ProjectsContent";
import EducationContent from "../components/EducationContent";
import ExperiencesContent from "../components/ExperiencesContent";
import ShadowMainWindow from "@/components/ShadowMainWindow";
import "@/css-animations.css";

type MainWindowProps = {
    currentPage: number;
}
export default function MainWindow({ currentPage }: MainWindowProps) {
    return(
        <div className="relative flex h-screen justify-center items-center bg-red-400">
            <div className={`overflow-y-scroll z-10 animate-move-up sm:w-4/5 w-full h-4/5 sm:m-8 m-2 sm:px-8 px-2 py-9 bg-white border border-8 rounded-4xl 2xl:border-red-500 xl:border-black lg:border-green-500 md:border-yellow-300 sm:border-red-500`}> {/*${currentPage == 0 ? "border-red-300" : ""} */}
            
            {currentPage == 0 ? <HomeContent currentPage={currentPage}/> : 
                currentPage == 1 ? <ProjectsContent /> : 
                    currentPage == 2 ? <EducationContent /> : 
                        currentPage == 3 ? <ExperiencesContent/> : <></>}

            </div>

            <ShadowMainWindow />
            
            
            
        </div>
    )
}