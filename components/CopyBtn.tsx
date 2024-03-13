"use client";

import { errorToast } from "@/helpers/errorToast";
import { successToast } from "@/helpers/successToast";

const CopyBtn = ({ text }: { text: string }) => {
    const copyURL = async () => {
        try {
            navigator.clipboard.writeText(text);
            successToast("URL is copied to clipboard");
        } catch (err) {
            errorToast("Could not copy the URL to clipboard");
        }
    };

    return (
        <button
            onClick={copyURL}
            className="px-4 py-2 rounded-lg border-none outline-none dark:bg-slate-800 bg-slate-100 hover:brightness-75 duration-200"
        >
            copy
        </button>
    );
};

export default CopyBtn;
