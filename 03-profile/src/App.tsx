import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'

function App() {
  return (
    <>
      <header className="flex flex-row justify-center items-center w-full h-[15vh] bg-midnightGreen">
        <section className="text-center flex justify-center w-full h-[15vh] bg-skobeloff items-center flex-auto">
          <h1 className="text-center text-afWhite text-7xl">
            <strong className="text-afWhite">Roberto José García Ríos</strong>
          </h1>
        </section>
      </header>
      <div className="flex overflow-x-scroll h-[80vh] no-scrollbar">
        <div className="flex flex-nowrap items-center h-full mx-5 gap-5">
          <div className="inline-block h-[90%]">
            <div className="w-[500px] h-full overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <div className="p-5 ">
                <h1 className="text-center text-black rounded-lg text-3xl">
                  <strong>
                    Momentum Trainee,{" "}
                    <span className="text-black">Softtek</span>
                  </strong>
                </h1>
                <h2 className="text-center text-faluRed text-xl">
                  <strong>November 2023 - Present Day</strong>
                </h2>
                <p className="text-center text-black m-5">
                  <ol className="list-disc">
                    <li>
                      Contributed to the development of digital resources to
                      streamline company-wide processes.
                    </li>
                    <li>
                      Spearheaded the creation of several automated processes
                      that improved data registration and recollection by an
                      estimated 50% net improvement.
                    </li>
                    <li>
                      Took advantage of online continuous learning programs to
                      simultaneously expand my proficiencies with software
                      technologies and low-code general-purpose languages
                    </li>
                  </ol>
                </p>
                <h2 className="text-center text-faluRed text-xl">
                  <strong>Tools</strong>
                </h2>
                <p className="text-center text-black w-fit m-5 mx-auto ">
                  <ol className="list-disc ml-auto">
                    {/*PowerApps PowerBI PowerAutomate Sharepoint*/}
                    <li>PowerApps</li>
                    <li>PowerBI</li>
                    <li>PowerAutomate</li>
                    <li>Sharepoint</li>
                  </ol>
                </p>
              </div>
            </div>
          </div>
          <div className="inline-block h-[90%]">
            <div className="w-[500px] h-full overflow-y-scroll no-scrollbar rounded-lg shadow-lg bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <div className="p-5 ">
                <h1 className="text-center text-black text-3xl">
                  <strong>
                    KOFY Developer, AI medical buddy for deaf patients.
                  </strong>
                </h1>
                <h2 className="text-center text-faluRed text-xl">
                  <strong>September 2023 - Present Day</strong>
                </h2>
                <p className="text-center text-black m-5">
                  <ol className="list-disc">
                    <li>
                      Collaborated in the inception of a Swift application that
                      improves communication between medical doctors and the
                      deaf community using text-to-speech, speech-to-text, and
                      AI technologies.
                    </li>
                    <li>
                      Led the creation of the relational database and web API to
                      process the application's requests in real time.
                    </li>
                    <li>
                      Aided in the deployment of both services to an AWS
                      instance using Docker containers.
                    </li>
                  </ol>
                </p>
                <h2 className="text-center text-faluRed text-xl">
                  <strong>Tools</strong>
                </h2>
                <p className="text-center text-black w-fit m-5 mx-auto ">
                  <ol className="list-disc ml-auto">
                    {/*Node.js
Express.js
PostgreSQL
Swift
AWS
Docker*/}
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>PostgreSQL</li>
                    <li>Swift</li>
                    <li>AWS</li>
                    <li>Docker</li>
                  </ol>
                </p>
              </div>
            </div>
          </div>
          <div className="inline-block h-[90%]">
            <div className="w-[500px] h-full overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <div className="p-5 ">
                <h1 className="text-center text-black text-3xl">
                  <strong>Code Genie, AI coding training platform</strong>
                </h1>
                <h2 className="text-center text-faluRed text-xl">
                  <strong>September 2023</strong>
                </h2>
                <p className="text-center text-black m-5">
                  <ol className="list-disc">
                    <li>
                      Developed an NLP-driven tool to analyze resumes and
                      generate tailor-made programming challenges, earning a top
                      10 placement at HackMty 2023.
                    </li>
                    <li>
                      Streamlined examination processes for recruiters,
                      extracting information 50% faster.
                    </li>
                  </ol>
                </p>
                <h2 className="text-center text-faluRed text-xl">
                  <strong>Tools</strong>
                </h2>
                <p className="text-center text-black w-fit m-5 mx-auto ">
                  <ol className="list-disc ml-auto">
                    {/*MongoDB
Next.js
CSS
OpenAI
FastAPI*/}
                    <li>MongoDB</li>
                    <li>Next.js</li>
                    <li>CSS</li>
                    <li>OpenAI</li>
                    <li>FastAPI</li>
                  </ol>
                </p>
              </div>
            </div>
          </div>
          <div className="inline-block h-[90%]">
            <div className="w-[500px] h-full overflow-y-scroll no-scrollbar rounded-lg shadow-lg bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <div className="p-5 ">
                <h1 className="text-center text-black text-3xl">
                  <strong>
                    Urbanshift Mobility, Multiagent model and visualization.
                  </strong>
                </h1>
                <h2 className="text-center text-faluRed text-xl">
                  <strong>August 2023 - September 2023</strong>
                </h2>
                <p className="text-center text-black m-5">
                  <ol className="list-disc">
                    <li>
                      Deployed a multi-agent model for a smart vehicle parking
                      lot.
                    </li>
                    <li>
                      Achieved an estimated 20% improvement in parking speed
                      with our model
                    </li>
                    <li>
                      Developed a visualization tool using 3D models that
                      communicated via HTTP requests to the local server running
                      the simulation
                    </li>
                  </ol>
                </p>
                <h2 className="text-center text-faluRed text-xl">
                  <strong>Tools</strong>
                </h2>
                <p className="text-center text-black w-fit m-5 mx-auto ">
                  <ol className="list-disc ml-auto">
                    {/*Unity (C#)
Python
Mesa library
Flask
HTTP Requests*/}
                    <li>Unity (C#)</li>
                    <li>Python</li>
                    <li>Mesa library</li>
                    <li>Flask</li>
                    <li>HTTP Requests</li>
                  </ol>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className=" absolute text-center flex justify-center w-full h-[5vh] bg-midnightGreen items-center flex-none bottom-0">
        <h3 className="text-center text-afWhite text-xl underline flex flex-row space-x-4">
          <a href="https://github.com/RoJosGaRis" target="_blank">
            🔗Github
          </a>
          <a href="https://www.linkedin.com/in/rojosgaris/" target="_blank">
            🔗LinkedIN
          </a>
          <a href="mailto: roberto.jgr03@gmail.com">🔗Email</a>
        </h3>
      </section>
    </>
  );
}

export default App;
