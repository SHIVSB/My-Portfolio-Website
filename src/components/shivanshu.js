import React from "react";
import history from "./history";
import "./shivanshu.css"
import {Link} from "react-router-dom";
import github from './images/github.png'
import linkedin from './images/linkedin.png'
import resume from './images/resume.png'

function Shivanshu(){
    const name = "<" +"shivanshu panwar" + " />";

    function left(){

    }

    return (
        <div className="">
            <div className="lg:hidden">
                <span className="sm:ml-4 md:ml-8">Aboutme</span>
                <span className="sm:ml-8">Work</span>
            </div>
            <div className="flex h-screen bg-gray-800 font-semibold lg:text-gray-900 text-white">

                <div className="hidden sm:block my-auto lg:bg-gray-300 w-12 rounded-md">
                    <Link to={`/aboutme`}>
                    <h1 onMouseOver={(event) => {
                        event.target.style.backgroundColor = "#B3B7D6";
                    }} onMouseOut={(event) => {
                        event.target.style.backgroundColor = ""
                    }} className="text-center my-auto p-2 rounded-md">A</h1>
                    <h1 onMouseOver={(event) => {
                        event.target.style.backgroundColor = "#B3B7D6";
                    }} onMouseOut={(event) => {
                        event.target.style.backgroundColor = ""
                    }} className="text-center my-auto p-2 rounded-md">B</h1>
                    <h1 onMouseOver={(event) => {
                        event.target.style.backgroundColor = "#B3B7D6";
                    }} onMouseOut={(event) => {
                        event.target.style.backgroundColor = ""
                    }} className="text-center my-auto p-2 rounded-md">O</h1>
                    <h1 onMouseOver={(event) => {
                        event.target.style.backgroundColor = "#B3B7D6";
                    }} onMouseOut={(event) => {
                        event.target.style.backgroundColor = ""
                    }} className="text-center my-auto p-2 rounded-md">U</h1>
                    <h1 onMouseOver={(event) => {
                        event.target.style.backgroundColor = "#B3B7D6";
                    }} onMouseOut={(event) => {
                        event.target.style.backgroundColor = ""
                    }} className="text-center my-auto p-2 rounded-md">T</h1>
                    <h1 onMouseOver={(event) => {
                        event.target.style.backgroundColor = "#B3B7D6";
                    }} onMouseOut={(event) => {
                        event.target.style.backgroundColor = ""
                    }} className="text-center my-auto p-2 rounded-md">M</h1>
                    <h1 onMouseOver={(event) => {
                        event.target.style.backgroundColor = "#B3B7D6";
                    }} onMouseOut={(event) => {
                        event.target.style.backgroundColor = ""
                    }} className="text-center my-auto p-2 rounded-md">E</h1>
                    </Link>
                </div>

                <h1 className="text-xl m-auto text-white font-bold md:font-bold lg:text-6xl md:text-4xl text-center sm:text-2xl sm:font-bold"><h1 className="transform hover:scale-125 transition ease-in-out delay-100">{name}</h1>
                    <h1 className="typing-demo translate-y-4 hover:animate-pulse font-light md:text-2xl sm:text-xl md:font-light lg:font-semibold sm:font-light">I am a Full Stack Developer ...</h1>
                    <div className="lg:ml-28 sm:ml-4 md:ml-4 ml-4 translate-y-56 sm:translate-y-68  md:translate-y-64 grid grid-cols-3 bg-gray-800">
                        <a href={"https://github.com/shivsb"}><img className="hover:animate-bounce h-12 w-12 rounded-full" src={github}/></a>
                        <img className="hover:animate-bounce h-12 w-12 rounded-full" src={linkedin}/>
                        <img className="hover:animate-bounce h-12 w-12 bg-white rounded-full" src={resume}/>
                    </div>
                </h1>

                <div className="hidden sm:block w-12 my-auto lg:bg-gray-300 rounded-md ">
                    <Link to={`/work`}>
                    <h1 onMouseOver={(event) => {
                        event.target.style.backgroundColor = "#B3B7D6";
                    }} onMouseOut={(event) => {
                        event.target.style.backgroundColor = ""
                    }} className="text-center my-auto p-2 rounded-md">W</h1>
                    <h1 onMouseOver={(event) => {
                        event.target.style.backgroundColor = "#B3B7D6";
                    }} onMouseOut={(event) => {
                        event.target.style.backgroundColor = ""
                    }} className="text-center my-auto p-2 rounded-md">O</h1>
                    <h1 onMouseOver={(event) => {
                        event.target.style.backgroundColor = "#B3B7D6";
                    }} onMouseOut={(event) => {
                        event.target.style.backgroundColor = ""
                    }} className="text-center my-auto p-2 rounded-md">R</h1>
                    <h1 onMouseOver={(event) => {
                        event.target.style.backgroundColor = "#B3B7D6";
                    }} onMouseOut={(event) => {
                        event.target.style.backgroundColor = ""
                    }} className="text-center my-auto p-2 rounded-md">K</h1>
                    </Link>
                </div>

                <br/>
            </div>

        </div>

    );
}

export default Shivanshu;