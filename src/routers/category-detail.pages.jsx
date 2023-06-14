import { getCategoryLaptops, searchLaptop } from '../utils/laptop';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CardList from '../components/category-detail/card-list.component';
import SearchLaptop from '../components/search-laptop.component';

const DetailCategoryPage = () => {
  const { id } = useParams();
  const [category, setCategory] = useState([]);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    setCategory(getCategoryLaptops(Number(id)));
  }, [id]);

  const onSearch = (e) => {
    setKeyword(e.target.value);
    console.log(keyword);
  };

  useEffect(() => {
    const filteredLaptop = searchLaptop(
      getCategoryLaptops(Number(id)),
      keyword
    );
    setCategory(filteredLaptop);
  }, [keyword, id]);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl text-center">Rekomendasi Laptop</h1>
      <SearchLaptop keyword={keyword} onChangeHandler={onSearch} />
      {category.length > 0 ? (
        <CardList categories={category} />
      ) : (
        <div className="text-center text-2xl text-blue-400 mt-6">
          Tidak menemukan laptop yang ditemukan
        </div>
      )}
    </div>
  );
};

export default DetailCategoryPage;
