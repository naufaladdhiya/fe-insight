const CardModal = ({ handler }) => {
  return (
    <div className="fixed top-44 left-4 md:left-44 lg:left-80 xl:left-1/3">
      <form method="dialog" className="modal-box w-96">
        <h3 className="text-lg font-bold">Yakin dengan pilihan Laptop Anda?</h3>
        <div className="modal-action">
          <button className="btn" onClick={handler}>
            Ya
          </button>
          <button className="btn" onClick={handler}>
            Tidak
          </button>
        </div>
      </form>
    </div>
  );
};

export default CardModal;
