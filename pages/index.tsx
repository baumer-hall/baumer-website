import { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";

const HomePage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Baumer Hall Home Page</title>
            </Head>
            <Navbar />
        </>
    );
};

export default HomePage;
