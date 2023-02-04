import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebases/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Giriş Yap</h1>
      <button onClick={logGoogleUser}>Google ile giriş yap</button>
    </div>
  );
};

export default SignIn;
