import React from "react";
import cplus from "../components/images/cpplus.png";
import javascript from"../components/images/javascript.png";
import github from "../components/images/githubimage.png";
import mongo from "../components/images/mongodb.png";
import node from "../components/images/nodejs.png";
import react from "../components/images/react.png";
import mysql from "../components/images/mysql.png";
import jest from "../components/images/jest.png";
import tailwind from "../components/images/tailwind.png";
import java from "../components/images/java.png"
import python from "../components/images/python.png"
import restapi from "../components/images/rest.png"
import {Link} from "react-router-dom";

function Skills(){
    return (
      <div className={"bg-gradient-to-b from-cyan-50 to-sky-100"}>
          <div className={" text-white text-center md:text-right sticky top-0 z-50 bg-zinc-100 mx-auto rounded-lg mb-4 mt w-11/12 text-white text-2xl p-4 font-semibold"}>
              <Link to={`/`}><button className={"hover:shadow-lg rounded-lg bg-gray-800 p-2 mr-4"}>Home</button></Link>
              <button className={"hover:shadow-lg rounded-lg bg-gray-800 p-2"}>Skills</button>
              <a href={"https://leetcode.com/epsons_"}> <button className={"hover:shadow-lg rounded-lg bg-gray-800 p-2 mr-4"}>Leetcode</button></a>
              <a href={"https://codechef.com/users/cyanxyz"}><button className={"hover:shadow-lg rounded-lg bg-gray-800 p-2"}>Codechef</button></a>
          </div>
          <div className="relative grid sm:grid-row-11 md:grid-cols-4 lg:mx-12 mx-auto mx-24 sm:mx-16">
              <div className={"mb-2 hover:animate-pulse"}>
                  <img className={"h-72 w-96"} src={cplus}/>
              </div>
              <div className={"mb-2 hover:animate-pulse"}>
                  <img className={"h-72 w-96"} src={javascript}/>
              </div>
              <div className={"mb-2 hover:animate-pulse"}>
                  <img className={"h-72 w-96"} src={node}/>
              </div>
              <div className={"mb-2 hover:animate-pulse"}>
                  <img className={"h-72 w-96"} src={mysql}/>
              </div>
              <div className={"mb-2 hover:animate-pulse"}>
                  <img className={"h-72 w-96"} src={mongo}/>
              </div>
              <div className={"mb-2 hover:animate-pulse"}>
                  <img className={"h-72 w-96"} src={react}/>
              </div>
              <div className={"mb-2 hover:animate-pulse"}>
                  <img className={"h-72 w-96"} src={tailwind}/>
              </div>
              <div className={"mb-2 hover:animate-pulse"}>
                  <img className={"h-72 w-96"} src={github}/>
              </div>
              <div className={"mb-2 hover:animate-pulse"}>
                  <img className={"h-72 w-96"} src={jest}/>
              </div>
              <div className={"mb-2 hover:animate-pulse"}>
                  <img className={"h-72 w-96"} src={java}/>
              </div>
              <div className={"mb-2 hover:animate-pulse"}>
                  <img className={"h-72 w-96"} src={python}/>
              </div>
              <div className={"mb-2 hover:animate-pulse"}>
                  <img className={"h-72 w-96"} src={restapi}/>
              </div>
          </div>
      </div>
    );
}

export default Skills;