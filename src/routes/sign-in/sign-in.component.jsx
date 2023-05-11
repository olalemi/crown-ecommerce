import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGooogleUser = async (user) => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h1>Sign In Page</h1>

      <button onClick={logGooogleUser}>sign In With Google Popup</button>
    </div>
  );
};

export default SignIn;
