import listProductService from '../../services/products/listProduct.service';

const listProductController = async (request, response) => {
  const { id } = request.params;

  try {
    const product = await listProductService(id);

    return response.json(product);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export default listProductController;
