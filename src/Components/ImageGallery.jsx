import React from "react";
import './ImageGallery.css'
import Gallery1 from '../assets/gallery1.jpg'
import Gallery2 from '../assets/gallery2.jpg'
import Gallery3 from '../assets/gallery3.jpg'
import Gallery4 from '../assets/gallery4.jpg'
import Gallery5 from '../assets/gallery5.jpg'
import Gallery6 from '../assets/gallery6.jpg'


export function ImageGallery() {
    return(
        <div className="container py-5">
            <h2 className="text-center fs-1 mb-5 fw-bold">گالری تصاویر</h2>
            <div className="row gallery">
                <div className="col-md-4 px-2 text-center ">
                    <div className="my-3">
                        <img src={Gallery1} alt="" className="img-fluid rounded" />
                    </div>
                    <div className="my-3">
                        <img src={Gallery2} alt="" className="img-fluid rounded" />
                    </div>
                </div>

                <div className="col-md-4 px-2 text-center">
                    <div className="my-3">
                        <img src={Gallery3} alt="" className="img-fluid rounded" />
                    </div>
                    <div className="my-3">
                        <img src={Gallery4} alt="" className="img-fluid rounded" />
                    </div>
                </div>

                <div className="col-md-4 px-2 text-center">
                    <div className="my-3">
                        <img src={Gallery5} alt="" className="img-fluid rounded" />
                    </div>
                    <div className="my-3">
                        <img src={Gallery6} alt="" className="img-fluid rounded" />
                    </div>
                </div>
            </div>
        </div>
    );
}