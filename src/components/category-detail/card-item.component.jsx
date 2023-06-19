const CardItem = ({ category, onSetModal }) => {
  const { nama, spesifikasi, gambar } = category;

  return (
    <div className="relative shadow-xl card bg-base-100">
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
          <button className="btn btn-md btn-primary" onClick={onSetModal}>
            Buy Now
          </button>
        </div>
      </div>
      {/* {!showModal ? null : (
        <CardModal {...category} handler={closeModalHandler} />
      )} */}
    </div>
  );
};

export default CardItem;
