import { toast } from "react-hot-toast";

const errorToast = (message: string) => {
    toast.error(message, {
        id: message,
        duration: 2500,
        position: "top-center",
        style: {
            borderRadius: 16,
            paddingBlock: 5,
            paddingInline: 16,
        },
    });
};

export { errorToast };
