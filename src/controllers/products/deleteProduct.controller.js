import deleteProductService from '../../services/products/deleteProduct.service';

const deleteProductController = async (request, response) => {
  const { id } = request.params;

  try {
    const deletedProduct = await deleteProductService(id);

    return response.status(204).json(deletedProduct);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export default deleteProductController;
