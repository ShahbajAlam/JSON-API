import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/DB/dbConfig";
import { Quote } from "@/DB/models/qoutes";

// *******************  GET REQUEST  **************************

const headers = {
    "Access-Control-Allow-Origin": "*",
};

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
            return new NextResponse(JSON.stringify(quotes), {
                headers,
                status: 200,
            });
        }

        // ONLY LIMIT PARAMETER
        if (!authorParam && limitParam) {
            if (Number(limitParam) <= 0) {
                return new NextResponse(JSON.stringify([]), {
                    headers,
                    status: 200,
                });
            }
            const quotes = await Quote.find({}).limit(Number(limitParam));
            return new NextResponse(JSON.stringify(quotes), {
                headers,
                status: 200,
            });
        }

        // ONLY AUTHOR PARAMETER
        if (!limitParam && authorParam) {
            const quotes = await Quote.find({
                author: authorParam,
            });
            return new NextResponse(JSON.stringify(quotes), {
                headers,
                status: 200,
            });
        }

        // BOTH AUTHOR & LIMIT PARAMETERS
        if (limitParam && authorParam) {
            if (Number(limitParam) <= 0) {
                return new NextResponse(JSON.stringify([]), {
                    headers,
                    status: 200,
                });
            }
            const quotes = await Quote.find({
                author: authorParam,
            }).limit(Number(limitParam));
            return new NextResponse(JSON.stringify(quotes), {
                headers,
                status: 200,
            });
        }
    } catch (error) {
        return new NextResponse(JSON.stringify({ error: error.message }), {
            headers,
            status: 500,
        });
    }
};

export { GET };
