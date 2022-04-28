import React from 'react'

const MoreAboutMe = () => {
  return (
    <div>
      <div className='aboutMeTitleDiv'>
      <h1 className='aboutMeTitle'>Get to Know Me</h1>
      <div className='brandStatment-aboutMe'>
      <h3>I have completed a B.S. in Biology,  training my scientific mind while using my work ethic and outside-the-box analytical thinking to solve problems. I have supplemented my Bachelor’s degree with a software engineering training certificate.  My scientific mind injects intellectual curiosity and creativity into software engineering.  I have strong communication, collaboration and multi-tasking skills. I am looking for an entry level job to combine the two skill sets I have built over the years.</h3>
      </div>
      </div>

    <div className='columContainerAboutMe'>
      <div className='colum1-AboutMe'>
                {/* Card One Col 1 \/ ======================================================*/}
      <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="images/xboxController.png" alt="xboxController" className='card2col3ImageCover-xbox'/>
    </div>
    <div class="flip-card-back">
      <h1 className='cardHeader'>Video Games</h1>
      <p className='cardParagraph'>Video Games are something I have always loved, ranging from computer games to xbox games and switch games. The first games I started with were Age of Mythology for PC and Pokemon for Game Boy Color. I moved on to Call Of Duty and Halo, then to FIFA. Recently I have been playing Mario Kart on my switch and am very close to beating the game on all difficulties.</p>
    </div>
  </div>
</div>
{/* One Card /\ =========================================================*/}


    {/* Card Two Col 1  \/ ======================================================*/}
    <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="images/chessGame.gif" alt="chessPuzzleCover" className='card2col3chessImageCover'/>
    </div>
    <div class="flip-card-back">
    <h1 className='cardHeader'>Chess</h1>
      <p className='cardParagraph'>I started playing chess in 3rd grade and immediately fell in love with the game, I play multiple times everyday. I love the strategy and the creativity in the moves.Elementary - high school I use to go to city, state, and national tournaments.
      <br/>
      This is actually a game I played recently and won, I was playing as white.</p>
    </div>
  </div>
</div>
{/* One Card /\ =========================================================*/}



    {/* Card Three Col 1  \/ ======================================================*/}
    {/* <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="img_avatar.png" alt="Avatar" style={{width:"300px", height:"300px"}}/>
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1>
      <p>Architect and Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div> */}
{/* One Card /\ =========================================================*/}



 {/* Card Four Col 1  \/ ======================================================*/}
    {/* <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="img_avatar.png" alt="Avatar" style={{width:"300px", height:"300px"}}/>
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1>
      <p>Architect and Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div> */}
{/* One Card /\ =========================================================*/}


      </div>

      <div className='colum2-AboutMe'>
        <div className='gif-holder'>
          <a href="https://farm.one/" target="_blank" rel="noopener noreferrer"><img src="images/plantGrowing.gif" alt="plant gif" className='plantGif'/></a>
          
        </div>
      </div>


      <div className='colum3-AboutMe'>
        {/* Card One Col 3 \/ ======================================================*/}
      <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="images/bigSky.png" alt="Big Sky"  className='card1col3ImageCover-bigsky'/>
    </div>
    <div class="flip-card-back">
    <h1 className='cardHeader'>Skiing</h1>
      <p className='cardParagraph'>Skiing has always been a big part of my life. While in middle school and highschool I would go to Vermont every weekend to ski with a Park team. Now I unfortunately only get to go 2-3 times a year. My best friend and I are very good and like to do the hardest stuff on the mountains and sometimes even go helicopter skiing.</p>
    </div>
  </div>
</div>
{/* One Card /\ =========================================================*/}


    {/* Card Two Col 3  \/ ======================================================*/}
    <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="/images/homeMadePasta.png" alt="Pasta" className='card2col3ImageCover-pasta'/>
    </div>
    <div class="flip-card-back">
    <h1 className='cardHeader'>Cooking</h1>
      <p className='cardParagraph'>Cooking is very dear to me. I love to make food for my self and for other people. My favorite things to cook are sandwiches, pasta from scratch, and many other things. This photo is of fettuccine I made from scratch.</p>
    </div>
  </div>
</div>
{/* One Card /\ =========================================================*/}



    {/* Card Three Col 3  \/ ======================================================*/}
    <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="images/magellanShips.jpg" alt="Magellan ships" className='card3col3ImageCover-history'/>
    </div>
    <div class="flip-card-back">
    <h1 className='cardHeader'>History</h1>
      <p className='cardParagraph'>I think I can trace back to Age of Mythology for my love of history. That video game made history really cool to me. I like all periods of history, but am more interested in greek mythology, and the age of exploration. The image cover for this card is of Magellan's fleet, he was the first person to travel around the world completely, and I am currently reading a history book about him and his adventure. </p>
    </div>
  </div>
</div>
{/* One Card /\ =========================================================*/}



 {/* Card Four Col 3  \/ ======================================================*/}
    {/* <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="img_avatar.png" alt="Avatar" style={{width:"300px", height:"300px"}}/>
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1>
      <p>Architect and Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div> */}
{/* One Card /\ =========================================================*/}



      </div>

    </div>







    </div>
    
  )
}

export default MoreAboutMe