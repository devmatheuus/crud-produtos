import listCategoryService from '../../services/categories/listCategory.service';

const listCategoryController = async (request, response) => {
  try {
    const { id } = request.params;

    const category = await listCategoryService(id);

    return response.json(category);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export default listCategoryController;
