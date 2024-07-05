import React from "react";
import "./Menu.css";
import { Card, CardBody, CardText, CardTitle } from "react-bootstrap";
import breakImg from "../assets/breakfast.jfif";
import LunchImg from "../assets/lunch.jpg";
import DinnerImg from "../assets/dinner.jpg";
import DessertImg from "../assets/dessert.jpg";

const breakfast = [
  {
    id: 1,
    name: "صبحانه کلاسیک برانچتو",
    description: `شامل: نان تست، دو عدد نیمرو، سوسیس فرانکفورتر، اسنک پنیر گودا و ژامبون، لوبیا، گوجه گیلاسی، زیتون، خیار شور`,
    price: "۱۱۵,۰۰۰ تومان",
  },

  {
    id: 2,
    name: "پنینی مخصوص",
    description: `نان تست پر شده با ژامبون فلفل دلمه ای و ذرت طعم دار که همراه با پنیر پیتزا گریل میشود. با دورچین مخصوص`,
    price: "۱۴۵,۰۰۰ تومان",
  },

  {
    id: 3,
    name: "املت اسپانیایی برانچتو",
    description: `شامل: املت دست پیچ پرشده با سبزیجات تازه و پنیر و ژامبون، ماست زده شده مخصوص با ذرت و موسیر، چیپس، زیتون، گوجه گیلاسی، خیار شور`,
    price: "۱۳۵,۰۰۰ تومان",
  },
];

const lunch = [
  {
    id: 1,
    name: "عدسی",
    description: `عدس، پیاز داغ۴۰۰گرم نان`,
    price: "۱۱۵,۰۰۰ تومان",
  },

  {
    id: 2,
    name: "خوراک لوبیا",
    description: `لوبیا چیتی، رب، پیاز داغ۴۰۰گرم نان`,
    price: "۱۴۵,۰۰۰ تومان",
  },

  {
    id: 3,
    name: "میرزا قاسمی",
    description: `میرزا قاسمی پرسی همراه با نان`,
    price: "۱۳۵,۰۰۰ تومان",
  },
];

const dinner = [
  {
    id: 1,
    name: "چلو جوجه کباب با استخوان (جوجه کامل)",
    description: `جوجه کامل، ۳۶۰ گرم برنج ایرانی، ته چین`,
    price: "۱۱۵,۰۰۰ تومان",
  },

  {
    id: 2,
    name: "کوکو سبزی",
    description: ` تکه، گوجه، پیاز جعفری`,
    price: "۱۴۵,۰۰۰ تومان",
  },

  {
    id: 3,
    name: "کباب برگ",
    description: `شامل کباب همراه پیاز و نان`,
    price: "۱۳۵,۰۰۰ تومان",
  },
];

const dessert = [
  {
    id: 1,
    name: "آفوگاتو",
    description: `یک نوع دسر ایتالیایی با پایه قهوه گفته می‌شود که از یک یا دو اسکوپ بستنی وانیلی یا جلاتو و یک شات قهوه اسپرسوی داغ تشکیل می‌شود.`,
    price: "۱۰۰,۰۰۰ تومان",
  },

  {
    id: 2,
    name: "شیک شکلات",
    description: `در روزهای گرم و تابستانی که فقط یک نوشیدنی یا خوراکی خوشمزه می‌تواند حال مهمانانتا را جا بیاورید.`,
    price: "۱۲۰,۰۰۰ تومان",
  },

  {
    id: 3,
    name: "شیک موز",
    description: ` روزهای گرم و تابستانی که فقط یک نوشیدنی یا خوراکی خوشمزه می‌تواند حال مهمانانتا را جا بیاورید.`,
    price: "۱۳۵,۰۰۰ تومان",
  },
];

