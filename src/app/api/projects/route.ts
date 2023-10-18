import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";
import { URL } from "url";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url as string);
  const id = searchParams.get("id");

  // const { pathname } = new URL(req.url);
  // const id = pathname.split("/")[3]
  
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "/n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: `Projects!A${id}:F${id}`,
    });

    return NextResponse.json({ body: response, status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ body: "something went wrong x_x", status: 500 });
  }
}
