const Hero = () => {
  return (
    <div className="hero bg-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://source.unsplash.com/random/900×700/?web"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Welcome</h1>
          <p className="py-6">
          Selamat datang di Situs Kategori Laptop! Di sini, Anda akan menemukan berbagai informasi terkait laptop yang dikategorikan berdasarkan tiga kategori utama: Gaming, Pendidikan, dan Desain. Apapun kebutuhan Anda, kami memiliki rekomendasi laptop terbaik yang sesuai dengan kebutuhan kategori tersebut.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
