import { NextPage } from "next";
import Image from "next/future/image";
import Head from "next/head";
import Navbar from "../components/Navbar";
import crest from "../public/images/crest5.png";

const HomePage: NextPage = () => {
    return (
        <>
            <div className="background">
                <Head>
                    <title>Baumer Hall Home Page</title>
                </Head>
                <div className="ml-[10%] flex h-1/3 w-2/3 animate-fadeIn flex-col justify-center">
                    <h4 className=" text-black sm:text-4xl md:text-7xl lg:text-9xl">
                        Baumer
                    </h4>
                    <h4 className="text-black sm:text-4xl md:text-7xl lg:text-9xl">
                        Hall
                    </h4>
                    <p className="ml-2 text-2xl italic"> Per Ardua ad Spes </p>
                </div>
                <div className="flex h-[50%] w-2/3 animate-fadeIn items-center justify-center">
                    <Image
                        className="transition duration-500 ease-in-out hover:rotate-45 hover:transform"
                        src={crest}
                        alt="Baumer Hall Crest"
                        style={{ maxWidth: "50%", height: "auto" }}
                    />
                </div>
            </div>
        </>
    );
};

export default HomePage;
