import { Link } from "react-router-dom";

const CategoryItem = ({ category, }) => {
  const { photo, name, id, description } = category;
  return (
    <div className="shadow-xl card bg-base-100">
      <figure>
        <img src={photo} alt={name} />
      </figure>
      <div key={id} className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="items-center justify-center">{description}</p>
        <div className="items-center justify-end card-actions">
          <Link to={`/category/${id}`}>
            <button className="btn btn-primary ">{name}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
