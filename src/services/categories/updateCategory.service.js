import database from '../../database';

const updateCategoryService = async (name, id) => {
  try {
    const response = await database.query(
      'UPDATE categories SET name = $1 WHERE id = $2 RETURNING *',
      [name, id]
    );

    if (response.rowCount === 0) throw 'Category not found';

    return { message: 'Category updated', category: response.rows[0] };
  } catch (error) {
    throw new Error(error);
  }
};

export default updateCategoryService;
