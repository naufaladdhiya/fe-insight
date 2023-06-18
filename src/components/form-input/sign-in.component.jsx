import { useState } from "react";
import {
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "./form-input.component";
import Button from "../button/button.component";

const defaultformField = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultformField);
  const { email, password } = formFields;

  const signInwithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const resetFormFields = () => {
    setFormFields(defaultformField);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthWithEmailAndPassword(email, password);

      // resetform when success
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Wrong password");
          break;
        case "auth/invalid-email":
          alert("Invalid email ");
          break;
        default:
          alert("Something went wrong");
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="flex flex-col gap-3 w-80">
      <h2 className="text-2xl font-bold">Already have an account</h2>
      <span className="mt-3 text-md">Sign in with your name and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="Email"
          value={email}
          required
          onChange={handleChange}
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          value={password}
          required
          onChange={handleChange}
        />
        <div className="flex gap-4 mt-4">
          <Button type="submit" className="btn btn-neutral">
            Sign in
          </Button>
          <Button
            type="button"
            className="btn btn-info"
            onClick={signInwithGoogle}
          >
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
