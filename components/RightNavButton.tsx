type RightNavButtonProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    currentPage: number;
};

export default function RightNavButton({ currentPage, onClick }: RightNavButtonProps) {
    return (
        <div> {/*absolute top-0 bottom-0 right-0 w-12 flex flex-col p-1 items-center justify-center cursor-pointer hover:bg-red-300 font-bold hover:italic hover:border-l-2 border-black*/}
            {currentPage == 0 ? <button onClick={onClick} className="hidden sm:block absolute top-0 bottom-0 right-0  w-12 flex flex-col p-1 items-center justify-center cursor-pointer hover:bg-red-300 font-bold hover:italic hover:border-l-2 border-black">
                <p>&gt;</p> <p>E</p> <p>X</p> <p>P</p> <p>E</p> <p>R</p> <p>I</p> <p>E</p> <p>N</p> <p>C</p> <p>E</p> <p>S</p> <p>&gt;</p>
            </button> : 
                currentPage == 1 ? <button onClick={onClick} className="hidden sm:block absolute top-0 bottom-0 right-0 w-12 flex flex-col p-1 items-center justify-center cursor-pointer hover:bg-red-300 font-bold hover:italic hover:border-l-2 border-black">
                    <p>&gt;</p> <p>H</p> <p>O</p> <p>M</p> <p>E</p> <p>&gt;</p>
                </button> : <></>}

            {/* Rendered when page width is below sm */}
            {currentPage == 0 ? <button onClick={onClick} className="block sm:hidden absolute bottom-0 left-3/4 w-1/4 h-12 flex flex-col p-1 items-center justify-center cursor-pointer hover:bg-red-300 font-bold hover:italic hover:border-t-2 hover:border-l-2 border-black">
                <p>&gt;EXP&gt;</p>
                </button> : 
                currentPage == 1 ? <button onClick={onClick} className="block sm:hidden absolute bottom-0 left-0 right-0 w-full h-12 flex flex-col p-1 items-center justify-center cursor-pointer hover:bg-red-300 font-bold hover:italic hover:border-t-2 border-black">
                   <p>&gt;HOME&gt;</p>
                </button> : <></>}
        </div>
    )
}