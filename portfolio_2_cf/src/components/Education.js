const Education = () => {
  return (
    <div>
      <h1>Education</h1>
      <h2>HighSchool</h2>
      <p>
        <span>
          <a
            href="https://www.eaglehill.school/"
            target="_blank"
            rel="noopener noreferrer"
          >
            EagleHill School
          </a>
        </span>
        - A special education boarding school which focused primarily on
        students with Learning Disabilities, including ADHD, dyslexia, auditory
        processing disorder and more based in Hardwick Massachusets. 
        <br />
        Here I Graduated in the top 5% of my class with honors and a 3.85 GPA. I took the hardest classes in the school, including college level Anatomy, Calculus 2, Reading and Writting critical analysis, and other niche topics in science and history.
      </p>

      <h2>College</h2>

      {/* <span><a href="https://www.rollins.edu/" target="_blank" rel="noopener noreferrer">Rollins College</a></span>, <span><a href="https://www.providence.edu/" target="_blank" rel="noopener noreferrer">Providence College</a></span>,  */}

      <p><span><a href="https://www.pace.edu/" target="_blank" rel="noopener noreferrer">Pace University </a> </span> - A liberal arts University in the heart of downtown Manhattan, where I graduate with a Bachelors of Science in Biology and a 3.48 GPA. There I was mainly focused on plant biology, but enjoyed human biology as well.</p>

      <h2>Post College</h2>
      <p><span><a href="https://generalassemb.ly/" target="_blank" rel="noopener noreferrer">General Assembly</a> </span> - A technilogical focused bootcamp offering post graduates an opertunity to step into the Data science, UI/UX, and Software Enginnering fields. 
      <br/> 
      I completed a course in JavaScript basics to get a feel and see if I enjoyed the work. I ended up taking the full 6 month program where I gained 480+ hours of expereince in programing languages and techniques. The course included a range of technologies from HTML, CSS, and JavaScript to learning backends and frameworks like  MongoDB, SQL, Flask, Bootstrap and more. </p>

    </div>
  );
};

export default Education;
