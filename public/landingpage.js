const Landing = () => {
    return(
        <div>
            <nav class="navbar bg-body-tertiary me-auto mb-2 mb-lg-0">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        Arpita Panda
                    </a>
                    <form class="d-flex">
                        <span>
                            <i className="fa-solid fa-phone me-2 m-3 text-success"></i>3456787654
                            <i className="fa-solid fa-phone me-2 m-3 text-success"></i>3456787654
                            <button className="btn btn-outline-success m-3">Request a Quote</button>
                        </span>
                    </form>        
                </div>
            </nav>
            {/* first navbar */}

            <nav class="navbar navbar-expand-lg sticky-top text-bg-success text-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active text-light" href="#">Manufacturing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active text-light" href="#">Sales</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active text-light" href="#">Rental</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active text-light" href="#">Career</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active text-light" href="#">Contact Us</a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2 text-bg-success border-0" type="search" aria-label="Search"/>
                            <button class="btn btn-success" type="submit"><i className="fa fa-search"></i></button>
                        </form>
                    </div>
                </div>
            </nav>
            {/* second navbar */}

            <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="pic1.jpg" class="d-block w-100"/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="pic2.jpg" class="d-block w-100"/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="pic4.jpg" class="d-block w-100"/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="pic5.jpg" class="d-block w-100"/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Fourth slide label</h5>
                            <p>Some representative placeholder content for the fourth slide.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            {/* carousel */}

            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-6">
                        <h6 className="text-success" id="our-company"> Our Company </h6>
                        <h1 id="header-para" className="mb-4"> we are the best moving company in the world </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className="col-lg-6">
                        
                    </div>
                </div>
            </div>

            
        </div>    
    )
}

export default Landing;