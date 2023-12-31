import { Router, json } from 'express'; 
import PostsController from './controllers/postsController.js';

const routes = new Router();
routes.use(json());

routes.get('/posts', PostsController.getAll);
routes.get('/posts/:postId', PostsController.getOne);
routes.post('/posts/inserir', PostsController.insertOne);
routes.put('/posts/atualizar', PostsController.updateOne);
routes.delete('/posts/deletar', PostsController.deleteOne);


export default routes;