import Navbar from "./components/Header";


function LandingDeafult() {
    return (               
      // **************** Header CONTENT START **************** 
        <>
            {/* // **************** Header CONTENT START ****************  */}
            <Navbar/>
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
                                        <div class="card-body pt-0 py-0">
                                            <div class="text-center">
                                                <div class="avatar avatar-lg mt-n5 mb-3">
											       <a href="#!"><img class="avatar-img rounded border border-white border-3" src="https://social.webestica.com/assets/images/avatar/07.jpg" alt=""/></a>
										        </div>

                                                <h5 class="mb-0 fw-bolder"> Sam Lanson</h5>
                                                <small className="text-muted fw-light">Web Developer at Webestica</small>
                                                <p class="mt-3 text-muted fw-light">I'd love to change the world, but they won’t give me the source code.</p>
                                                    <div class="hstack gap-2 gap-xl-3 justify-content-center">
                                                        <div>
                                                            <h6 class="mb-0 fw-bolder">256</h6>
                                                            <small className="text-muted fw-light">Post</small>
                                                        </div>
                                                        <div class="vr"></div>
                                                        <div>
                                                            <h6 class="mb-0 fw-bolder">2.5K</h6>
                                                            <small className="text-muted fw-light">Followers</small>
                                                        </div>
                                                        <div class="vr"></div>
                                                        <div>
                                                            <h6 class="mb-0 fw-bolder">365</h6>
                                                            <small className="text-muted fw-light">Following</small>
                                                        </div>
                                                    </div>
                                                    <hr></hr>


                                                    <ul class="nav nav-link-secondary  fw-bold gap-2">
                                                        <li class="nav-item">
                                                            <a class="nav-link px-0" href="my-profile.html"><i class="bi bi-house-add me-2 h-20px fa-fw"></i><span>Feed </span></a>
                                                        </li>
                                                    </ul>
                                                    <div class="card-footer text-center py-2">
                                                        <a class="" href="my-profile.html">View Profile </a>
                                                    </div>
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
  