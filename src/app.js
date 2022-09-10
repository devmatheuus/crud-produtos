import express from 'express';
import 'dotenv/config';

import categoriesRoutes from './routers/categories.routes';
import productsRoutes from './routers/products.routes';

import { startDatabase } from './database';

const app = express();

app.use(express.json());

app.use('/categories', categoriesRoutes);
app.use('/products', productsRoutes);

const PORT = process.env.PORT || 3000;

export default app.listen(PORT, () => {
  startDatabase();
  console.log(`Server running in the port ${PORT}`);
});
