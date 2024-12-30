import { Request, Response } from 'express';

export const getCategories = async (_req: Request, res: Response) => {
	res.send('Categories');
};
