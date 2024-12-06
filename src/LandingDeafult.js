

function LandingDeafult() {
    return (
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
                            <input class="form-control me-2 ps-5 bg-light" type="search" placeholder="Search" aria-label="Search"/>
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
  
    );
  }
  
  export default LandingDeafult;
  