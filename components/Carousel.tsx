"use client";

import { useEffect, useState } from "react";

const images = [
    "https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
    "https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg",
    "https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg",
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setCurrentIndex((index) => {
                if (index === 2) return 0;
                else return index + 1;
            });
        }, 5000);

        return () => clearInterval(id);
    }, []);

    return (
        <div className="relative w-[25rem] h-[25rem] flex justify-center items-center bg-red-400 rounded-2xl overflow-hidden">
            {images.map((image, i) => (
                <img
                    key={i}
                    src={image}
                    className={`w-full h-full absolute bg-cover inset-0 translate-x-[${
                        i === currentIndex ? 0 : 100
                    }%] transition-all duration-700 ease-out z-[${i}]`}
                />
            ))}
        </div>
    );
};

export default Carousel;
