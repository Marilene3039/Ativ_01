import database from "../database/database.js";

class PostsModel{
   async insertOne({deviceAutor, price, description, shop, image}){
        const [res] = await database.query(
            "INSERT INTO `posts` (deviceAutor, price, description, shop, image) VALUES (?, ?, ?, ?, ?)",
            [deviceAutor, price, description, shop, image],
            )
            return res;
    }

   async updateOne({price, description, shop, image, postId}){
       const [result] = await database.query(
            "UPDATE `posts` SET price = ?, description = ?, shop = ?, image = ? WHERE `id` = ? ",
            [price, description, shop, image, postId],
        )

        return result;
    }

    async deleteOne({postId}){
        const [result] = await database.query(
             "DELETE FROM `posts` WHERE `id` = ? ",
             [postId],
         )
 
         return result;
     }

     async getAll(){
        const [res] = await database.query("SELECT * from posts ORDER BY posts.created_at DESC");
        return res
    }

    async getOne({postId}){
        const [result] = await database.query(
            "SELECT * FROM `posts` WHERE `id` = ? ",
            [postId],
        )

        return result;
    }
}

export default new PostsModel();