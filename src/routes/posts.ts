import { Router } from "express";
import { postsTable } from "../db/schema";
import { db } from "../db/index"; 

export const postsRoutes = Router();

interface Post {
    title: string;
    content: string;
    slug: string;
}

// Crear nuevo post
postsRoutes.post("/", async (req, res) => {
    const { title, content, slug }: Post = req.body;

    try {
        const result = await db.insert(postsTable).values({ title, content, slug });
        res.status(201).json({ success: true, result });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error al insertar el post" });
    }
});

postsRoutes.get("/", async (_req, res) => {
    try {
        const posts = await db.select().from(postsTable);
        res.json(posts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error al obtener posts" });
    }
});

postsRoutes.get("/:slug", async (req, res) => {
    const { slug } = req.params;

    try {
        const posts = await db
            .select()
            .from(postsTable)
            .where((row) => row.slug.eq(slug)); nes

        if (posts.length === 0) {
            return res.status(404).json({ error: "Post no encontrado" });
        }

        res.json(posts[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error al obtener el post" });
    }
});
