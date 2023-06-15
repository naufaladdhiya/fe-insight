import { Link } from 'react-router-dom';

const CategoryItem = ({ category }) => {
  const { name, id, description } = category;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src="https://source.unsplash.com/random/900×700/?web" alt={name} />
      </figure>
      <div key={id} className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="justify-center items-center">{description}</p>
        <div className="card-actions justify-end items-center">
          <Link to={`/category/${id}`}>
            <button className="btn btn-primary ">{name}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
