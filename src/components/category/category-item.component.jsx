import { Link } from 'react-router-dom';

const CategoryItem = ({ category }) => {
  const { name, id, description } = category;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src="https://source.unsplash.com/random/900×700/?web" alt={name} />
      </figure>
      <div key={id} className="card-body">
        <h2 className="card-title justify-center items-center">{name}</h2>
        <p className="justify-center items-center">{description}</p>
        <div className="card-actions justify-end justify-center items-center">
          <button className="btn btn-primary ">
            <Link to={`/category/${id}`}>{name}</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
