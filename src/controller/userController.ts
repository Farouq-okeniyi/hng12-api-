import { Request, Response,NextFunction } from 'express';

const getUserData = async(req:Request,res:Response, next:NextFunction):Promise<void>=>{
    res.json({
        email: "farouqokeniyi2004@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/Farouq-okeniyi/hng12-api-"
      });
}

export default getUserData