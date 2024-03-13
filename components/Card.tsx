import Link from "next/link";

type CardProps = {
    name: string;
    href: string;
    index: number;
};

const Card = ({ name, href, index }: CardProps) => {
    return (
        <div
            className={`${
                index % 2 === 0 ? "justify-self-end" : "justify-self-start"
            } w-[15rem] aspect-square p-4 rounded-lg flex flex-col items-center justify-center duration-300 bg-cyan-100 dark:bg-[#434343] hover:brightness-75`}
        >
            <h1 className="text-4xl text-center font-bold mb-5">{name}</h1>
            <Link href={href} className="underline">check out here</Link>
        </div>
    );
};

export default Card;
