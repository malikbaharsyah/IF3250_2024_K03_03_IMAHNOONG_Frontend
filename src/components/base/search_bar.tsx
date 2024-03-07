import SearchIcon from '@mui/icons-material/Search';


function SearchBar() {
    return (
        <form className="flex items-center">   
            <div className="flex items-center justify-between w-[734px] rounded-full bg-white opacity-[38%]">
                    <input
                        type="text"
                        placeholder="Cari..."
                        className="placeholder:text-[2vw] outline-none text-[2vw] px-[2vw] rounded-l-full h-[5vw] w-[85%]"
                    />
                    <button className="rounded-r-full text-[50px] flex items-center justify-center w-[15%] h-[5vw]">
                        <SearchIcon fontSize='inherit' color='inherit'/>
                    </button>
                </div>
        </form>
    );
}

export default SearchBar;