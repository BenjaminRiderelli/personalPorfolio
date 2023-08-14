import {google} from 'googleapis'
import { NextApiRequest, NextApiResponse } from 'next'


interface SheetForm{
    name:string,
    email:string,
    message:string
}

export default async function handler(req:NextApiRequest, res:NextApiResponse){
    if(req.method !== "POST"){
        res.status(405).json({message:"just for posting my friend"})
    }

    const body = req.body as SheetForm


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

        return res.status(200).json({message:"hola"})
    }catch(e){
        console.log(e)
        return res.status(500).send({message:"something went wrong x_x"})
    }

}