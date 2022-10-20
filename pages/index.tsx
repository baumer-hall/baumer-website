import { NextPage } from "next";
import Image from "next/future/image";
import Head from "next/head";
import Navbar from "../components/Navbar";
import crest from "../public/images/crest5.png";
import cutlass from "../public/images/cutlass2.png";

const HomePage: NextPage = () => {
    return (
        <>
            <div className="background">
                <Head>
                    <title>Baumer Hall Home Page</title>
                </Head>
                <div className="z-10 flex h-1/3 w-3/5 flex-col justify-center">
                    <h4 className="animate-fadeUp text-black opacity-0 sm:text-4xl md:text-7xl lg:text-9xl ">
                        Baumer
                    </h4>
                    <h4 className="animate-fadeUpDelay1 text-black opacity-0 sm:text-4xl md:text-7xl lg:text-9xl">
                        Hall
                    </h4>
                    <p className="ml-2 animate-fadeUpDelay2 text-2xl italic opacity-0">
                        {" "}
                        Per Ardua ad Spes{" "}
                    </p>
                    <p className="w-[80%] animate-fadeUpDelay2 opacity-0">
                        <br /> Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="relative z-10 flex h-[50%] w-2/5 animate-fadeUpDelay2 items-center justify-center opacity-0">
                    <Image
                        className="z-10 drop-shadow-[2px_2px_8px_black] transition duration-500 ease-in-out hover:rotate-45 hover:transform "
                        src={crest}
                        alt="Baumer Hall Crest"
                        style={{ maxWidth: "60%", height: "auto" }}
                    />
                    <Image
                        className="absolute z-0 animate-fadeDown opacity-0 drop-shadow-[1px_1px_5px_black] "
                        src={cutlass}
                        alt="Baumer Hall Cutlass"
                        style={{ maxWidth: "87%", height: "auto" }}
                    />
                </div>
            </div>
            <div className="h-screen w-full"></div>
        </>
    );
};

export default HomePage;
