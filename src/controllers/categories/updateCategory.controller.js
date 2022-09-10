import updateCategoryService from '../../services/categories/updateCategory.service';

const updateCategoryController = async (request, response) => {
  try {
    const { id } = request.params;
    const { name } = request.body;

    const updatedCategory = await updateCategoryService(name, id);

    return response.json(updatedCategory);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export default updateCategoryController;
