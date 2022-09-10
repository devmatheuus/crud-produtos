import database from '../../database';

const deleteCategoryService = async id => {
  try {
    const response = await database.query(
      'DELETE FROM categories WHERE id = $1',
      [id]
    );

    if (response.rowCount === 0) throw 'Category not found';

    return 'Category deleted';
  } catch (error) {
    throw new Error(error);
  }
};

export default deleteCategoryService;
