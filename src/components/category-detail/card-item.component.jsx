const CardItem = ({ category }) => {
  const { nama, spesifikasi } = category;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src="https://source.unsplash.com/random/900×700/?web" alt={nama} />
      </figure>
      <div className="card-body">
        <p>{nama}</p>
        <ul>
          <li>Processor: {spesifikasi.processor}</li>
          <li>RAM: {spesifikasi.ram}</li>
          <li>Storage: {spesifikasi.storage}</li>
          <li>Grafis: {spesifikasi.grafis}</li>
          <li>Layar: {spesifikasi.layar}</li>
        </ul>
        <div className="card-actions justify-end">
          <button className="btn btn-md btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
