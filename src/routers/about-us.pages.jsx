const AboutUs = () => {
  const teams = [
    {
      id: 1,
      name: 'Naufal Addhiya',
      role: 'Frontend Developer',
    },
    {
      id: 2,
      name: 'Ega Rahmatul Husni',
      role: 'Backend Developer',
    },
    {
      id: 3,
      name: 'Iba Abdurahman',
      role: 'UI/UX Designer',
    },
    {
      id: 4,
      name: 'Akbar',
      role: 'Teams Leader',
    },
  ];

  return (
    <div className="container mx-auto">
      <p className="text-center font-bold text-2xl lg:text-3xl xl:text-4xl my-10">
        About Us
      </p>
      <div className="flex justify-center items-center ">
        <div>
          <button className="btn btn-neutral-content">
            The Secret Ingredient
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-start mt-14">
        <p className="text-3xl font-bold my-7 leading-22">
          Content Has to Be more Brilliant
        </p>
        <p className="text-[#888888] text-base lg:text-lg xl:text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
          minima recusandae numquam, quos a aspernatur molestiae qui perferendis
          vero porro cupiditate rerum?
        </p>
        <div className="mt-5">
          <button className="btn btn-primary">Our Teams</button>
        </div>
      </div>
      <div className="flex flex-col justify-center mt-10">
        <p className="text-3xl text-center font-bold my-7 leading-22">
          Our Teams
        </p>
        <p className="text-[#888888] text-center text-base lg:text-lg xl:text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <p className="text-[#888888] text-center mt-5 text-base lg:text-lg xl:text-xl">
          Quibusdam minima recusandae numquam, quos a aspernatur molestiae qui.
        </p>

        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4 mt-10">
          {teams.map((team) => (
            <div className="card bg-base-100 shadow-xl" key={team.id}>
              <figure>
                {/* <img
                  src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                /> */}
              </figure>
              <div className="card-body">
                <h2 className="card-title">{team.name}</h2>
                <p>{team.role}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
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
