import "../header/Header.css";
import { List, XCircleFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export function Headeroption(props: any) {
  return (
    <li className={props.footerli}>
      <Link className={props.foota} to={props.to} target={props.footertarget}>
        {props.footaname}
        <span>{props.Headeroption}</span>
      </Link>
    </li>
  );
}

export function Header() {
  return (
    <div className="header fixed-top " style={{ height: "75px" }}>
      <nav className="navbar navbar-expand-md col-md-10 col  mx-auto  p-0">
        <div className="col  d-flex align-items-center justify-content-between  px-0">
          <Link className="head-logo" to="/">
            <img
              src={require("../../../asset/sample1/logo.png")}
              alt="paype logo"
              className="logo-circle"
            />
          </Link>
          <Link
            className="navbar-toggler border-0 mt-3"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offc6anvasExample"
            to={""}
          >
            <i className="fs-1 text-dark mx-4">
              <List />
            </i>
          </Link>
          <div
            className="offcanvas offcanvas-start-md "
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div
              className="offcanvas-header d-flex d-md-none "
              style={{ borderBottom: "1px solid black" }}
            >
              <Link className="head-logo" to="/">
                <img
                  src={require("../../../asset/sample1/logo.png")}
                  alt="paype logo"
                  className="logo-circle"
                />
              </Link>
              <Link
                to="javascript:void(0) "
                className="text-reset p-0 mb-3"
                data-bs-dismiss="offcanvas"
                aria-label="close"
              >
                <i className="fs-1">
                  <XCircleFill />
                </i>
              </Link>
            </div>
            <div className="offcanvas-body p-lg-0 ">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link" to={"/about"}>
                    About us
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to={"#"}
                    data-bs-toggle="dropdown"
                  >
                    Services
                  </Link>

                  <ul className="dropdown-menu ">
                    <Headeroption
                      foota={"dropdown-item"}
                      to={"/banking"}
                      footaname={"Banking Services"}
                    />
                    <Headeroption
                      foota={"dropdown-item"}
                      to={"/payment"}
                      footaname={"Payment Services"}
                    />
                    <Headeroption
                      foota={"dropdown-item"}
                      to={"/tours"}
                      footaname={"Tours & Travel Services"}
                    />
                    <Headeroption
                      foota={"dropdown-item"}
                      to={"/bada"}
                      footaname={"Bada Bazar"}
                    />
                    <Headeroption
                      foota={"dropdown-item"}
                      to={"/suraksha"}
                      footaname={"Suraksha"}
                    />
                    <Headeroption
                      foota={"dropdown-item"}
                      to={"/loan"}
                      footaname={"Loan Services"}
                    />
                    <Headeroption
                      foota={"dropdown-item"}
                      to={"/devices"}
                      footaname={"Devices & Other Services"}
                    />
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link" to={"/contactus"}>
                    Contact Us
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to={"/login"}>
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