function Menu() {
  return (
    <div>
      <div className="menu-page">
        <header className="mt-5">
          <div className="container h-100 d-flex align-items-center justify-content-center">
            <h1 className="text-light ">لیست غذاها</h1>
          </div>
        </header>
        <div className="breakfast">
          <div className="container">
            <h2 className="text-center fs-1 mb-4 mb-lg-5 fw-bold text-success">
              صبحانه
            </h2>
            <div className="row flex-column-reverse flex-lg-row">
              <div className="col-lg-6 d-flex align-items-center">
                <img
                  src={breakImg}
                  alt=""
                  className="img-fluid w-75 mt-4 mt-lg-0 text-center mx-auto"
                />
              </div>
              <div className="col-lg-6 d-flex flex-column justify-content-around">
                {breakfast.map((breakfast) => (
                  <div className="" key={breakfast.id}>
                    <Card className="border-0">
                      <CardBody>
                        <CardTitle className="text-center fs-3">
                          {breakfast.name}
                        </CardTitle>
                        <CardText className="text-center fs-5">
                          {breakfast.description}
                        </CardText>
                        <CardText className="text-center fs-3">
                          {breakfast.price}
                        </CardText>
                      </CardBody>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lunch my-5">
          <div className="container">
            <h2 className="text-center fs-1 mb-4 mb-lg-5 fw-bold text-success">
              ناهار
            </h2>
            <div className="row flex-column-reverse flex-lg-row">
              <div className="col-lg-6 d-flex align-items-center">
                <img
                  src={LunchImg}
                  alt=""
                  className="img-fluid w-75 mt-4 mt-lg-0 text-center mx-auto"
                />
              </div>
              <div className="col-lg-6 d-flex flex-column justify-content-around">
                {lunch.map((lunch) => (
                  <div className="" key={lunch.id}>
                    <Card className="border-0">
                      <CardBody>
                        <CardTitle className="text-center fs-3">
                          {lunch.name}
                        </CardTitle>
                        <CardText className="text-center fs-5">
                          {lunch.description}
                        </CardText>
                        <CardText className="text-center fs-3">
                          {lunch.price}
                        </CardText>
                      </CardBody>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="dinner my-5">
          <div className="container">
            <h2 className="text-center fs-1 mb-4 mb-lg-5 fw-bold text-success">
              شام
            </h2>
            <div className="row flex-column-reverse flex-lg-row">
              <div className="col-lg-6 d-flex align-items-center">
                <img
                  src={DinnerImg}
                  alt=""
                  className="img-fluid w-75 mt-4 mt-lg-0 text-center mx-auto"
                />
              </div>
              <div className="col-lg-6 d-flex flex-column justify-content-around">
                {dinner.map((dinner) => (
                  <div className="" key={dinner.id}>
                    <Card className="border-0">
                      <CardBody>
                        <CardTitle className="text-center fs-3">
                          {dinner.name}
                        </CardTitle>
                        <CardText className="text-center fs-5">
                          {dinner.description}
                        </CardText>
                        <CardText className="text-center fs-3">
                          {dinner.price}
                        </CardText>
                      </CardBody>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="dessert my-5">
          <div className="container">
            <h2 className="text-center fs-1 mb-4 mb-lg-5 fw-bold text-success">
              دسر
            </h2>
            <div className="row flex-column-reverse flex-lg-row">
              <div className="col-lg-6 d-flex align-items-center">
                <img
                  src={DessertImg}
                  alt=""
                  className="img-fluid w-75 mt-4 mt-lg-0 text-center mx-auto"
                />
              </div>
              <div className="col-lg-6 d-flex flex-column justify-content-around">
                {dessert.map((dessert) => (
                  <div className="" key={dessert.id}>
                    <Card className="border-0">
                      <CardBody>
                        <CardTitle className="text-center fs-3">
                          {dessert.name}
                        </CardTitle>
                        <CardText className="text-center fs-5">
                          {dessert.description}
                        </CardText>
                        <CardText className="text-center fs-3">
                          {dessert.price}
                        </CardText>
                      </CardBody>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
