import SignIn from "../components/form-input/sign-in.component";
import SignUp from "../components/form-input/sign-up.component";

const Authentication = () => {
  return (
    <div className="container flex flex-col justify-between w-10/12 gap-12 mx-auto lg:flex-row m-9">
      <div className="flex flex-col">
        <SignIn />
      </div>
      <div className="flex flex-col">
        <SignUp />
      </div>
    </div>
  );
};

export default Authentication;
