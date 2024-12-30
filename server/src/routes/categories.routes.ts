import { getCategories } from '@/controllers/categories.controller';

import express from 'express';

const router = express.Router();

router.get('/', getCategories);

export default router;
