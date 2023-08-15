import { ImageResponse } from "@vercel/og";
import { NextRequest, NextResponse } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

export default function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") ?? "Default Title";
  const emoji = searchParams.get("emoji") ?? "🔥";

  return new ImageResponse(
    (
      <div>
        <h1>{title}</h1>
        <h1>{emoji}</h1>
      </div>
    ),
    { width: 1200, height: 628 }
  );
}
