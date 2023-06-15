import naufal from '../../public/assets/images/profil.png';
import ega from '../../public/assets/images/profil.png';
import ibad from '../../public/assets/images/profil.png';
import akbar from '../../public/assets/images/profil.png';

const AboutUs = () => {
  const teams = [
    {
      id: 1,
      name: 'Naufal Addhiya',
      role: 'Fullstack Developer',
      photo: naufal
    },
    {
      id: 2,
      name: 'Ega Rahmatul Husni',
      role: 'Backend Developer',
      photo: ega
    },
    {
      id: 3,
      name: 'Ibadurrahman Al Hadi',
      role: 'Frontend Developer',
      photo: ibad
    },
    {
      id: 4,
      name: 'Akbar Fasha Prasetyo',
      role: 'Teams Leader',
      photo: akbar
    },
  ];

  return (
    <div className="container mx-auto min-h-screen">
      <p className="text-center font-bold text-2xl lg:text-3xl xl:text-4xl my-10">
        About Us
      </p>
      <div className="flex flex-col justify-start mt-5">

        <p className="text-[#888888] text-base lg:text-lg xl:text-xl">
          Selamat datang di tim Hardware Insight, rumah bagi pengetahuan laptop!
          Kami dengan bangga mempersembahkan kepada Anda situs web yang dirancang
          khusus untuk memberikan wawasan mendalam tentang dunia laptop.
        </p>
      </div>


      <div className="flex flex-col justify-center mt-5">
        <p className="text-3xl text-center font-bold my-7 leading-22">
          Our Teams
        </p>
        <p className="text-[#888888] text-center text-base lg:text-lg xl:text-xl">
          Tim Hardware Insight terdiri dari sekelompok ahli yang bersemangat tentang
          teknologi laptop. Kami memiliki pengetahuan yang luas tentang berbagai merek,
          model, dan spesifikasi laptop terkini di pasar. Dengan pengalaman dan keahlian
          kami, kami berkomitmen untuk menyajikan informasi terkini dan terpercaya tentang
          perangkat laptop.
        </p>

        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4 mt-10">
          {teams.map((team) => (
            <div className="card bg-base-100 shadow-xl" key={team.id}>
              <figure>
                <img className="rounded-xl h-40 w-50 object-cover" src={team.photo} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{team.name}</h2>
                <p>{team.role}</p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
