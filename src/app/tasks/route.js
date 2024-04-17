import { getResponseMessage } from "@/helper/responseMessage"
import { Task } from "@/models/task"
import { NextResponse } from "next/server"



export async function GET(){
    try {
        let tasks = await Task.find()
        return NextResponse.json(tasks,{status:200})
    } catch (error) {
        console.log('no task found,===============>',error)
        return getResponseMessage('error in getting task',404,false)
    }
      
}

export async function  POST(request){

    const {title,content,userId} = await request.json()
       try {
           const task = new Task({
            title,content,userId
           })
           await task.save()
           const response = NextResponse.json(task,{message:'task Created',status:201})
           return response
       } catch (error) {
        console.log('error from post route///////===============>',error)
        return getResponseMessage('error in creating task',500,false)
       }
}