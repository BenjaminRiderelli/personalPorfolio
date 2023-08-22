import {google} from 'googleapis'
import { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server'


interface SheetForm{
    name:string,
    email:string,
    message:string
}

export async function POST(req:Request, res:NextResponse){

    if(req.method !== "POST"){
        NextResponse.json({message:"just for posting", status:405})
    }

    const body = await req.json()   
    
    
    try{
        const auth = new google.auth.GoogleAuth({
            credentials:{
                client_email:process.env.GOOGLE_CLIENT_EMAIL,
                private_key:process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "/n")
            },
            scopes:[
                "https://www.googleapis.com/auth/drive",
                "https://www.googleapis.com/auth/drive.file",
                "https://www.googleapis.com/auth/spreadsheets"
            ]
        })

        const sheets = google.sheets({
            auth, version:'v4'
        })

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId:process.env.GOOGLE_SHEET_ID,
            range: 'Leads!A1:C1',
            valueInputOption:'USER_ENTERED',
            requestBody:{
                values:[
                    [body.name, body.email, body.message]
                ]
            }
        })

        return NextResponse.json({message:response, status:200})
    }catch(e){
        console.log(e)
        return NextResponse.json({message:"something went wrong", status:500})
    }

}