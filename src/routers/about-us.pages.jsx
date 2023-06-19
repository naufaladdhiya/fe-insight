import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import naufal from "../../public/assets/images/profil.png";
import ega from "../../public/assets/images/profil.png";
import ibad from "../../public/assets/images/profil.png";
import akbar from "../../public/assets/images/profil.png";

const AboutUs = () => {
  const teams = [
    {
      id: 1,
      name: "Naufal Addhiya",
      role: "Fullstack Developer",
      photo: naufal,
      github: "https://github.com/naufaladdhiya",
      linkedin: "https://www.linkedin.com/in/naufal-addhiya-b97925279/",
      instagram: "https://github.com/naufaladdhiya",
    },
    {
      id: 2,
      name: "Ega Rahmatul Husni",
      role: "Backend Developer",
      photo: ega,
      github: "https://github.com/egarahmatul",
      linkedin: "https://www.linkedin.com/in/egarahmatulhusni/",
      instagram: "https://www.instagram.com/egarahmatul/",
    },
    {
      id: 3,
      name: "Ibadurrahman Al Hadi",
      role: "Frontend Developer",
      photo: ibad,
      github: "https://www.instagram.com/allihad.a/",
      linkedin: "https://www.instagram.com/allihad.a/",
      instagram: "https://www.instagram.com/allihad.a/",
    },
    {
      id: 4,
      name: "Akbar Fasha Prasetyo",
      role: "Teams Leader",
      photo: akbar,
      github: "http://github.com/akbarfasha",
      linkedin: "https://www.linkedin.com/in/akbarfasha",
      instagram: "http://instagram.com/bar.prstyo",
    },
  ];

  return (
    <div className="container min-h-screen mx-auto">
      <p className="my-10 text-2xl font-bold text-center lg:text-3xl">
        About Us
      </p>
      <div className="flex flex-col justify-start mt-5">
        <p className="text-[#888888] text-base lg:text-lg text-center">
          Selamat datang di tim Hardware Insight, rumah bagi pengetahuan laptop!
          Kami dengan bangga mempersembahkan kepada Anda situs web yang
          dirancang khusus untuk memberikan wawasan mendalam tentang dunia
          laptop.
        </p>
      </div>

      <div className="flex flex-col justify-center mt-5">
        <p className="text-3xl font-bold text-center my-7 leading-22">
          Our Teams
        </p>
        <p className="text-[#888888] text-center text-base lg:text-lg">
          Tim Hardware Insight terdiri dari sekelompok ahli yang bersemangat
          tentang teknologi laptop. Kami memiliki pengetahuan yang luas tentang
          berbagai merek, model, dan spesifikasi laptop terkini di pasar. Dengan
          pengalaman dan keahlian kami, kami berkomitmen untuk menyajikan
          informasi terkini dan terpercaya tentang perangkat laptop.
        </p>

        <div className="grid gap-6 mt-10 md:grid-cols-3 lg:grid-cols-4">
          {teams.map((team) => (
            <div className="shadow-xl card bg-base-100" key={team.id}>
              <figure>
                <img
                  className="object-cover h-40 rounded-xl w-50"
                  src={team.photo}
                />
              </figure>
              <div className="card-body">
                <h2 className="text-lg card-title">{team.name}</h2>
                <p>{team.role}</p>
                <div className="card-actions">
                  <a href={team.github} target="blank">
                    <AiFillGithub />
                  </a>
                  <a href={team.linkedin} target="blank">
                    <AiFillLinkedin />
                  </a>
                  <a href="">
                    <AiFillInstagram />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
