import { BaseSyntheticEvent, useCallback, useState } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faEye } from "@fortawesome/free-solid-svg-icons";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    backgroundColor: 'red',
    color: (props: { color: string}) => props.color,
  },
});

const Login = () => {
  const [loginUser, setLoginUser] = useState<{
    email: string;
    password: string;
  }>({ email: "andrei@gmail.com", password: "123456" });
  const styles = useStyles({ color: '#ff0000' });

  const changeLoginInfo = useCallback(
    (e: BaseSyntheticEvent) => {
      setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
    },
    [loginUser]
  );

  const [xsrfToken] = useCookies(["XSRF-TOKEN"]);
  const router = useRouter();

  const register = async () => {
    const data = await fetch("api/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "CSRF-Token": xsrfToken["XSRF-Token"],
      },
      body: JSON.stringify(loginUser),
    });

    return await data.json();
  };

    const onSubmit = async (e: BaseSyntheticEvent) => {
        e.preventDefault();

        const user = await register();
        if (user) {
            await router.push('/profile');
        }
    }

  return (
    <div className="Login">
      <div className="header-form">
        <div className="login-form-header">
          <div className="logo">
            <Link href="/">
              <a>viaRent</a>
            </Link>
          </div>
          <div className="back-home-btn">
            {/* eslint-disable-next-line @next/next/link-passhref */}
            <Link href="/">
              <button>Go Back Home</button>
            </Link>
          </div>
        </div>
        <form className="login-form" onSubmit={onSubmit}>
          <div className="input-field">
            <div className="email">
              <label className="form__label">Email</label>
              <div className="icon-emailInput">
                <div className="email-icon">
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    color="#bdbdbd"
                    size="lg"
                  />
                </div>
                <input
                  type={"string"}
                  className="form__field"
                  placeholder={"Enter your Email"}
                  required
                  onChange={changeLoginInfo}
                  value={loginUser.email}
                  name={"email"}
                  id="email"
                />
              </div>
            </div>
            <div className="password">
              <label className="form__label">Password</label>
              <div className="icon-passInput">
                <div className="pass-icon">
                  <FontAwesomeIcon icon={faEye} color="#bdbdbd" size="lg" />
                </div>
                <input
                  type={"password"}
                  className="form__field"
                  onChange={changeLoginInfo}
                  value={loginUser.password}
                  name={"password"}
                  id="password"
                  placeholder={"Enter your Password"}
                  required
                />
              </div>
            </div>
          </div>
          <div className="login-register-btns">
            <div className="register-forgotPass">
              {/* eslint-disable-next-line @next/next/link-passhref */}
              <Link href="/register">
                <button>Register</button>
              </Link>
              <button>Forgot Password?</button>
            </div>
            <button id="login-btn" type={"submit"}>
              Login
            </button>
          </div>
          <div className="login-with">
            <p>Login With</p>
            <div className="social-media">
              <span>Google</span>
              <span>Facebook</span>
            </div>
          </div>
        </form>
      </div>
      <div className="login-img">
        <Image
          src="/DSC_2778.jpg"
          alt="Landlord Image"
          className="ld-img"
          objectFit="cover"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default Login;
