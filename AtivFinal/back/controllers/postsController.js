import PostsModel from "../models/postsModel.js";

class PostsController {
      async insertOne(req, res) {
        try {
          const result = await PostsModel.insertOne({deviceAutor: req.body.deviceAutor, price: req.body.price, description: req.body.description, shop: req.body.shop, image: req.body.image});
    
          res.status(200).send(result);

        } catch (error) {
          console.log(error);
          res.status(400).send({ message: 'error' });
        } finally {
          res.end();
        }
      }

      async updateOne(req,res){
        try {
          const result = await PostsModel.updateOne({postId: req.body.postId, price: req.body.price, description: req.body.description, shop: req.body.shop, image: req.body.image});
          console.log(req.body);
          res.status(200).send(result);

        } catch (error) {
          console.log(error);
          res.status(400).send({ message: 'error' });
        } finally {
          res.end();
        }
      }

      async deleteOne(req,res){
        try {
          const result = await PostsModel.deleteOne({postId: req.body.postId});
    
          res.status(200).send(result);

        } catch (error) {
          console.log(error);
          res.status(400).send({ message: 'error' });
        } finally {
          res.end();
        }
      }

      async getAll(req, res) {
        try {
          const result = await PostsModel.getAll();
    
          res.status(200).send(result);
        } catch (error) {
          console.log(error);
          res.status(400).send({ message: 'error' });
        } finally {
          res.end();
        }
      }

      async getOne(req,res){
        try {
          const result = await PostsModel.getOne({postId: req.params.postId});
    
          res.status(200).send(result);

        } catch (error) {
          console.log(error);
          res.status(400).send({ message: 'error' });
        } finally {
          res.end();
        }
      }
}

export default new PostsController();