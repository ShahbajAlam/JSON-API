import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/DB/dbConfig";
import { Quote } from "@/DB/models/qoutes";

// *******************  GET REQUEST  **************************

const GET = async (request: NextRequest) => {
    await connectDB();
    try {
        const authorParam = request.nextUrl.searchParams.get("author");
        const limitParam = request.nextUrl.searchParams.get("limit");

        // ALL QUOTES
        if (!authorParam && !limitParam) {
            const quotes = await Quote.find({});
            return NextResponse.json({ status: 200, quotes });
        }

        // ONLY LIMIT PARAMETER
        if (!authorParam && limitParam) {
            if (Number(limitParam) <= 0) {
                return NextResponse.json({ status: 200, quotes: [] });
            }
            const quotes = await Quote.find({}).limit(Number(limitParam));
            return NextResponse.json({ quotes, status: 200 });
        }

        // ONLY AUTHOR PARAMETER
        if (!limitParam && authorParam) {
            const quotes = await Quote.find({
                author: authorParam.toLowerCase(),
            });
            return NextResponse.json({ status: 200, quotes });
        }

        // BOTH AUTHOR & LIMIT PARAMETERS
        if (limitParam && authorParam) {
            if (Number(limitParam) <= 0) {
                return NextResponse.json({ status: 200, quotes: [] });
            }
            const quotes = await Quote.find({
                author: authorParam.toLowerCase(),
            }).limit(Number(limitParam));
            return NextResponse.json({ status: 200, quotes });
        }
    } catch (error) {
        return NextResponse.json({
            error: error.message,
            status: 500,
        });
    }
};

// *******************  POST REQUEST  **************************

const POST = async (request: NextRequest) => {
    await connectDB();
    try {
        const { text, author } = await request.json();

        if (!text || !author) {
            return NextResponse.json({
                error: "Both TEXT and AUTHOR fields are required",
                status: 400,
            });
        }

        const quote = await Quote.create({ text, author });
        return NextResponse.json({ status: 201, quote });
    } catch (error) {
        return NextResponse.json({
            error: error.message,
            status: 500,
        });
    }
};

export { GET, POST };
