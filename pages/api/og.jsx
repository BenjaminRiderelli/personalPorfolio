import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};

export default function handler(req) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") ?? "Default Title";
  const emoji = searchParams.get("emoji") ?? "🔥";

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: "black",
          backgroundSize: "150px 150px",
          height: "100%",
          width: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          flexWrap: "nowrap",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            justifyItems: "center",
          }}
        >
          <i
            style={{
              fontSize: "100px",
            }}
          >
            {emoji}
          </i>
        </div>
        <div
          style={{
            fontSize: "60",
            fontStyle: "normal",
            letterSpacing: "-0.025em",
            color: "white",
            marginTop: 30,
            padding: "0 120px",
            lineHeight: 1.4,
            whiteSpace: "pre-wrap",
          }}
        >
          {title}
        </div>
      </div>
    )
  );
}
