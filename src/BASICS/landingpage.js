import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const Landing = () => {
    let[client, setClient] = useState([]);
    
    const getClient = () => {
        fetch('Client.json')
        .then(res => res.json())
        .then((data) => {
            setClient(data.clientdetails);
        })
    }

    useEffect(() => {
        getClient();
    }, [])


    return(
        <div>
            <nav className="navbar bg-body-tertiary p-0">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="logoARP.png" className="img-fluid" height={"90px"} width={"90px"}/>
                        ARPITA PANDA
                    </a>
                    <form className="d-flex">
                        <span className="col-lg-12 row">
                            <div className="col-lg-4 row">
                                <div className="col-lg-4">
                                    <i className="fa-solid fa-phone fa-2x me-2 m-3 mt-4 text-success"></i>
                                </div>
                                <div className="col-lg-8">
                                    <h6 id="image" className="text-success">Call Us</h6>
                                    <p>+3456787654</p>
                                </div>
                            </div>
                            <div className="col-lg-4 row">
                                <div className="col-lg-4">
                                    <i className="fa-solid fa-envelope fa-2x me-2 m-3 mt-4 text-success"></i>
                                </div>
                                <div className="col-lg-8">
                                    <h6 id="image" className="text-success">Email Us</h6>
                                    <p>arpita@abc.co</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                    <button className="btn btn-outline-success m-3">Request a Quote</button>
                            </div>
                        </span>
                    </form>        
                </div>
            </nav>
            {/* first navbar */}

            <nav className="navbar navbar-expand-lg sticky-top text-bg-success text-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-light" href="#">Manufacturing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-light" href="#">Sales</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-light" href="#">Rental</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-light" href="#">Career</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-light" href="#">Contact Us</a>
                            </li>
                        </ul>
                        <div className="d-flex" role="search">
                        {/* <!-- Button trigger modal --> */}
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Launch demo modal
                            </button>

                            {/* <!-- Modal --> */}
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    ...
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* second navbar */}

            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="pic1.jpg" className="d-block w-100"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="pic2.jpg" className="d-block w-100"/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="pic4.jpg" className="d-block w-100"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="pic5.jpg" className="d-block w-100"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Fourth slide label</h5>
                            <p>Some representative placeholder content for the fourth slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* carousel */}

            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-6 mt-5">
                        <h6 className="text-success" id="our-company"> Our Company </h6>
                        <h1 id="header-para" className="mb-4"> we are the best moving company in the world </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="row mt-5">
                            <div className="col-lg-6 row">
                                <div className="col-lg-3 me-2">
                                    <i className="fa fa-smile fa-4x text-success mt-2"></i>
                                </div>
                                <div className="col-lg-8">
                                    <h1 className="text-success">100+</h1>
                                    <p>Happy Clients</p>
                                </div>
                            </div>
                            <div className="col-lg-6 row">
                                <div className="col-lg-3 me-2">
                                    <i className="fa fa-trophy fa-4x text-success mt-2"></i>
                                </div>
                                <div className="col-lg-8">
                                    <h1 className="text-success">500+</h1>
                                    <p>Completed Projects   </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-5" id="padding-pic">
                        <div id="pic-overlap">
                            <img id="img" src="pic8.jpg" className="img-fluid" width={"90%"} />
                        </div>
                        <div>
                            <img id="img" src="pic7.jpg" className="img-fluid"  width={"55%"} />
                        </div>
                        <div id="pic-overlap1"></div>
                    </div>
                </div>
                <hr className="my-5 text-success hr"/>
            </div>
            {/* description */}
            
            <div className="container">
                <div className="col-lg-12 row mt-5 mb-5">
                    <h6 className="text-success text-center" id="our-company">Why Choose Us</h6>
                    <h1 className="text-center">We give you complete control<br/> of your process</h1>
                </div>
                <div className="col-lg-12 row">
                    <div className="col-lg-4 row">
                        <div className="col-lg-2">
                            <h2 className="text-success">01</h2>
                        </div>
                        <div className="col-lg-10">
                            <h4 className="text-success">Request Quote</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit , consectetur adipiscing elit , consectetur adipiscing elit </p>
                        </div>
                    </div>
                    <div className="col-lg-4 row">
                        <div className="col-lg-2">
                            <h2 className="text-success">02</h2>
                        </div>
                        <div className="col-lg-10">
                            <h4 className="text-success">Compare price</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur adipiscing elit, consectetur adipiscing elit  </p>
                        </div>
                    </div>
                    <div className="col-lg-4 row">
                        <div className="col-lg-2">
                            <h2 className="text-success">03</h2>
                        </div>
                        <div className="col-lg-10">
                            <h4 className="text-success">Safely Deliver</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur adipiscing elit, consectetur adipiscing elit  </p>
                        </div>
                    </div>
                </div>
                {/* review */}

                <div className="col-lg-12 row mt-5">
                    <div className="col-lg-3 img">
                        <img src="img1.jpg" className="img-fluid"/>
                        <h6 className="text-center mt-4">Alex michael</h6>
                        <p className="text-center mb-4 text-success">President</p>
                    </div>
                    <div className="col-lg-3 img">
                        <img src="img2.jpg" className="img-fluid"/>
                        <h6 className="text-center mt-4">Margreat Adresion</h6>
                        <p className="text-center mb-4 text-success">Vice-President</p>
                    </div>
                    <div className="col-lg-3 img">
                        <img src="img4.jpg" className="img-fluid"/>
                        <h6 className="text-center mt-4">elly Smith</h6>
                        <p className="text-center mb-4 text-success">CEO</p>
                    </div>
                    <div className="col-lg-3 img">
                        <img src="img5.jpg" className="img-fluid"/>
                        <h6 className="text-center mt-4">Klaus Roburt</h6>
                        <p className="text-center mb-4 text-success">Director</p>
                    </div>
                </div>
                {/* person description */}
            </div> 
            {/* middle part */}

            <div className="col-lg-12 row mt-5 mb-5" id="pic-constant">
                <div className="row">
                    <div className="col-lg-9">
                        <h3 className="text-light img1">Need A Consultant? For Your Project Contact Us Today</h3>
                        <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <div className="col-lg-3">
                        <button className="btn btn-success img2">Contact Us</button>
                    </div>
                </div>
            </div>
            {/* pic-constant */}

            <div className="container mt-5 mb-5">
                <div className="col-lg-12">
                    <h6 className="text-success text-center mt-5" id="our-company">Our Services</h6>
                    <h2 className="text-center mb-5">We are a indian based top <br/> Equipment and Engineering company</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 p-5">
                        <img src="image2.jpeg" className="img-fluid mt-5 mb-5" id="figure-pic"/>
                        <i className="fa fa-car fa-2x text-success mb-3"></i>
                        <h3 className="mb-3">Manufacturing</h3>
                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipiscing elit consectetur adipiscing elit consectetur adipiscing elit</p>
                        <a href="#" className="text-success text-decoration-none text-dark">Read More<i className="fa fa-arrow-right ms-2 ml-2"></i></a>
                    </div>
                    <div className="col-lg-4 p-5">
                        <img src="image3.png" className="img-fluid mt-5 mb-5" id="figure-pic"/>
                        <i className="fa fa-train fa-2x text-success mb-3"></i>
                        <h3 className="mb-3">Sales</h3>
                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipiscing elit consectetur adipiscing elit consectetur adipiscing elit</p>
                        <a href="#" className="text-success text-decoration-none text-dark">Read More<i className="fa fa-arrow-right ms-2 ml-2"></i></a>
                    </div>
                    <div className="col-lg-4 p-5">
                        <img src="OIP.jpg" className="img-fluid mt-5 mb-5" id="figure-pic"/>
                        <i className="fa fa-home fa-2x text-success mb-3"></i>
                        <h3 className="mb-3">Rental</h3>
                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipiscing elit consectetur adipiscing elit consectetur adipiscing elit</p>
                        <a href="#" className="text-success text-decoration-none text-dark">Read More<i className="fa fa-arrow-right ms-2 ml-2"></i></a>
                    </div>
                </div>
            </div>
            {/* pic description */}

            <div id="carouselExampleCaptions1" className="carousel slide">
                <div className="carousel-indicator car-pic-side">
                    <button type="button" id="caro-button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" id="caro-button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" id="caro-button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="car1.jpg" className="d-block w-100" id="caro-pic"/>
                        <div className="carousel-caption d-none d-md-block text-light text-center">
                            <h6 className="mt-5">TESTIMONIALS</h6>
                            <h2>What Our Clients Say</h2>
                            <img src="image2.jpeg" className="img-fluid" id="pic-constant1"/><sup id="sup"><i className="fa fa-heart"></i></sup>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit consectetur adipiscing elit consectetur adipiscing elit consectetur adipiscing elit consectetur adipiscing elit </p>
                            <h6>-Jinha Doe</h6>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="car2.jpg" className="d-block w-100" id="caro-pic"/>
                        <div className="carousel-caption d-none d-md-block text-light text-center">
                        <h6 className="mt-5">TESTIMONIALS</h6>
                            <h2>what about us</h2>
                            <img src="image3.png" className="img-fluid" id="pic-constant1"/><sup id="sup"><i className="fa fa-heart"></i></sup>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit consectetur adipiscing elit consectetur adipiscing elit consectetur adipiscing elit consectetur adipiscing elit </p>
                            <h6>-Michael Doe</h6>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="car3.jpg" className="d-block w-100" id="caro-pic"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h6 className="mt-5">TESTIMONIALS</h6>
                            <h2>what Project we did</h2>
                            <img src="OIP.jpg" className="img-fluid" id="pic-constant1"/><sup id="sup"><i className="fa fa-heart"></i></sup>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit consectetur adipiscing elit consectetur adipiscing elit consectetur adipiscing elit consectetur adipiscing elit </p>
                            <h6>-Christine Doe</h6>
                        </div>
                    </div>
                </div>
            </div>
            {/* TESTIMONIALS */}

            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-2">
                        <button type="button" onClick={getClient} className="btn btn-success p-4 ps-4 text-light">Client Logos</button>
                    </div>
                    <div className="col-lg-2">
                        <button type="button" className="btn btn-success p-4 text-light">Company Logos</button>
                    </div>
                    <div className="col-lg-2">
                        <button type="button" className="btn btn-success p-4 text-light">Employee Logos</button>
                    </div>
                    <div className="col-lg-2">
                        <button type="button" className="btn btn-success p-4 text-light">Book Logos</button>
                    </div>
                    <div className="col-lg-2">
                        <button type="button" className="btn btn-success p-4 text-light">Name Logos</button>
                    </div>
                    <div className="col-lg-2">
                        <button type="button" className="btn btn-success p-4 text-light">Bike Logos</button>
                    </div>
                </div>
            </div>
             {/* buttons */}

            <footer className="text-bg-success pt-5 pb-3 mt-5">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-4 mb-5 row">
                            <div className="col-lg-3">
                                <i className="fa fa-headset fa-2x text-bg-warning" id="foot-icon"></i>
                            </div>
                            <div className="col-lg-9">
                                <h6 className="line-height-0">Phone</h6>
                                <p>+91 123 456 7890</p>
                            </div>
                        </div>

                        <div className="col-lg-4 mb-5 row">
                            <div className="col-lg-3">
                                <i className="fa fa-location fa-2x text-bg-warning" id="foot-icon"></i>
                            </div>
                            <div className="col-lg-9">
                                <h6 className="line-height-0">Address</h6>
                                <p>1234 Street Bangalore,<br/> Marathalli Bridge</p>
                            </div>
                        </div>

                        <div className="col-lg-4 mb-5 row">
                            <div className="col-lg-3">
                                <i className="fa fa-envelope fa-2x text-bg-warning" id="foot-icon"></i>
                            </div>
                            <div className="col-lg-9">
                                <h6 className="line-height-0">Email</h6>
                                <p>lVq6V@example.com</p>
                            </div>
                        </div>
                    </div>
                    {/* ROW1 */}
                    
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="row border border-1 border-dark rounded-5 p-2">
                                <div className="col-lg-5">
                                    <img src="logoARP.png" className="img-fluid text-bg-warning rounded-5" height={"100px"} width={"100px"}/>
                                </div>
                                <div className="col-lg-7">
                                    <h5 className="text-dark mt-4">ARPITA PANDA</h5>
                                </div>
                            </div>
                            <h5 className="mt-4 mb-4">NB Equipment & Engineering</h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit consectetur adipiscing elit consectetur adipiscing elit consectetur adipiscing elit consectetur adipiscing elit
                            </p>
                        </div>
                        <div className="col-lg-3 ps-5">
                            <h4>Quick Links</h4>
                            <hr className="mt-3 mb-3 border border-1 border-light w-25"/>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-decoration-none text-light font-size-5">About Us</a></li>
                                <li><a href="#" className="text-decoration-none text-light font-size-5">Sale</a></li>
                                <li><a href="#" className="text-decoration-none text-light font-size-5">Career</a></li>
                                <li><a href="#" className="text-decoration-none text-light font-size-5">Contact Us</a></li>
                                <li><a href="#" className="text-decoration-none text-light font-size-5">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 ps-5">
                            <h4>Products</h4>
                            <hr className="mt-3 mb-3 border border-1 border-light w-25"/>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-decoration-none text-light font-size-5">Vechicles</a></li>
                                <li><a href="#" className="text-decoration-none text-light font-size-5">Electronics</a></li>
                                <li><a href="#" className="text-decoration-none text-light font-size-5">Steel</a></li>
                                <li><a href="#" className="text-decoration-none text-light font-size-5">Chemical</a></li>
                                <li><a href="#" className="text-decoration-none text-light font-size-5">Wire</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 ps-5">
                        <h4>Rentels</h4>
                            <hr className="mt-3 mb-3 border border-1 border-light w-25"/>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-decoration-none text-light font-size-5">House</a></li>
                                <li><a href="#" className="text-decoration-none text-light font-size-5">Pg</a></li>
                                <li><a href="#" className="text-decoration-none text-light font-size-5">Bike</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr className="mt-5"/>
                    <div className="row">
                        <div className="col-lg-6">
                            <p>© 2024 Company, Inc</p>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-end">
                            <p className="me-3">FAQs</p>
                            <p className="me-3">Terms & Conditions</p>
                            <p className="me-3">Privacy Policy</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>    
    )
}

export default Landing; 