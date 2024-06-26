import React, { useEffect, useState } from "react";
import Header from "../Commoan_component/Header";
import Footer from "../Commoan_component/Footer";
import axios from "axios";
  
function Service() {
  useEffect(()=>{
    fetch();
  },[]);

  const [data,setdata] = useState();

  const fetch = async()=>{
    const res = await axios.get(`http://localhost:3000/service`);
    console.log(res.data);
    setdata(res.data)
  }
  return (
    <div>
      <Header />
      <div>
        {/* Page Header Start */}
        <div className="container-fluid page-header py-5 mb-5">
          <div className="container py-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Service
            </h1>
            <nav aria-label="breadcrumb animated slideInDown">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a className="text-white" href="#">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <a className="text-white" href="#">
                    Pages
                  </a>
                </li>
                <li
                  className="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  Service
                </li>
              </ol>
            </nav>
          </div>
        </div>
        {/* Page Header End */}
        {/* Service Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="section-title text-center">
              <h1 className="display-5 mb-5">Our Services</h1>
            </div>
            <div className="row g-4">
              {
                data && data.map((value,index)=>{
                  return(
                    <div key={index}
                className="col-md-6 col-lg-4 wow fadeInUp"
                data-wow-delay="0.1s"
              > 
                <div className="service-item">
                  <div className="overflow-hidden">
                    <img className="img-fluid" src={value.imges} alt />
                  </div>
                  <div className="p-4 text-center border border-5 border-light border-top-0">
                    <h4 className="mb-3">{value.service_name}</h4>
                    <p>
                      {value.desc}
                    </p>
                    <a className="fw-medium" href>
                      Read More
                      <i className="fa fa-arrow-right ms-2" />
                    </a>
                  </div>
                </div>
              </div>
                  )
                })
              }
              
            </div>
          </div>
        </div>
        {/* Service End */}
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

export default Service;
