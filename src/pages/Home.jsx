import React from "react";
import MenuBtn from "../Components/MenuBtn";
import "./Home.css";
import AboutImg from "../assets/about-img.jpg";
import { Link } from "react-router-dom";
import { ImageGallery } from "../Components/ImageGallery";
import { ContactInfo } from "../Components/ContactInfo";
import ContactImg from "../assets/contact-img3.jpg";

function Home() {
  return (
    <div className="home-page">
      <header className="h-100 min-vh-100 shadow d-flex align-items-center text-light">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 d-flex d-sm-block flex-column align-items-center">
              <h2 className="mb-0 fw-bold text-white">خوش آمدید به</h2>
              <h1 className="mb-5 text-white  fw-bold text-center text-sm-start">
                رستوران
              </h1>
              <MenuBtn />
            </div>
          </div>
        </div>
      </header>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center d-none d-lg-flex">
            <img src={AboutImg} alt="about img" className="img-fluid my-5" />
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center text-center mb-5 my-5">
            <h2 className="fs-1 mb-5 fw-bold">درباره ما</h2>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
            </p>
            <p className="mb-5">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
            </p>
            <Link to="/about">
              <button className="btn btn-outline-success btn-lg" type="button">
                بیشتر
              </button>
            </Link>
          </div>
        </div>
        <div className="menu-section py-5 text-light shadow">
          <div className="container d-flex flex-column align-items-center menu-div">
            <h2 className="fs-1 mb-5 fw-bold bg-secondary p-2 rounded">
              دلپسندترین ها
            </h2>
            <div className="row mb-5 w-100">
              <div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
                <h1 className="fs-2 mb-5 bg-secondary p-2 rounded ">غذا</h1>
                <ul className="px-0">
                  <li className="d-flex justify-content-between">
                    <p className="fs-3 mx-2 text-white fw-bold ">170000تومان</p>
                    <p className="fs-3 mx-2 ">کباب</p>
                  </li>

                  <li className="d-flex justify-content-between">
                    <p className="fs-3 mx-2 text-white fw-bold ">130000تومان</p>
                    <p className="fs-3 mx-2 ">جوجه کباب</p>
                  </li>

                  <li className="d-flex justify-content-between">
                    <p className="fs-3 mx-2 text-white fw-bold ">150000تومان</p>
                    <p className="fs-3 mx-2 ">پلومرغ</p>
                  </li>
                </ul>
              </div>

              <div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
                <h1 className="fs-2 mb-5 bg-secondary p-2 rounded">نوشیدنی</h1>
                <ul className="px-0">
                  <li className="d-flex justify-content-between">
                    <p className="fs-3 mx-2 text-white fw-bold ">20000تومان</p>
                    <p className="fs-3 mx-2 ">نوشابه</p>
                  </li>

                  <li className="d-flex justify-content-between">
                    <p className="fs-3 mx-2 text-white fw-bold ">18000تومان</p>
                    <p className="fs-3 mx-2 ">دوغ</p>
                  </li>

                  <li className="d-flex justify-content-between">
                    <p className="fs-3 mx-2 text-white fw-bold ">30000تومان</p>
                    <p className="fs-3 mx-2 ">دلستر</p>
                  </li>
                </ul>
              </div>
            </div>

            <MenuBtn />
          </div>
        </div>
      </div>
      <ImageGallery />
      <div className="bg-dark text-light py-5 shadow">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0">
              <ContactInfo />
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <img
                src={ContactImg}
                alt=""
                className="contact-img img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
