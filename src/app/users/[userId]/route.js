import { User } from "@/models/user"
import { NextResponse } from "next/server"


export async function GET(request,{params}){
    const {userId}  = params
    try {
       let user = await User.findById(userId)

        return NextResponse.json(user,{status:200})
    } catch (error) {
        console.log('no user found,===============>',error)
        return NextResponse.json({status:400})
    }
}

export async function PUT(request,{params}){
    const {userId}  = params
    try {
        const {name,email,password,about,profileUrl} = await request.json()
        let user = await User.findByIdAndUpdate(userId,{
            name,email,password,about,profileUrl
        })

        const response = NextResponse.json(user,{message:'user updated',status:201})
        return response
    } catch (error) {
        console.log('error from Update route///////===============>',error)
             return NextResponse.json({
                message:'Failed to update',
                status:false
             })
    }
}
export async function DELETE(request,{params}){

    const {userId}  = params
    try {
        await User.deleteOne({
            _id:userId
        })
       return NextResponse.json({
            message:'User Deleted Successfully',
            status:200,
           success:true 
        })
    } catch (error) {
       return NextResponse.json({
            message:'Failed to delete user',
            status:404,
           success:false
        })
    }

}