import "./Home.css";
import { useState } from "react";
import doc from "./Bhanu_Koppolu.pdf";

const Home = () => {
  const [academic, setAcademic] = useState(0);
  const [personal, setPersonal] = useState(0);
  const [email, setEmail] = useState("Email");

  const academicProjects = [
    {
      title: "Interview Preperation Portal",
      description: `Led a 4-member team to develop a full-stack web app using React,
                    Express, Node.js, and MongoDB. Implemented an impressive array
                    of features, including interview feedback, preparation blogs,
                    user profile management, user profile based quizzes, progress
                    tracking and interview scheduling. Acquired in-depth expertise
                    in web development, handling both frontend and backend
                    components, resulting in a 360-degree skill set`,
      link: ``,
    },
    {
      title: "Resource Reserve",
      description: ` Developed a full-stack web application using NextJs, Redis, Amazon
            s3 and Firebase coordinating with three more people. This
            application is a simple solution for managing reservations in
            places like universities, apartments and communities which helps
            to reserve recreational spaces like Banquets Halls, Study Halls,
            Sports field etc. Apart from the core features automated
            notifications and administrative tools make managing resources a
            breeze, ensuring optimal utilization and a more satisfying user
            experience`,
      link: `https://github.com/Rushiraj0608/ResourceReserve`,
    },
  ];
  const personalProjects = [
    {
      title: `Music Player`,
      description: `developed a front end application with the help of rapid api which
              displays trending musinc based on region can help create playlist
              of the session of that user`,
      link: ``,
    },
    {
      title: `Marvel Application`,
      description: `using the marvel application`,
      link: ``,
    },
  ];

  return (
    <div className="main">
      <div className="name">
        <h1>Bhanu Srinivasa Sai Royal Koppolu</h1>
      </div>

      <div className="content">
        <div className="links">
          <a
            href="https://www.linkedin.com/in/bhanu-srinivasa-koppolu-5b5856184"
            target="_blank"
          >
            LinkedIn
          </a>
          <a href="https://github.com/r0yal3858" target="_blank">
            Github
          </a>
          <a href="https://codepen.io/r0yal3858/pens/" target="_blank">
            CodePen
          </a>
          <a
            onClick={async (e) => {
              e.preventDefault();
              try {
                await navigator.clipboard.writeText(
                  "bhanuroyal.koppolu@gmail.com"
                );
                window.alert("Email has been copied to clipboard");
              } catch (e) {
                window.alert("Error while copying email");
                setEmail("bhanuroyal.koppolu@gmail.com");
              }
            }}
          >
            {email}
          </a>

          <a href={doc} target="_blank">
            Resume
          </a>
        </div>
        <div className="wrapper">
          <div className="project_container">
            <h1>ACADEMIC PROJECTS</h1>
            <div className="project">
              <button
                onClick={() => {
                  setAcademic(
                    (academic) =>
                      Math.abs(academic - 1) % academicProjects.length
                  );
                }}
                className="controls"
              >{`<`}</button>

              <div className="projectDisplay">
                <h2>
                  {academicProjects[academic].link.length > 0 ? (
                    <a
                      href={`${academicProjects[academic].link}`}
                      target="_blank"
                    >
                      {academicProjects[academic].title}
                    </a>
                  ) : (
                    academicProjects[academic].title
                  )}
                </h2>
                <p>{academicProjects[academic].description}</p>
              </div>

              <button
                onClick={() => {
                  setAcademic(
                    (academic) => (academic + 1) % academicProjects.length
                  );
                }}
                className="controls"
              >{`>`}</button>
            </div>
          </div>
          <div className="project_container">
            <h1>PERSONAL PROJECTS</h1>
            <div className="project">
              <button
                onClick={() => {
                  setPersonal(
                    (personal) =>
                      Math.abs(personal - 1) % personalProjects.length
                  );
                }}
                className="controls"
              >{`<`}</button>

              <div className="projectDisplay">
                <h2>
                  {academicProjects[academic].link.length > 0 ? (
                    <a
                      href={`${academicProjects[academic].link}`}
                      target="_blank"
                    >
                      {personalProjects[personal].title}
                    </a>
                  ) : (
                    personalProjects[personal].title
                  )}
                </h2>
                <p>{personalProjects[personal].description}</p>
              </div>

              <button
                onClick={() => {
                  setPersonal(
                    (personal) => (personal + 1) % personalProjects.length
                  );
                }}
                className="controls"
              >{`>`}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
