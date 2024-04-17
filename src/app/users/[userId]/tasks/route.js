import { Task } from "@/models/task"
import { NextResponse } from "next/server"

export async function GET(request,{params}){
    const {userId}  = params
    try {
       let user = await Task.findById(userId)

        return NextResponse.json(user,{status:200})
    } catch (error) {
        console.log('no user found,===============>',error)
        return NextResponse.json({status:400})
    }
}
