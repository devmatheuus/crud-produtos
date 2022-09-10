import productsByCategoryService from '../../services/products/productsByCategory.service';

const productsByCategoryController = async (request, response) => {
  const { category_id } = request.params;

  try {
    const product = await productsByCategoryService(category_id);

    return response.json(product);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export default productsByCategoryController;
