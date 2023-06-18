const CardItem = ({ category }) => {
  const { nama, spesifikasi, gambar } = category;
  return (
    <div className="shadow-xl card bg-base-100">
      <figure>
        <img src={gambar} alt={nama} className="max-w-md bg-cover max-h-56" />
      </figure>
      <div className="card-body">
        <p className="font-bold text-center text-blue-500">{nama}</p>
        <ul>
          <li>Processor: {spesifikasi.processor}</li>
          <li>RAM: {spesifikasi.ram}</li>
          <li>Storage: {spesifikasi.storage}</li>
          <li>Grafis: {spesifikasi.grafis}</li>
          <li>Layar: {spesifikasi.layar}</li>
          <li>Harga: {spesifikasi.harga}</li>
        </ul>
        <div className="items-center justify-end card-actions">
          <button className="btn btn-md btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;