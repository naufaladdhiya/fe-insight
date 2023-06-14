import CategoryItem from './category-item.component';

const CategoryList = ({ categories }) => {
  return (
    <div className="grid lg:grid-cols-3 gap-8 mt-10">
      {categories.map((category) => {
        return (
          <CategoryItem
            key={category.id}
            id={category.id}
            category={category}
          />
        );
      })}
    </div>
  );
};
export default CategoryList;
