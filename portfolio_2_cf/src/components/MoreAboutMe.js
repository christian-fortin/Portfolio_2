import React from 'react';

const MoreAboutMe = () => {
  return (
    <div className="aboutMePageContainer">
      <div className="aboutMeTitleDiv">
        <h1 className="aboutMeTitle">Get to Know Me</h1>
        <div className="brandStatment-aboutMe">
          <h3>
            I have completed a B.S. in Biology, training my scientific mind
            while using my work ethic and outside-the-box analytical thinking to
            solve problems. I have supplemented my Bachelor’s degree with a
            software engineering training certificate. My scientific mind
            injects intellectual curiosity and{' '}
            <a
              href="https://christian-fortin.github.io/WeIrDcAsE/"
              target="_blank"
              rel="noopener noreferrer"
              alt="link to website"
              className="creativity-link-weirdcase"
            >
              creativity
            </a>{' '}
            into software engineering. I have strong communication,
            collaboration and multi-tasking skills. I am looking for an entry
            level job to combine the two skill sets I have built over the years.
          </h3>
        </div>
      </div>

      <div className="columContainerAboutMe">
        
      <section class="carousel" aria-label="carousel" Tabindex="0">


  <a class="carousel__skip-link" href="#skip-link">Skip the Carousel</a>



  <div class="slides">
    <div class="slides-item slide-1" id="slide-1" aria-label="slide 1 of 5" tabindex="0">
    <div id='inner_div_slide_1'>
    <img src="images/xboxController.png" alt="xboxController" className="card2col3ImageCover-xbox"/>
              <h1 className="aboutMe_h1_title">Video Games</h1>
              <p className="aboutMe_p_description"> Video Games are something I have always loved, ranging from computer games to xbox games and switch games. The first games I started with were Age of Mythology for PC and Pokemon for Game Boy Color. I moved on to Call Of Duty and Halo, then to FIFA. Recently I have been am very close to beating the game on all difficulties.
              </p>
    </div>
    
    </div>


    <div class="slides-item slide-2" id="slide-2" aria-label="slide 2 of 5" tabindex="0">
    <div id='inner_div_slide_2'>
    <img src="images/chessGame.gif" alt="chessPuzzleCover" className="card2col3chessImageCover"/>
    <div className='chess-description-div'>
    <h1 className="aboutMe_h1_title-chess">Chess</h1>
              <p className="aboutMe_p_description-chess">
                I started playing chess in 3rd grade and immediately fell in
                love with the game, I play multiple times everyday. I love the
                strategy and the creativity in the moves.Elementary - high
                school I use to go to city, state, and national tournaments.
                <br />
                This is actually a game I played recently and won, I was
                playing as white.
              </p>
              </div>
    </div>
    </div>


    <div class="slides-item slide-3" id="slide-3" aria-label="slide 3 of 5" tabindex="0">

    <div id='inner_div_slide_1'>
    <img src="images/bigSky.png" alt="Big Sky" className="card1col3ImageCover-bigsky"/>
              <h1 className="aboutMe_h1_title">Skiing</h1>
              <p className="aboutMe_p_description">  Skiing has always been a big part of my life. While in middle
                school and highschool I would go to Vermont every weekend to
                ski with a Park team. Now I unfortunately only get to go 2-3
                times a year. My best friend and I are very good and like to
                do the hardest stuff on the mountains and sometimes even go
                helicopter skiing.
              </p>
    </div>
    </div>


    <div class="slides-item slide-4" id="slide-4" aria-label="slide 4 of 5" tabindex="0">
    <div id='inner_div_slide_2'>
    <img
                src="/images/homeMadePasta.png"
                alt="Pasta"
                className="card2col3ImageCover-pasta"
              />
    <div className='chess-description-div'>
    <h1 className="aboutMe_h1_title-chess">Cooking</h1>
              <p className="aboutMe_p_description-chess">
              Cooking is very dear to me. I love to make food for my self
                and for other people. My favorite things to cook are
                sandwiches, pasta from scratch, and many other things. This
                photo is of fettuccine I made from scratch.
              </p>
              </div>
    </div>
    </div>


    <div class="slides-item slide-5" id="slide-5" aria-label="slide 5 of 5" tabindex="0">
    <div id='inner_div_slide_1'>
    <img src="images/magellanShips.jpg" alt="Magellan ships" className="card3col3ImageCover-history" />
              <h1 className="aboutMe_h1_title-history">History</h1>
              <p className="aboutMe_p_description-history">  Skiing has always  I think I can trace back to Age of Mythology for my love of
                history. That video game made history really cool to me. I
                like all periods of history, but am more interested in greek
                mythology, and the age of exploration. The image cover for
                this card is of Magellan's fleet, he was the first person to
                travel around the world completely, and I am currently reading
                a history book about him and his adventure.
              </p>
    </div>
      </div>     


  </div>



  <div class="carousel__nav">
    <a class="slider-nav" href="#slide-1" aria-label="Go to slide 1">1</a>
    <a class="slider-nav" href="#slide-2" aria-label="Go to slide 2">2</a>
    <a class="slider-nav" href="#slide-3" aria-label="Go to slide 3">3</a>
    <a class="slider-nav" href="#slide-4" aria-label="Go to slide 4">4</a>
    <a class="slider-nav" href="#slide-5" aria-label="Go to slide 5">5</a>
  </div>
  <div class="carousel__skip-message" id="skip-link" tabindex="0"></div>
</section>



      </div>
    </div>
  );
};

export default MoreAboutMe;
