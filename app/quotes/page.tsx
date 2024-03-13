"use client";

const QuotePage = () => {
    const copyURL = async () => {
        try {
            navigator.clipboard.writeText(
                "https://jsonhub-shahbaj.vercel.app/api/quotes"
            );
            alert("URL is copied");
        } catch (err) {
            alert("Could not copy the URL");
        }
    };

    return (
        <div className="w-[75%] mx-auto p-10">
            <h2>Endpoint</h2>
            <div className="flex gap-10">
                <p>https://jsonhub-shahbaj.vercel.app/api/quotes</p>
                <button onClick={copyURL}>copy</button>
            </div>
        </div>
    );
};

export default QuotePage;
