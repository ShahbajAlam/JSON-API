import CopyBtn from "@/components/CopyBtn";

const leftBrace = "{";
const rightBrace = "}";

const QuotePage = () => {
    return (
        <div className="w-[75%] mx-auto p-10">
            <h2 className="text-2xl mb-4">Endpoint</h2>
            <div className="flex gap-10">
                <p className="bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-md">
                    https://jsonhub-shahbaj.vercel.app/api/quotes
                </p>
                <CopyBtn text="https://jsonhub-shahbaj.vercel.app/api/quotes" />
            </div>

            <h2 className="text-2xl my-4">Example Response</h2>
            <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-md w-[50%]">
                <p>{leftBrace}</p>
                <p>"_id": "65e992561c0eccc9ec043cbe",</p>
                <p>
                    "quote": "The only way to do great work is to love what you
                    do.",
                </p>
                <p>"author": "steve jobs"</p>
                <p>{rightBrace},</p>
                <p>{leftBrace}</p>
                <p>"_id": "65e992561c0eccc9ec043cbf",</p>
                <p>
                    "quote": "In three words I can sum up everything I've
                    learned about life: it goes on.",
                </p>
                <p>"author": "robert frost"</p>
                <p>{rightBrace}</p>
            </div>

            <h2 className="text-2xl my-4">Search Parameters</h2>
            <p className="mt-4 mb-2">Author</p>
            <div className="flex gap-10">
                <p className="bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-md">
                    https://jsonhub-shahbaj.vercel.app/api/quotes?author='steve
                    jobs'
                </p>
                <CopyBtn text="https://jsonhub-shahbaj.vercel.app/api/quotes?author='steve jobs'" />
            </div>

            <h2 className="text-2xl my-4">Example Response</h2>
            <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-md w-[50%]">
                <p>{leftBrace}</p>
                <p>"_id": "65e992561c0eccc9ec043cce",</p>
                <p>
                    "quote": "Your time is limited, don't waste it living
                    someone else's life.",
                </p>
                <p>"author": "steve jobs"</p>
                <p>{rightBrace}</p>
            </div>

            <p className="mt-4 mb-2">Limit</p>
            <div className="flex gap-10">
                <p className="bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-md">
                    https://jsonhub-shahbaj.vercel.app/api/quotes?limit=1
                </p>
                <CopyBtn text="https://jsonhub-shahbaj.vercel.app/api/quotes?limit=1" />
            </div>

            <h2 className="text-2xl my-4">Example Response</h2>
            <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-md w-[50%]">
                <p>{leftBrace}</p>
                <p>"_id": "65e992561c0eccc9ec043cbe",</p>
                <p>
                    "quote": "The only way to do great work is to love what you
                    do.",
                </p>
                <p>"author": "steve jobs"</p>
                <p>{rightBrace}</p>
            </div>
            <h3 className="my-6">
                Note : You can use both the "author" and "limit" params in a
                single request
            </h3>
        </div>
    );
};

export default QuotePage;
