import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { postsRoutes } from "./routes/posts"
import "dotenv/config"

const app = express()
const PORT = process.env.PORT || 3000

dotenv.config()

//middlewares
app.use(express.json())
app.use(cors({
    origin: "*",
    credentials: true
}))

//rutas
app.use("/api/posts", postsRoutes)

app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`))

