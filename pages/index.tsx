import { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";

const HomePage: NextPage = () => {
    return (
        <>
            <div className="background">
                <Head>
                    <title>Baumer Hall Home Page</title>
                </Head>
                <div className="ml-[10%] flex h-1/3 w-1/3 animate-fadeIn flex-col justify-center">
                    <h4 className="text-9xl text-black">Baumer</h4>
                    <h4 className="text-9xl text-black">Hall</h4>
                    <p className="text-lg italic"> Per Ardua ad Spes </p>
                </div>
            </div>
        </>
    );
};

export default HomePage;
