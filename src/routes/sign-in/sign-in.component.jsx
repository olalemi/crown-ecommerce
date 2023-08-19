import {
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";

const SignIn = () => {
  const logGooogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    // const userDocRef = await createUserDocumentFromAuth(user)
    createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign In Page</h1>

      <button onClick={logGooogleUser}>sign In With Google Popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
