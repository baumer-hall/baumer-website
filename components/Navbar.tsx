import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <div className="fixed top-0 left-0 right-0 flex h-16 items-center bg-red-600 pt-0">
            <div className="relative h-3/4 w-16">
                <Link href="/">
                    <a className="flex h-full w-full items-center justify-center">
                        <Image
                            src="/images/baumer_logo.png"
                            layout="intrinsic"
                            width={32}
                            height={39}
                        />
                    </a>
                </Link>
            </div>
            <h1 className="text-2xl font-bold text-white">BAUMER HALL</h1>
        </div>
    );
}
