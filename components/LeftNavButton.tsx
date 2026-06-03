type LeftNavButtonProps = {
    currentPage: number
    onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function LeftNavButton({ currentPage, onClick }: LeftNavButtonProps) {
    return (
        <div>
            {currentPage == 0 ? <button onClick={onClick} className="hidden sm:block absolute inset-0 w-12 flex flex-col p-1 items-center justify-center cursor-pointer font-bold hover:italic hover:bg-red-300 hover:border-r-2 border-black">
                <p>&lt;</p> <p>P</p> <p>R</p> <p>O</p> <p>J</p> <p>E</p> <p>C</p> <p>T</p> <p>S</p> <p>&lt;</p>
            </button> : 
                currentPage == 3 ? <button onClick={onClick} className="hidden sm:block absolute inset-0 w-12 flex flex-col p-1 items-center justify-center cursor-pointer hover:bg-red-300 font-bold hover:italic hover:border-r-2 border-black">
                <p>&lt;</p> <p>H</p> <p>O</p> <p>M</p> <p>E</p> <p>&lt;</p>
            </button> : <></>}
            
            {/* Rendered when page width is below sm */}
            {currentPage == 0 ? <button onClick={onClick} className="block sm:hidden absolute bottom-0 left-0 w-1/4 h-12 flex p-1 items-center justify-center cursor-pointer hover:bg-red-300 font-bold hover:italic hover:border-t-2 hover:border-r-2 border-black">
                <p>&lt;PROJ&lt;</p>
            </button> : 
                currentPage == 3 ? <button onClick={onClick} className="block sm:hidden absolute bottom-0 left-0 right-0 w-full h-12 flex p-1 items-center justify-center cursor-pointer hover:bg-red-300 font-bold hover:italic hover:border-t-2 border-black">
                <p>&lt;HOME&lt;</p>
            </button> : <></>}
        </div>
    )
}