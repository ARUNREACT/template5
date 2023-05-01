import { Link } from "react-router-dom";
import { Input, Button } from "../../component/Layout";
import { Header } from "./header/Header";

export function Login() {
  return (
    <div className="login">
      <Header />

      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="signup-body "></div>
        <div className="oo col-lg-9  col-11"></div>
        <form className="form-body col-lg-9  col-11 ">
          <div className="d-flex align-items-center justify-content-center flex-wrap">
            <div className="form-img col-12 col-md-6 d-flex justify-content-center">
              <img
                className="img-fluid"
                src={require("../../asset/sample1/l1.png")}
              ></img>
            </div>

            <div className="form-content col-12 col-md-6 p-3">
              <h2 className="mb-3 text-black">𝐋𝐎𝐆𝐈𝐍</h2>

              <Input
                icon={"icon fa fa-user"}
                placeholder={"Name"}
                type={"name"}
                bar={"bar"}
              />
              <Input
                icon={"fa fa-mobile"}
                placeholder={"mobile"}
                type={"number"}
                bar={"bar"}
              />
              <Button btnvalue={"Submit"} />

              <p className="mt-4 text-white">I am already a member</p>
              <Link className="text-decoration-none text-white fs-5 " to="#">
                Sign up
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
