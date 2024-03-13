import Card from "@/components/Card";

const cards = [
    {
        name: "Quotes",
        href: "/quotes",
    },
    {
        name: "Countries",
        href: "/countries",
    },
    {
        name: "Products",
        href: "/products",
    },
];

const Cards = () => {
    return (
        <div className="w-[75%] mx-auto p-10 cards">
            {cards.map((card, i) => (
                <Card
                    index={i}
                    key={card.href}
                    href={card.href}
                    name={card.name}
                />
            ))}
        </div>
    );
};

export default Cards;
