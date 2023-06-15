const FunFact = () => {
    const items = [
        {
            id: 1,
            title: 'MyDoom',
            description: 'MyDoom adalah virus dengan penyebaran tercepat yang pernah dibuat. Total kerusakan yang dilakukan oleh MyDoom adalah $38 miliar',
        },
        {
            id: 2,
            title: 'PC berpendingin air',
            description: 'PC berpendingin air komersial pertama di dunia adalah milik Apple Daya Mac G5, itu benar-benar salah satu fakta komputer yang menakjubkan',
        },
        {
            id: 3,
            title: 'UNIVAC I',
            description: 'Adalah komputer komersial pertama yang dijual di Amerika Serikat. Perusahaan (Eckert Mauchly Computer Corporation) di belakangnya dibangun oleh orang yang sama yang menemukan ENIAC.',
        },
        {
            id: 4,
            title: 'INTERLAC',
            description: 'Dikembangkan sebagai eksperimen untuk menguji batas-batas bahasa pemrograman. Ini termasuk pengubah “TOLONG” jika tidak cukup digunakan  kompilator memperlakukannya sebagai kesalahan. Pernyataan lain seperti “BACA”, “LUPA”, dan “ABAIKAN”.',
        },
    ];

    return (
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4 mt-10">
            {items.map((item) => (
                <div className="card bg-base-100 shadow-xl" key={item.id}>
                    <figure>
                        <img className="rounded-xl h-40 w-50 pt-2 object-cover" src="https://source.unsplash.com/random/900×700/?web" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{item.title}</h2>
                        <p>{item.description}</p>

                    </div>
                </div>
            ))}
        </div>
    );
};

export default FunFact;