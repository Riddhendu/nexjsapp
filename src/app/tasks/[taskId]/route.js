import { Task } from "@/models/task"
import { NextResponse } from "next/server"




export async function GET(request,{params}){
    const {taskId}  = params
    try {
       let task = await Task.findById(taskId)

        return NextResponse.json(task,{status:200})
    } catch (error) {
        console.log('no user found,===============>',error)
        return NextResponse.json({status:400})
    }
}


export async function PUT(request,{params}){
    const {taskId}  = params
    try {
        const {title,content,status} = await request.json()
        let task= await Task.findByIdAndUpdate(taskId,{
            title,content,status
        })

        const response = NextResponse.json(task,{message:'task updated',status:201})
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

    const {taskId}  = params
    try {
        await Task.deleteOne({
            _id:taskId
        })
       return NextResponse.json({
            message:'Task Deleted Successfully',
            status:200,
           success:true 
        })
    } catch (error) {
       return NextResponse.json({
            message:'Failed to delete task',
            status:404,
           success:false
        })
    }

}