import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
  const { photo, name, id, description } = category;
  return (
    <div className="shadow-xl card bg-base-100">
      <figure>
        <img src={photo} alt={name} />
      </figure>
      <div key={id} className="card-body">
        <h2 className="items-center justify-center card-title">{name}</h2>
        <p className="items-center justify-center">{description}</p>
        <div className="items-center justify-end card-actions">
          <button className="btn btn-primary ">
            <Link to={`/category/${id}`}>{name}</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
