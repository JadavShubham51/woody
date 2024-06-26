import React from 'react'
import Header from '../Commoan_component/Header';
import Footer from '../Commoan_component/Footer';

function Home() {
  return (
    <div>
        <Header />
      <div>
        {/* Carousel Start */}
        <div className="container-fluid p-0 pb-5">
          <div className="owl-carousel header-carousel position-relative">
            <div className="owl-carousel-item position-relative">
              <img className="img-fluid" src="img/carousel-1.jpg" alt />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                style={{ background: "rgba(53, 53, 53, .7)" }}
              >
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-12 col-lg-8 text-center">
                      <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                        Welcome To WooDY
                      </h5>
                      <h1 className="display-3 text-white animated slideInDown mb-4">
                        Best Carpenter &amp; Craftsman Services
                      </h1>
                      <p className="fs-5 fw-medium text-white mb-4 pb-2">
                        Vero elitr justo clita lorem. Ipsum dolor at sed stet
                        sit diam no. Kasd rebum ipsum et diam justo clita et
                        kasd rebum sea elitr.
                      </p>
                      <a
                        href
                        className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                      >
                        Read More
                      </a>
                      <a
                        href
                        className="btn btn-light py-md-3 px-md-5 animated slideInRight"
                      >
                        Free Quote
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-carousel-item position-relative">
              <img className="img-fluid" src="img/carousel-2.jpg" alt />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                style={{ background: "rgba(53, 53, 53, .7)" }}
              >
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-12 col-lg-8 text-center">
                      <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                        Welcome To WooDY
                      </h5>
                      <h1 className="display-3 text-white animated slideInDown mb-4">
                        Best Carpenter &amp; Craftsman Services
                      </h1>
                      <p className="fs-5 fw-medium text-white mb-4 pb-2">
                        Vero elitr justo clita lorem. Ipsum dolor at sed stet
                        sit diam no. Kasd rebum ipsum et diam justo clita et
                        kasd rebum sea elitr.
                      </p>
                      <a
                        href
                        className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                      >
                        Read More
                      </a>
                      <a
                        href
                        className="btn btn-light py-md-3 px-md-5 animated slideInRight"
                      >
                        Free Quote
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-carousel-item position-relative">
              <img className="img-fluid" src="img/carousel-3.jpg" alt />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                style={{ background: "rgba(53, 53, 53, .7)" }}
              >
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-12 col-lg-8 text-center">
                      <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                        Welcome To WooDY
                      </h5>
                      <h1 className="display-3 text-white animated slideInDown mb-4">
                        Best Carpenter &amp; Craftsman Services
                      </h1>
                      <p className="fs-5 fw-medium text-white mb-4 pb-2">
                        Vero elitr justo clita lorem. Ipsum dolor at sed stet
                        sit diam no. Kasd rebum ipsum et diam justo clita et
                        kasd rebum sea elitr.
                      </p>
                      <a
                        href
                        className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                      >
                        Read More
                      </a>
                      <a
                        href
                        className="btn btn-light py-md-3 px-md-5 animated slideInRight"
                      >
                        Free Quote
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Carousel End */}
        {/* Feature Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5">
              <div
                className="col-md-6 col-lg-3 wow fadeIn"
                data-wow-delay="0.1s"
              >
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div
                    className="d-flex align-items-center justify-content-center bg-light"
                    style={{ width: 60, height: 60 }}
                  >
                    <i className="fa fa-user-check fa-2x text-primary" />
                  </div>
                  <h1 className="display-1 text-light mb-0">01</h1>
                </div>
                <h5>Creative Designers</h5>
              </div>
              <div
                className="col-md-6 col-lg-3 wow fadeIn"
                data-wow-delay="0.3s"
              >
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div
                    className="d-flex align-items-center justify-content-center bg-light"
                    style={{ width: 60, height: 60 }}
                  >
                    <i className="fa fa-check fa-2x text-primary" />
                  </div>
                  <h1 className="display-1 text-light mb-0">02</h1>
                </div>
                <h5>Quality Products</h5>
              </div>
              <div
                className="col-md-6 col-lg-3 wow fadeIn"
                data-wow-delay="0.5s"
              >
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div
                    className="d-flex align-items-center justify-content-center bg-light"
                    style={{ width: 60, height: 60 }}
                  >
                    <i className="fa fa-drafting-compass fa-2x text-primary" />
                  </div>
                  <h1 className="display-1 text-light mb-0">03</h1>
                </div>
                <h5>Free Consultation</h5>
              </div>
              <div
                className="col-md-6 col-lg-3 wow fadeIn"
                data-wow-delay="0.7s"
              >
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div
                    className="d-flex align-items-center justify-content-center bg-light"
                    style={{ width: 60, height: 60 }}
                  >
                    <i className="fa fa-headphones fa-2x text-primary" />
                  </div>
                  <h1 className="display-1 text-light mb-0">04</h1>
                </div>
                <h5>Customer Support</h5>
              </div>
            </div>
          </div>
        </div>
        {/* Feature Start */}
        {/* About Start */}
        <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
          <div className="container about px-lg-0">
            <div className="row g-0 mx-lg-0">
              <div className="col-lg-6 ps-lg-0" style={{ minHeight: 400 }}>
                <div className="position-relative h-100">
                  <img
                    className="position-absolute img-fluid w-100 h-100"
                    src="img/about.jpg"
                    style={{ objectFit: "cover" }}
                    alt
                  />
                </div>
              </div>
              <div
                className="col-lg-6 about-text py-5 wow fadeIn"
                data-wow-delay="0.5s"
              >
                <div className="p-lg-5 pe-lg-0">
                  <div className="section-title text-start">
                    <h1 className="display-5 mb-4">About Us</h1>
                  </div>
                  <p className="mb-4 pb-2">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                    sit, sed stet lorem sit clita duo justo erat amet
                  </p>
                  <div className="row g-4 mb-4 pb-2">
                    <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                      <div className="d-flex align-items-center">
                        <div
                          className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
                          style={{ width: 60, height: 60 }}
                        >
                          <i className="fa fa-users fa-2x text-primary" />
                        </div>
                        <div className="ms-3">
                          <h2
                            className="text-primary mb-1"
                            data-toggle="counter-up"
                          >
                            1234
                          </h2>
                          <p className="fw-medium mb-0">Happy Clients</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                      <div className="d-flex align-items-center">
                        <div
                          className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
                          style={{ width: 60, height: 60 }}
                        >
                          <i className="fa fa-check fa-2x text-primary" />
                        </div>
                        <div className="ms-3">
                          <h2
                            className="text-primary mb-1"
                            data-toggle="counter-up"
                          >
                            1234
                          </h2>
                          <p className="fw-medium mb-0">Projects Done</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href className="btn btn-primary py-3 px-5">
                    Explore More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
        {/* Service Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="section-title text-center">
              <h1 className="display-5 mb-5">Our Services</h1>
            </div>
            <div className="row g-4">
              <div
                className="col-md-6 col-lg-4 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="service-item">
                  <div className="overflow-hidden">
                    <img className="img-fluid" src="img/service-1.jpg" alt />
                  </div>
                  <div className="p-4 text-center border border-5 border-light border-top-0">
                    <h4 className="mb-3">General Carpentry</h4>
                    <p>
                      Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                      lorem diam.
                    </p>
                    <a className="fw-medium" href>
                      Read More
                      <i className="fa fa-arrow-right ms-2" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="service-item">
                  <div className="overflow-hidden">
                    <img className="img-fluid" src="img/service-2.jpg" alt />
                  </div>
                  <div className="p-4 text-center border border-5 border-light border-top-0">
                    <h4 className="mb-3">Furniture Manufacturing</h4>
                    <p>
                      Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                      lorem diam.
                    </p>
                    <a className="fw-medium" href>
                      Read More
                      <i className="fa fa-arrow-right ms-2" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="service-item">
                  <div className="overflow-hidden">
                    <img className="img-fluid" src="img/service-3.jpg" alt />
                  </div>
                  <div className="p-4 text-center border border-5 border-light border-top-0">
                    <h4 className="mb-3">Furniture Remodeling</h4>
                    <p>
                      Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                      lorem diam.
                    </p>
                    <a className="fw-medium" href>
                      Read More
                      <i className="fa fa-arrow-right ms-2" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="service-item">
                  <div className="overflow-hidden">
                    <img className="img-fluid" src="img/service-4.jpg" alt />
                  </div>
                  <div className="p-4 text-center border border-5 border-light border-top-0">
                    <h4 className="mb-3">Wooden Floor</h4>
                    <p>
                      Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                      lorem diam.
                    </p>
                    <a className="fw-medium" href>
                      Read More
                      <i className="fa fa-arrow-right ms-2" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="service-item">
                  <div className="overflow-hidden">
                    <img className="img-fluid" src="img/service-5.jpg" alt />
                  </div>
                  <div className="p-4 text-center border border-5 border-light border-top-0">
                    <h4 className="mb-3">Wooden Furniture</h4>
                    <p>
                      Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                      lorem diam.
                    </p>
                    <a className="fw-medium" href>
                      Read More
                      <i className="fa fa-arrow-right ms-2" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="service-item">
                  <div className="overflow-hidden">
                    <img className="img-fluid" src="img/service-6.jpg" alt />
                  </div>
                  <div className="p-4 text-center border border-5 border-light border-top-0">
                    <h4 className="mb-3">Custom Work</h4>
                    <p>
                      Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                      lorem diam.
                    </p>
                    <a className="fw-medium" href>
                      Read More
                      <i className="fa fa-arrow-right ms-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Service End */}
        {/* Feature Start */}
        <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
          <div className="container feature px-lg-0">
            <div className="row g-0 mx-lg-0">
              <div
                className="col-lg-6 feature-text py-5 wow fadeIn"
                data-wow-delay="0.5s"
              >
                <div className="p-lg-5 ps-lg-0">
                  <div className="section-title text-start">
                    <h1 className="display-5 mb-4">Why Choose Us</h1>
                  </div>
                  <p className="mb-4 pb-2">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                    sit, sed stet lorem sit clita duo justo erat amet
                  </p>
                  <div className="row g-4">
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <div
                          className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
                          style={{ width: 60, height: 60 }}
                        >
                          <i className="fa fa-check fa-2x text-primary" />
                        </div>
                        <div className="ms-4">
                          <p className="mb-2">Quality</p>
                          <h5 className="mb-0">Services</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <div
                          className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
                          style={{ width: 60, height: 60 }}
                        >
                          <i className="fa fa-user-check fa-2x text-primary" />
                        </div>
                        <div className="ms-4">
                          <p className="mb-2">Creative</p>
                          <h5 className="mb-0">Designers</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <div
                          className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
                          style={{ width: 60, height: 60 }}
                        >
                          <i className="fa fa-drafting-compass fa-2x text-primary" />
                        </div>
                        <div className="ms-4">
                          <p className="mb-2">Free</p>
                          <h5 className="mb-0">Consultation</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <div
                          className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
                          style={{ width: 60, height: 60 }}
                        >
                          <i className="fa fa-headphones fa-2x text-primary" />
                        </div>
                        <div className="ms-4">
                          <p className="mb-2">Customer</p>
                          <h5 className="mb-0">Support</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 pe-lg-0" style={{ minHeight: 400 }}>
                <div className="position-relative h-100">
                  <img
                    className="position-absolute img-fluid w-100 h-100"
                    src="img/feature.jpg"
                    style={{ objectFit: "cover" }}
                    alt
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Feature End */}
        {/* Projects Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="section-title text-center">
              <h1 className="display-5 mb-5">Our Projects</h1>
            </div>
            <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
              <div className="col-12 text-center">
                <ul className="list-inline mb-5" id="portfolio-flters">
                  <li className="mx-2 active" data-filter="*">
                    All
                  </li>
                  <li className="mx-2" data-filter=".first">
                    General Carpentry
                  </li>
                  <li className="mx-2" data-filter=".second">
                    Custom Carpentry
                  </li>
                </ul>
              </div>
            </div>
            <div className="row g-4 portfolio-container">
              <div
                className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      src="img/portfolio-1.jpg"
                      alt
                    />
                    <div className="portfolio-overlay">
                      <a
                        className="btn btn-square btn-outline-light mx-1"
                        href="img/portfolio-1.jpg"
                        data-lightbox="portfolio"
                      >
                        <i className="fa fa-eye" />
                      </a>
                      <a className="btn btn-square btn-outline-light mx-1" href>
                        <i className="fa fa-link" />
                      </a>
                    </div>
                  </div>
                  <div className="border border-5 border-light border-top-0 p-4">
                    <p className="text-primary fw-medium mb-2">
                      General Carpentry
                    </p>
                    <h5 className="lh-base mb-0">
                      Wooden Furniture Manufacturing And Remodeling
                    </h5>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      src="img/portfolio-2.jpg"
                      alt
                    />
                    <div className="portfolio-overlay">
                      <a
                        className="btn btn-square btn-outline-light mx-1"
                        href="img/portfolio-2.jpg"
                        data-lightbox="portfolio"
                      >
                        <i className="fa fa-eye" />
                      </a>
                      <a className="btn btn-square btn-outline-light mx-1" href>
                        <i className="fa fa-link" />
                      </a>
                    </div>
                  </div>
                  <div className="border border-5 border-light border-top-0 p-4">
                    <p className="text-primary fw-medium mb-2">
                      Custom Carpentry
                    </p>
                    <h5 className="lh-base mb-0">
                      Wooden Furniture Manufacturing And Remodeling
                    </h5>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      src="img/portfolio-3.jpg"
                      alt
                    />
                    <div className="portfolio-overlay">
                      <a
                        className="btn btn-square btn-outline-light mx-1"
                        href="img/portfolio-3.jpg"
                        data-lightbox="portfolio"
                      >
                        <i className="fa fa-eye" />
                      </a>
                      <a className="btn btn-square btn-outline-light mx-1" href>
                        <i className="fa fa-link" />
                      </a>
                    </div>
                  </div>
                  <div className="border border-5 border-light border-top-0 p-4">
                    <p className="text-primary fw-medium mb-2">
                      General Carpentry
                    </p>
                    <h5 className="lh-base mb-0">
                      Wooden Furniture Manufacturing And Remodeling
                    </h5>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      src="img/portfolio-4.jpg"
                      alt
                    />
                    <div className="portfolio-overlay">
                      <a
                        className="btn btn-square btn-outline-light mx-1"
                        href="img/portfolio-4.jpg"
                        data-lightbox="portfolio"
                      >
                        <i className="fa fa-eye" />
                      </a>
                      <a className="btn btn-square btn-outline-light mx-1" href>
                        <i className="fa fa-link" />
                      </a>
                    </div>
                  </div>
                  <div className="border border-5 border-light border-top-0 p-4">
                    <p className="text-primary fw-medium mb-2">
                      Custom Carpentry
                    </p>
                    <h5 className="lh-base mb-0">
                      Wooden Furniture Manufacturing And Remodeling
                    </h5>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      src="img/portfolio-5.jpg"
                      alt
                    />
                    <div className="portfolio-overlay">
                      <a
                        className="btn btn-square btn-outline-light mx-1"
                        href="img/portfolio-5.jpg"
                        data-lightbox="portfolio"
                      >
                        <i className="fa fa-eye" />
                      </a>
                      <a className="btn btn-square btn-outline-light mx-1" href>
                        <i className="fa fa-link" />
                      </a>
                    </div>
                  </div>
                  <div className="border border-5 border-light border-top-0 p-4">
                    <p className="text-primary fw-medium mb-2">
                      General Carpentry
                    </p>
                    <h5 className="lh-base mb-0">
                      Wooden Furniture Manufacturing And Remodeling
                    </h5>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      src="img/portfolio-6.jpg"
                      alt
                    />
                    <div className="portfolio-overlay">
                      <a
                        className="btn btn-square btn-outline-light mx-1"
                        href="img/portfolio-6.jpg"
                        data-lightbox="portfolio"
                      >
                        <i className="fa fa-eye" />
                      </a>
                      <a className="btn btn-square btn-outline-light mx-1" href>
                        <i className="fa fa-link" />
                      </a>
                    </div>
                  </div>
                  <div className="border border-5 border-light border-top-0 p-4">
                    <p className="text-primary fw-medium mb-2">
                      Custom Carpentry
                    </p>
                    <h5 className="lh-base mb-0">
                      Wooden Furniture Manufacturing And Remodeling
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Projects End */}
        {/* Quote Start */}
        <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
          <div className="container quote px-lg-0">
            <div className="row g-0 mx-lg-0">
              <div className="col-lg-6 ps-lg-0" style={{ minHeight: 400 }}>
                <div className="position-relative h-100">
                  <img
                    className="position-absolute img-fluid w-100 h-100"
                    src="img/quote.jpg"
                    style={{ objectFit: "cover" }}
                    alt
                  />
                </div>
              </div>
              <div
                className="col-lg-6 quote-text py-5 wow fadeIn"
                data-wow-delay="0.5s"
              >
                <div className="p-lg-5 pe-lg-0">
                  <div className="section-title text-start">
                    <h1 className="display-5 mb-4">Free Quote</h1>
                  </div>
                  <p className="mb-4 pb-2">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                    sit, sed stet lorem sit clita duo justo erat amet
                  </p>
                  <form>
                    <div className="row g-3">
                      <div className="col-12 col-sm-6">
                        <input
                          type="text"
                          className="form-control border-0"
                          placeholder="Your Name"
                          style={{ height: 55 }}
                        />
                      </div>
                      <div className="col-12 col-sm-6">
                        <input
                          type="email"
                          className="form-control border-0"
                          placeholder="Your Email"
                          style={{ height: 55 }}
                        />
                      </div>
                      <div className="col-12 col-sm-6">
                        <input
                          type="text"
                          className="form-control border-0"
                          placeholder="Your Mobile"
                          style={{ height: 55 }}
                        />
                      </div>
                      <div className="col-12 col-sm-6">
                        <select
                          className="form-select border-0"
                          style={{ height: 55 }}
                        >
                          <option selected>Select A Service</option>
                          <option value={1}>Service 1</option>
                          <option value={2}>Service 2</option>
                          <option value={3}>Service 3</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <textarea
                          className="form-control border-0"
                          placeholder="Special Note"
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-12">
                        <button
                          className="btn btn-primary w-100 py-3"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Quote End */}
        {/* Team Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="section-title text-center">
              <h1 className="display-5 mb-5">Team Members</h1>
            </div>
            <div className="row g-4">
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="team-item">
                  <div className="overflow-hidden position-relative">
                    <img className="img-fluid" src="img/team-1.jpg" alt />
                    <div className="team-social">
                      <a className="btn btn-square" href>
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn btn-square" href>
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="btn btn-square" href>
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                  <div className="text-center border border-5 border-light border-top-0 p-4">
                    <h5 className="mb-0">Full Name</h5>
                    <small>Designation</small>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="team-item">
                  <div className="overflow-hidden position-relative">
                    <img className="img-fluid" src="img/team-2.jpg" alt />
                    <div className="team-social">
                      <a className="btn btn-square" href>
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn btn-square" href>
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="btn btn-square" href>
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                  <div className="text-center border border-5 border-light border-top-0 p-4">
                    <h5 className="mb-0">Full Name</h5>
                    <small>Designation</small>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="team-item">
                  <div className="overflow-hidden position-relative">
                    <img className="img-fluid" src="img/team-3.jpg" alt />
                    <div className="team-social">
                      <a className="btn btn-square" href>
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn btn-square" href>
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="btn btn-square" href>
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                  <div className="text-center border border-5 border-light border-top-0 p-4">
                    <h5 className="mb-0">Full Name</h5>
                    <small>Designation</small>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <div className="team-item">
                  <div className="overflow-hidden position-relative">
                    <img className="img-fluid" src="img/team-4.jpg" alt />
                    <div className="team-social">
                      <a className="btn btn-square" href>
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn btn-square" href>
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="btn btn-square" href>
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                  <div className="text-center border border-5 border-light border-top-0 p-4">
                    <h5 className="mb-0">Full Name</h5>
                    <small>Designation</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team End */}
        {/* Testimonial Start */}
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container">
            <div className="section-title text-center">
              <h1 className="display-5 mb-5">Testimonial</h1>
            </div>
            <div className="owl-carousel testimonial-carousel">
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid bg-light p-2 mx-auto mb-3"
                  src="img/testimonial-1.jpg"
                  style={{ width: 90, height: 90 }}
                />
                <div className="testimonial-text text-center p-4">
                  <p>
                    Clita clita tempor justo dolor ipsum amet kasd amet duo
                    justo duo duo labore sed sed. Magna ut diam sit et amet stet
                    eos sed clita erat magna elitr erat sit sit erat at rebum
                    justo sea clita.
                  </p>
                  <h5 className="mb-1">Client Name</h5>
                  <span className="fst-italic">Profession</span>
                </div>
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid bg-light p-2 mx-auto mb-3"
                  src="img/testimonial-2.jpg"
                  style={{ width: 90, height: 90 }}
                />
                <div className="testimonial-text text-center p-4">
                  <p>
                    Clita clita tempor justo dolor ipsum amet kasd amet duo
                    justo duo duo labore sed sed. Magna ut diam sit et amet stet
                    eos sed clita erat magna elitr erat sit sit erat at rebum
                    justo sea clita.
                  </p>
                  <h5 className="mb-1">Client Name</h5>
                  <span className="fst-italic">Profession</span>
                </div>
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid bg-light p-2 mx-auto mb-3"
                  src="img/testimonial-3.jpg"
                  style={{ width: 90, height: 90 }}
                />
                <div className="testimonial-text text-center p-4">
                  <p>
                    Clita clita tempor justo dolor ipsum amet kasd amet duo
                    justo duo duo labore sed sed. Magna ut diam sit et amet stet
                    eos sed clita erat magna elitr erat sit sit erat at rebum
                    justo sea clita.
                  </p>
                  <h5 className="mb-1">Client Name</h5>
                  <span className="fst-italic">Profession</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial End */}
      </div>
      <Footer />
    </div>
  );
}

export default Home
