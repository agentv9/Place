import { Schema } from "mongoose"
import mongoose from "mongoose"

const CanvasSchema = new Schema({
    canvas: []
})

export default mongoose.model("canvas", CanvasSchema)