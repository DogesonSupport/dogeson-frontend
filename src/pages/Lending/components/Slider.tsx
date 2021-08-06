import React from 'react';
import './dashboard.css'

const Slider = () => {
    return (
        <div>
     {/* <div className="container-fluid">
        <div className="row"> */}
          <div className="col-sm-12 text-center">
            <div className="inner-content-slider">
              <div className="inner-tile-slider">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" />
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"/>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"/>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100" src="sliderImg/Ad banner.png" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="sliderImg/ad-banner-2.png" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="sliderImg/Ad banner.png" alt="Third slide" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* </div>
      </div> */}
        </div>
    )
}
export default Slider;
