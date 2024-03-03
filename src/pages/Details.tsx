import Navbar from "../components/base/Navbar";

const Details = () => {
    return (
        <div className="h-screen bg-stars bg-no-repeat bg-cover bg-local overflow-auto">
            <div>
                <Navbar/>
            </div>
            <div className="px-12">
                <div className="flex justify-between items-center"> 
                    <div className="">
                        <h1 className="font-inter text-white text-left text-5xl font-bold">
                            Imah Noong
                        </h1>
                        <p className="font-inter text-white text-left">
                            Unassuming observatory with a collection of telescopes in simple surroundings.
                        </p>
                    </div>
                    <div className="max-w-[50vw]">
                        <img className="" src="Imah Noong_ss.png"/>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
}

export default Details;