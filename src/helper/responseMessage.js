import { NextResponse } from "next/server"


export const getResponseMessage =(message,statusCode,successStatus)=>{

    return NextResponse.json({
        message:message,
        status:statusCode,
        success:successStatus
    })

}