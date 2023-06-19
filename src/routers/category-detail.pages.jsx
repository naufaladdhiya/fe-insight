import { getCategoryLaptops, searchLaptop } from "../utils/laptop";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CardList from "../components/category-detail/card-list.component";
import CardModal from "../components/category-detail/card-modal.component";
import SearchLaptop from "../components/search-laptop.component";

const DetailCategoryPage = () => {
  const { id } = useParams();
  const [category, setCategory] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setCategory(getCategoryLaptops(Number(id)));
  }, [id]);

  const onSearch = (e) => {
    setKeyword(e.target.value);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const filteredLaptop = searchLaptop(
      getCategoryLaptops(Number(id)),
      keyword
    );
    setCategory(filteredLaptop);
  }, [keyword, id]);

  return (
    <div className="container relative min-h-screen mx-auto">
      <h1 className="mt-4 text-3xl font-bold text-center">
        Find Your Own Laptop
      </h1>
      <SearchLaptop keyword={keyword} onChangeHandler={onSearch} />
      {category.length > 0 ? (
        <CardList categories={category} onSetModal={() => setShowModal(true)} />
      ) : (
        <div className="mt-6 text-2xl text-center text-blue-400">
          Tidak menemukan laptop yang ditemukan
        </div>
      )}
      {showModal ? <CardModal handler={closeModalHandler} /> : null}
    </div>
  );
};

export default DetailCategoryPage;
