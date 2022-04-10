import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/input";

interface PasswordForm {
  password: string;
}

interface EnterForm {
  password: string;
}

const ALDPage: NextPage = () => {
  const { register, handleSubmit } = useForm<PasswordForm>();
  const [verfied, setVerfied] = useState(false);

  const logIn = () => {
    setVerfied(true);
    localStorage.setItem("verified", "1234");
  };

  const onValid = (validForm: EnterForm) => {
    const passwordNumber = +validForm.password.toString();
    passwordNumber === 1234 ? logIn() : alert("Wrong password");
  };
  useEffect(() => {
    const verified = localStorage.getItem("verified");
    if (verified === "1234") {
      setVerfied(true);
    }
  }, []);

  return verfied ? (
    <div>ALD Contents</div>
  ) : (
    <form onSubmit={handleSubmit(onValid)}>
      <Input
        label="Plz log in"
        name="password"
        kind="password"
        register={register("password")}
        type="password"
        required
      />
    </form>
  );
};

export default ALDPage;
