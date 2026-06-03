type TopNavButtonProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    currentPage: number;
};

export default function TopNavButton({ currentPage, onClick }: TopNavButtonProps) {
    return (
        <div>
        {currentPage == 2 ? <button onClick={onClick} className="hidden sm:flex absolute top-0 left-0 right-0 w-full h-12 p-1 items-center justify-center cursor-pointer hover:bg-red-300 font-bold hover:italic hover:border-b-2 border-black">
            <p>&uarr;</p> <p className="mx-1">H</p> <p className="mx-1">O</p> <p className="mx-1">M</p> <p className="mx-1">E</p> <p className="mx-1">&uarr;</p>
        </button> : <></>}

        {/* Rendered when page width is below sm */}
        {currentPage == 2 ? <button onClick={onClick} className="block sm:hidden absolute top-0 left-0 right-0 w-full h-12 flex p-1 items-center justify-center cursor-pointer hover:bg-red-300 font-bold hover:italic hover:border-b-2 border-black">
            <p>&uarr;HOME&uarr;</p>
        </button> : <></>}
        </div>
    )
}