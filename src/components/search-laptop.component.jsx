const SearchLaptop = ({ onChangeHandler, keyword }) => {
  return (
    <div className="form-control mt-4">
      <input
        type="text"
        placeholder="Cari laptopmu disini"
        className="input input-bordered w-24 md:w-auto"
        onChange={onChangeHandler}
        value={keyword}
      />
    </div>
  );
};

export default SearchLaptop;
