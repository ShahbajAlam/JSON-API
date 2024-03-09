import Carousel from "@/components/Carousel";
import Link from "next/link";

export default function Home() {
    return (
        <main className="min-h-[calc(100svh-72px)] w-[75%] mx-auto flex items-center justify-center gap-5">
            <div className="basis-[50%] px-5">
                <h1 className="text-5xl font-extrabold">Welcome to</h1>
                <h1 className="text-6xl font-extrabold my-5 bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text">
                    JSONhub
                </h1>
                <p className="text-2xl">
                    A small resource of REST APIs, designed for developers who
                    need JSON data in their projects
                </p>
                <Link href="/cards">
                    <button className="btn btn-accent rounded-md my-4">
                        Try JSONhub
                    </button>
                </Link>
            </div>
            <div className="basis-[50%] px-5 flex justify-end items-center">
                <Carousel />
            </div>
        </main>
    );
}
