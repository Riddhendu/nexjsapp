import { httpAxios } from "@/helper/httpHelper";


export async function addTask(task){
 const result = await httpAxios.post('/tasks',task).then((response)=>{
       response.data
 })

 return result
}


export async function addUser(task){
    const result = await httpAxios.post('/users',user).then((response)=>{
          response.data
    })
   
    return result
   }