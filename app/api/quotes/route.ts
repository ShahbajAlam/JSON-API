import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/DB/dbConfig";
import { Quote } from "@/DB/models/qoutes";

const dynamic = "force-static";

// *******************  GET REQUEST  **************************

const GET = async (request: NextRequest) => {
    await connectDB();
    const authorParam = request.nextUrl.searchParams
        .get("author")
        ?.toLowerCase();
    const limitParam = request.nextUrl.searchParams.get("limit");

    try {
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
                author: authorParam,
            });
            return NextResponse.json({ status: 200, quotes });
        }

        // BOTH AUTHOR & LIMIT PARAMETERS
        if (limitParam && authorParam) {
            if (Number(limitParam) <= 0) {
                return NextResponse.json({ status: 200, quotes: [] });
            }
            const quotes = await Quote.find({
                author: authorParam,
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

export { GET, dynamic };
