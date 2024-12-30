import express from 'express';

import categoryRoutes from '@/routes/categories.routes';

const app = express();
const PORT = 3000;

app.use('/categories', categoryRoutes);

app.listen(PORT, () => console.log(`The server is running at http://localhost:${PORT}`));
