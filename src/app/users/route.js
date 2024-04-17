import { connectDb } from "@/helper/db"
import { User } from "@/models/user"
import { NextResponse } from "next/server"
connectDb()
export async function GET(){
    try {
        let users = await User.find()
        return NextResponse.json(users,{status:200})
    } catch (error) {
        console.log('no user found,===============>',error)
        return NextResponse.json({status:400})
    }
      
}


export async function  POST(request){

    const {name,email,password,about,profileUrl} = await request.json()
       try {
           const user = new User({
            name,email,password,about,profileUrl
           })
           await user.save()
           const response = NextResponse.json(user,{message:'user Created',status:201})
           return response
       } catch (error) {
        console.log('error from post route///////===============>',error)
             return NextResponse.json({
                message:'Failed to create',
                status:false
             })
       }
}