import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
import Button from "../buton/button-component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebases/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          alert("Geçersiz e-posta adresi!");
          break;
        case "auth/user-disabled":
          alert("Kullanıcı devre dışı bırakıldı!");
          break;
        case "auth/user-not-found":
          alert("Kullanıcı bulunamadı!");
          break;
        case "auth/wrong-password":
          alert("Yanlış şifre!");
          break;
        default:
          alert("Bilinmeyen bir hata oluştu!");
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-up-container">
      <h2>Hesabınız Varsa Giriş Yapın</h2>
      <span>Giriş yapmak için e-posta ve şifrenizi giriniz</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="E-posta"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Şifre"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">Giriş Yap</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google İle Gir
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
