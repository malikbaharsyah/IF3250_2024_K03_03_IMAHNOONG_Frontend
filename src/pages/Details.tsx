import PrimaryButton from "../components/PrimaryButton";
import Navbar from "../components/base/Navbar";

const Details = () => {
    return (
        <div className="h-screen bg-stars bg-no-repeat bg-cover bg-local overflow-auto">
            <div>
                <Navbar/>
            </div>
            <div className="px-12 flex flex-col gap-12">
                <div className="flex justify-between items-center"> 
                    <div className="">
                        <h1 className="font-inter text-white text-left text-5xl font-bold">
                            Imah Noong
                        </h1>
                        <p className="font-inter text-white text-left mb-4">
                            Unassuming observatory with a collection of telescopes in simple surroundings.
                        </p>
                        <PrimaryButton text="Beli tiket"/>
                    </div>
                    <div className="max-w-[50vw]">
                        <img className="rounded-lg" src="image.png"/>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="font-inter text-white text-left text-5xl font-bold">
                            About Imah Noong
                        </h1>
                        <p className="font-inter text-white text-left mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat . . .
                        </p>
                    </div>
                    <div className="max-w-[50vw]">
                        <img className="rounded-lg" src="Imah Noong_ss.png"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;