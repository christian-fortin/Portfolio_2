import React from 'react'

const MoreProjects = () => {
  return (
 
    <div className="projects_container">
    <h1 className="projects-header"> <a   className="projects-header" href="https://github.com/christian-fortin?tab=repositories" target="_blank" rel="noopener noreferrer">Projects</a></h1>
    <div className="projectList">

      <div className="project-div">
      <a
              href="https://christian-fortin.github.io/WeIrDcAsE/"
              target="_blank"
              rel="noopener noreferrer"
              alt="link to website"
              className="creativity-link-weirdcase"
            >
           
          <h4 className="project-title">Weird Case</h4>
        </a>
        <p className="project_p">
          <span className="project-title-in-p"> "Weird Case" </span> was a fun side project I made. I was tired of taking so long to type out letters in capital/lowercase... style so I made an application for my self to quickly do it. The application makes every other letter capital. 
        </p>
        <div>
          <img
          className="project-img-container-weirdCase"
            src="https://github.com/christian-fortin/WeIrDcAsE/blob/main/ezgif.com-gif-maker%20(2).gif?raw=true"
            alt="weirdCase"
          />
        </div>
      </div>



      <div className="project-div">
        <a
          href="https://main.d39ag7lm8rdw70.amplifyapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          alt="link to website"
        >
          <h4 className="project-title">Tattoo Blog</h4>
        </a>
        <p className="project_p">

          <span className="project-title-in-p"> "Tattoo Blog" </span> is
          a personal website and storage place for some thoughts and ideas. It is mainly a practice in website design as well as I wanted to learn more about AWS and how to deploy a simple project using AWS. For this one I used AWS Amplify. I previously used S3 but found Amplify to be easier. 
          
        </p>
        <div className="project-img-container">
          <img
            className="project-img"
            id='project-img-tattoo'
            src="https://github.com/christian-fortin/Tattoo-Ideas/blob/main/images/chess%20abstract.png?raw=true"
            alt="tattoo example"
          />
        </div>
      </div>


      <div className="project-div">
        <a
          href="https://pern-chaos.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          alt="link to website"
        >
          <h4 className="project-title">Chaos</h4>
        </a>
        <p className="project_p">

          <span className="project-title-in-p"> "Chaos" </span> is a type of social media application where anyone can say anything. I put out QR code stickers of the project in the city in random places and was curious what would make it onto the website. It purposely has no sessions because when enough people are using it it would be chaos for everyone to edit and delete and create any post.
          <br/>
          <br/>

          From a technical view point this project was used to freshen and enhance my understanding of back end API's as I did most of it from memory/gut-feeling/google instead of following along with a video. I also wanted to learn more about using PSQL as a backend database instead of MongoDB.
          
        </p>
        <div className="project-img-container">
          <img
            className="project-img"
            id='project-img-chaos'
            src="/images/pern_chaos.gif"
            alt="chaos_picture"
          />
        </div>
      </div>
      <div className="project-div">
        <a
          href="  https://christian-fortin.github.io/SEI9-28_Project_1/Game/Start_Page.html"
          target="_blank"
          rel="noopener noreferrer"
          alt="link to website"
        >
          <h4 className="project-title">PressTime</h4>
        </a>
        <p className="project_p">
          <span className="project-title-in-p"> "PressTime" </span> is a fun
          interactive game that tests your skills with your computer's
          mouse. The objective of the game is to press the number's as they
          appear in the same order as displayed at the top of the screen. To
          beat the game, you must make it past all three levels. As the
          developer, I have not passed level 3.
          <br/>
          <br/>

          <span className='indent'>This project was meant to test my JavaScript, HTML, and CSS skills.</span>
        </p>
        <div className="project-img-container">
          <img
            src="https://user-images.githubusercontent.com/83780176/155367266-b4948399-d7aa-4961-9e3c-2d3082ac7dfb.gif"
            alt="pressTime"
          />
        </div>
      </div>

      <div className="project-div">
        <a href='https://my-food-blog-410.herokuapp.com/sessions/register' target="_blank" rel="noopener noreferrer">
        <h4 className="project-title" >MyFoodBlog</h4>
        {/* <h2>! Under Construction !</h2> */}
        </a>
        <p className="project_p">
          MyFoodBlog is a personal application for a user to track homemade
          dishes they create. They can keep track of the recipe,
          ingredients, a name, and even have an image for plating ideas.
          <br/>
          <br/>

          <span className='indent'>This project was meant to test my JavaScript, HTML, CSS, as well as designing an API with RESTful routes and a back-end using MongoDB, and express. In extension to the project requirements I learned how to apply user authentication using Bcrypt and how to upload an image using Multer  skills.</span>
        </p>
        <div className="project-img-container">
          <img className="project-img" src="https://github.com/christian-fortin/SEIR_Project_2/raw/main/public/images/Screen%20Shot%202022-04-14%20at%2010.54.50%20AM.png?raw=true" alt="foodblog" />
        </div>
      </div>

      <div className="project-div">
        <a
          href="https://lo-five-frontend.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          alt="link to website"
        >
          <h4 className="project-title">LoFive</h4>
        </a>
        <p className="project_p">
          <span className="project-title-in-p"> "LoFive" </span> is a social
          media application for users to share and post about music
          interests, songs, albums, artists, and more.
          <br/>
          <br/>

          <span className='indent'>This project was meant to test my JavaScript React, HTML, CSS, as well as designing an API with RESTful routes and a back-end. For this group project my group chose to use MongoDB and Express, a full MERN stack. In extension to the project requirements we created user authentication, and multiple external API's.</span>
        </p>
        <div className="project-img-container">
         <img className="project-img" id='project-img-lofive' src="images/loFiveImg.png" alt="LoFive img"/>
        </div>
      </div>

      <div className="project-div">
        <a
          href="https://immense-falls-65855.herokuapp.com/login"
          target="_blank"
          rel="noopener noreferrer"
          alt="link to website"
        >
          <h4 className="project-title">WhatIsThis?</h4>
        </a>
        <p className="project_p">

          <span className="project-title-in-p"> "WhatIsThis?" </span> is
          meant for randomness, entertainment and sharing. It is inspired by
          the website "stumbleUpon" which let you click a button and you
          were taken to a random website. I wanted to recreate that, however
          with a more social media feel and where users can create their
          own.
          <br/>
          <br/>

          <span className='indent'>This project was meant to test my JavaScript, HTML, CSS, as well as designing an API with RESTful routes and a back-end using MongoDB, and Express. In extension to the project requirements I learned more about how to apply user authentication using Bcrypt, improved my clean code skills and my JavaScript logic while building something I thought interesting. </span>
        </p>
        <div className="project-img-container">
          <img
            className="project-img"
            src="https://github.com/christian-fortin/Project_4/raw/main/public/Screen%20Shot%202022-04-06%20at%2010.14.27%20AM.png?raw=true"
            alt="whatIsThis"
          />
        </div>
      </div>


      <div className="gif-holder">
        <a href="https://farm.one/" target="_blank" rel="noopener noreferrer">
          <img
            src="images/plantGrowing.gif"
            alt="plant gif"
            className="plantGif-aboutMe"
          />
        </a>
      </div>
    </div>






  </div>
  )
}

export default MoreProjects