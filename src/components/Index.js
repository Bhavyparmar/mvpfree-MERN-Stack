import React from 'react'
import Footer from './Footer'

const Index = () => {
  return (
    <>
    {/* css link for the index page */}
      <link rel="stylesheet" href="asset/css/index.css" />
    {/* css link for the index page */}



    <section className="home">
      <video className="video-slide active" src="asset/images/video.mp4 " autoPlay muted
        loop></video>
      <video className="video-slide" src="images/video.mp4" autoPlay muted loop></video>
      <video className="video-slide" src="3.mp4" autoPlay muted loop></video>
      <video className="video-slide" src="4.mp4" autoPlay muted loop></video>
      <video className="video-slide" src="5.mp4" autoPlay muted loop></video>
      <div className="content active">
        <h1>Wonderful.<br/><span>Island</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</p>
        <a href="#">Read More</a>
      </div>
      <div className="content">
        <h1>Camping.<br/><span>Enjoy</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</p>
        <a href="#">Read More</a>
      </div>
      <div className="content">
        <h1>Adventures.<br/><span>Off Road</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</p>
        <a href="#">Read More</a>
      </div>
      <div className="content">
        <h1>Road Trip.<br/><span>Together</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</p>
        <a href="#">Read More</a>
      </div>
      <div className="content">
        <h1>Feel Nature.<br/><span>Relax</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</p>
        <a href="#">Read More</a>
      </div>
      <div className="media-icons">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
      </div>
      <div className="slider-navigation">
        <div className="nav-btn active"></div>
        <div className="nav-btn"></div>
        <div className="nav-btn"></div>
        <div className="nav-btn"></div>
        <div className="nav-btn"></div>
      </div>
    </section>
{/* Index page script for the video */}
    {/* <script type="text/javascript">
    //Javacript for responsive navigation menu
    const menuBtn = document.querySelector(".menu-btn");
    const navigation = document.querySelector(".navigation");

    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("active");
      navigation.classList.toggle("active");
    });

    //Javacript for video slider navigation
    const btns = document.querySelectorAll(".nav-btn");
    const slides = document.querySelectorAll(".video-slide");
    const contents = document.querySelectorAll(".content");

    var sliderNav = function(manual){
      btns.forEach((btn) => {
        btn.classList.remove("active");
      });

      slides.forEach((slide) => {
        slide.classList.remove("active");
      });

      contents.forEach((content) => {
        content.classList.remove("active");
      });

      btns[manual].classList.add("active");
      slides[manual].classList.add("active");
      contents[manual].classList.add("active");
    }

    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        sliderNav(i);
      });
    });
    </script> */}
    <div className="container my-3">
      <h1 className="my-lg-5 my-3" style={{fontWeight:" bold", fontSize: "35px",textAlign: "center"}}>
        Need something done?
      </h1>
      <div className="wrapper">
        <div className="card">

          <h2 className="card-title"><span style={{fontSize: "50px", color:"blue"}}
              className="material-symbols-outlined">
              computer
            </span> &nbsp;Post a job</h2>
          <p className="card-content my-4">
            It's free and easy to post a job. Simply fill in a title,
            description and budget and competitive bids come within minutes.
          </p>
        </div>
        <div className="card">
          <h2 className="card-title"><span style={{fontSize: "50px", color:"blue"}}
              className="material-symbols-outlined">
              person
            </span> &nbsp;Choose freelancers</h2>
          <p className="card-content my-4">
            No job is too big or too small. We've got freelancers for jobs of
            any size or budget, across 1800+ skills. No
            job is too complex. We can get it done!
          </p>
        </div>
        <div className="card">
          <h2 className="card-title"><span style={{fontSize: "50px", color:"blue"}}
              className="material-symbols-outlined">
              payments
            </span> &nbsp;Pay safely</h2>
          <p className="card-content my-4">
            Only pay for work when it has been completed and you're 100%
            satisfied with the quality using our milestone
            payment system.
          </p>
        </div>
      </div>
      <hr />

      <h1 className="my-lg-5" style={{fontWeight: "bold", fontSize: "35px",textAlign: "center"}}>
        What's great about it?
      </h1>
      <div className="wrapper">
        <div className="card">
          <h2 className="card-title"><span style={{fontSize: "50px", color:"blue"}}
              className="material-symbols-outlined">
              manage_search
            </span> &nbsp;Browse portfolios</h2>
          <p className="card-content my-4">
            Find professionals you can trust by browsing their samples of
            previous work and reading their profile reviews.
          </p>
        </div>
        <div className="card">
          <h2 className="card-title"><span style={{fontSize: "50px", color:"blue"}}
              className="material-symbols-outlined">
              badge
            </span> &nbsp;Quality work</h2>
          <p className="card-content my-4">
            Receive obligation free quotes from our talented freelancers fast.
            80% of projects get bid on within 60 seconds.
          </p>
        </div>
        <div className="card">
          <h2 className="card-title"><span style={{fontSize: "50px", color:"blue"}}
              className="material-symbols-outlined">
              workspace_premium
            </span> &nbsp;Quality work</h2>
          <p className="card-content my-4">
            Freelancer.com has by far the largest pool of quality freelancers
            globally- over 50 million to choose from.
          </p>
        </div>
      </div>
      <hr />
    </div>
    <div className="container make">
      <h1 className="my-lg-5"  style={{fontWeight: "bold", fontSize: "35px",textAlign: "center"}}>
            
        Make it Real with Freelancer.
      </h1>
      <h1 className="my-lg-5"  style={{fontWeight: "bold", fontSize: "22px",textAlign: "center"}}>
        Get some Inspirations from 1800+ skills
      </h1>
      <div className="row row-cols-1 row-cols-lg-3 row-cols-md-3">
        <div className="col my-3 ima">
          <img src="asset/images/1.jpg" height="190px" className="card-img-top image"
            alt="..."/>
          <center><button type="button" className="btn btn-primary my-3">Click here</button>
          </center>
        </div>
        <div className="col my-3 ima">
          <img src="asset/images/2.jpg" height="190px" className="card-img-top" alt="..."/>
          <center><button type="button" className="btn btn-primary my-3">Click here</button>
          </center>
        </div>
        <div className="col my-3 ima">
          <img src="asset/images/3.jpg" height="190px" className="card-img-top" alt="..."/>
          <center><button type="button" className="btn btn-primary my-3">Click here</button>
          </center>
        </div>
        <div className="col my-3 ima">
          <img src="asset/images/4.jpg" height="190px" className="card-img-top" alt="..."/>
          <center><button type="button" className="btn btn-primary my-3">Click here</button>
          </center>
        </div>

        <div className="col my-3 ima">
          <img src="asset/images/5.jpg" height="190px" className="card-img-top" alt="..."/>
          <center><button type="button" className="btn btn-primary my-3">Click here</button>
          </center>
        </div>
        <div className="col my-3 ima">
          <img src="asset/images/6.jpg" height="190px" className="card-img-top" alt="..."/>
          <center><button type="button" className="btn btn-primary my-3">Click here</button>
          </center>
        </div>

      </div>
    </div>
<Footer/>
    </>
  )
}

export default Index
