

function LandingDeafult() {
    return (               
      // **************** Header CONTENT START **************** 
        <>
            {/* // **************** Header CONTENT START ****************  */}
            <header className="fixed-top navbar-light">
                <nav class="navbar navbar-expand-lg ">
                    <div class="container">
                        {/* <a class="navbar-brand" href="#">Navbar</a> */}
                        {/*
    npm i bootstrap-icons
    
    You can import the bootstrap-icons CSS directly into your React component or index.js:
    In your src/index.js or src/App.js file:

    import 'bootstrap-icons/font/bootstrap-icons.css';*/}
                        <a class="btn btn-primary" href="#" role="button">
                            <i class="bi bi-megaphone-fill"></i>
                        </a>

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>


                        <div class="collapse navbar-collapse ms-2" id="navbarColor03 ">
                            <form class="d-flex position-relative ">
                                <input class="form-control me-2 ps-5 bg-light" type="search" placeholder="Search" aria-label="Search" />
                                {/* <button class="btn btn-outline-primary" type="submit">Search</button> */}
                                <a class="btn  px-2 position-absolute" href="#" role="button">
                                    <i class="bi bi-search"></i>
                                </a>
                            </form>


                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                {/*
                            npm install @popperjs/core@2.11.8
    
                            In your src/index.js or src/App.js, import Bootstrap bundle min js :
                            // index.js or App.js
    
                            import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // This includes Popper.js automatically
     */}
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown link
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="#">Features</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Pricing</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">About</a>
                                </li>
                            </ul>



                        </div>
                        <ul class="nav flex-nowrap align-items-center  list-unstyled">
                            <li class="nav-item ms-2">
                                <a class="btn btn-primary" href="#" role="button">
                                    <i class="bi bi-megaphone-fill"></i>
                                </a>
                            </li>



                        </ul>
                    </div>
                </nav>
            </header>
            {/* // **************** Header CONTENT END ****************  */}
            {/* // **************** MAIN CONTENT START ****************  */}
            <main className="main-1">
                <div class="container">
                     <div class="row ">
                     {/* Sidenav START  */}
                     <div class="col-lg-3  ">
                        <div className="d-block px-2 px-lg-0">
                            <nav class="mx-0">
                                 <div className="card overflow-hidden ">
                                      {/* cover image  */}
                                        <img  src="" class="card-img-top" alt="..."/>
                                        {/* Card body */}
                                        <div class="card-body pt-0">
                                            <div class="text-center">
                                                <div class="avatar avatar-lg mt-n5 mb-3">
											       <a href="#!"><img class="avatar-img rounded border border-white border-3" src="https://social.webestica.com/assets/images/avatar/07.jpg" alt=""/></a>
										        </div>

                                                <h5 class="mb-0"> Sam Lanson</h5>
                                                <small>Web Developer at Webestica</small>
                                                <p class="mt-3">I'd love to change the world, but they won’t give me the source code.</p>
                                                
                                            </div>
                                        </div>
                                </div>
                            </nav>
                        </div>
                     </div>
                     {/* Sidenav END  */}


                     {/* Main content START  */}
                     <div class="col-md-8 col-lg-6 vstack gap-4 ">
                     </div>
                     {/* Main content END  */}


                     {/* Right sidebar START  */}
                     <div class="col-lg-3 ">
                     </div>
                     {/* Right sidebar END  */}
                     </div>
                </div>
            </main>
            
        </>

  
    );
  }
  
  export default LandingDeafult;
  