import deleteCategoryService from '../../services/categories/deleteCategory.service';

const deleteCategoryController = async (request, response) => {
  const { id } = request.params;

  try {
    const deletedCategory = await deleteCategoryService(id);

    return response.status(204).json(deletedCategory);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export default deleteCategoryController;
