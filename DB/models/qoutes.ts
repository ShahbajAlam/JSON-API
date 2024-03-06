import mongoose from "mongoose";

const QuoteSchema = new mongoose.Schema({
    text: {
        type: "string",
        required: true,
    },
    author: {
        type: "string",
        required: true,
        lowercase: true,
    },
});

const Quote = mongoose.models.quotes || mongoose.model("quotes", QuoteSchema);

export { Quote };
