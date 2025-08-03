import { Router } from "express"
import { postsTable } from "../db/schema"
import { drizzle } from "drizzle-orm/libsql"

export const postsRoutes = Router()

interface postsProps {
    title: string
    content: string
    slug: string
}

type typeSlug = postsProps["slug"]

const db = drizzle(process.env.DB_FILE_NAME!)



// Crear nuevo post
postsRoutes.post("/", (req, res) => {
    //const { title, content }: Pick<postsProps, "title" | "content"> = req.body

})

// Obtener todos los posts (solo metadata)
postsRoutes.get("/", async (req, res) => {
    const newPost = {
        id: 1,
        title: "Primer articulo",
        slug: "primer-articulo",
        content: "Este es el contenido de uno de los primeros articulos de mi blog"
    };

    try {
        const peticion = await db.insert(postsTable).values(newPost);
        res.status(200).json(peticion);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al insertar el post" });
    }
})

// Obtener un post por slug (con contenido)
postsRoutes.get("/:slug", (req, res) => {

})
