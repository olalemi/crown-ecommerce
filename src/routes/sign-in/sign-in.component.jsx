import { signInWithGooglePopup,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGooogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    createUserDocumentFromAuth(user)

    
  };
  return (
    <div>
      <h1>Sign In Page</h1>

      <button onClick={logGooogleUser}>sign In With Google Popup</button>
    </div>
  );
};

export default SignIn;
