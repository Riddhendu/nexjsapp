import mongoose from 'mongoose'
export const connectDb =async()=>{
    try {
      const {connection}  =await mongoose.connect('mongodb://localhost:27017/work_manager')
        console.log('db connected')
        // console.log(connection)
    } catch (error) {
        console.log(error)
    }
}