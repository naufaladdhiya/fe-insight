import image from '../../../public/assets/images/Mask_Group.webp'

const Faq = () => {
    return (
        <div className="grid w-full col-start-1 row-start-1 place-items-center bg-white mt-10">

            <div className="flex items-center justify-center gap-11 p-4 flex-col lg:flex-row">
                <div className="">
                    <img className="max-w-md" src={image} alt="Stud Image" />
                </div>
                <div>
                    <h1 className="text-5xl font-bold">What Can We Help You</h1>
                    <p className="py-6">
                        We help your desire to find laptop that suit on your style
                    </p>
                    <p>
                        <i className="pr-3">✓</i>Find your laptop from 3 category
                    </p>
                    <p>
                        <i className="pr-3">✓</i>Up to date laptop and created your new experience
                    </p>
                    <p>
                        <i className="pr-3">✓</i>Find your destiny on what you are looking for
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Faq;