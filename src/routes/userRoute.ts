import express from 'express';
import getUserData from '../controller/userController';
const Router = express.Router();
Router.route('/').get(getUserData)

export default Router