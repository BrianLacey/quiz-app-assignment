import { Request, Response, NextFunction } from "express";

const errorHandler = (err, req: Request, res: Response, next: NextFunction) => {
    console.log(err);
    console.log(err.status);
    console.log(err.message);
    res.status(err.status || 400).json({ message: err.message });
}
export default errorHandler;