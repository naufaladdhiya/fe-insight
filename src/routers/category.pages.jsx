import CategoryList from '../components/category/category-list.component';
import { getAllLaptop } from '../utils/laptop';
import { useState, useEffect } from 'react';

const Category = () => {
  const [category, setCategory] = useState(() => getAllLaptop());

  useEffect(() => {
    setCategory(getAllLaptop());
  }, []);
  return (
    <div className="container mx-auto min-h-screen">
      <h1 className="text-3xl text-center">Rekomendasi Laptop</h1>
      <CategoryList categories={category} />
    </div>
  );
};

export default Category;
