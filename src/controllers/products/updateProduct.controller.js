import updateProductService from '../../services/products/updateProduct.service';

const updateProductController = async (request, response) => {
  const { id } = request.params;
  const { name, price, category_id } = request.body;

  try {
    const updatedProduct = await updateProductService(
      name,
      price,
      category_id,
      id
    );

    return response.json(updatedProduct);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export default updateProductController;
