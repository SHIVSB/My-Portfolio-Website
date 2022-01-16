import React from "react";
import tictac from "./images/tictac.png";
import left from "./images/left.png"
import {Link} from "react-router-dom";
import {isVisible} from "@testing-library/user-event/dist/utils";

function Work(){
    return(

            <div className="grid md:grid-cols-3 ">
                <div className="md:flex md:justify-end bg-gray-900">
                    <nav className="md:fixed top-0 z-50">
                        <div className="flex justify-between lg:mt-64 bg-white mr-1">
                            <h1 className="font-bold uppercase text-mammoth ">
                                <Link to={`/`}>

                                    <svg className="w-4 inline-block" xmlns="http://www.w3.org/2000/svg"
                                         className="h-12 w-12 mx-2" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                                    </svg>
                                    <span className="mx-2">Home</span>

                                </Link>
                            </h1>

                        </div>
                        <ul id="visi" className="text-sm hidden mt-6 md:block mr-36" id="menu">

                            <li className="mt-4 bg-white">
                                <Link to={`/skills`}>
                                    <svg className="w-4 inline-block" xmlns="http://www.w3.org/2000/svg"
                                         className="h-12 w-12 mx-2" fill="white"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    <span className="mx-2 font-bold">SKILLS</span>
                                </Link>
                            </li>
                            <li className="mt-4 bg-white mr-12">
                                <a href="#">
                                    <svg className="w-4 inline-block " xmlns="http://www.w3.org/2000/svg"
                                         className="h-12 w-12 mx-2" fill="white"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/>
                                    </svg>
                                    <span className="mx-2 font-bold">CONTACT</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <main className="px-16 py-6 bg-white md:col-span-2 scroll-auto">
                    <div className="flex md:justify-end sm:justify-center">
                        {/*<a href="#"*/}
                        {/*   className="btn text-primary md:border-primary md:border-2 hover:text-white hover:bg-primary transition ease-in duration-500">Log*/}
                        {/*    in</a>*/}
                        {/*<a href="#"*/}
                        {/*   className="btn text-primary ml-2 md:border-primary md:border-2 hover:text-white hover:bg-primary transition ease-in duration-500">Sign*/}
                        {/*    Up</a>*/}
                    </div>

                    <div className="flex justify-center items-end">
                        {/*<div className="bg-red-500 h-4 w-8"></div>*/}
                        {/*<div className="bg-blue-500 h-8 w-8"></div>*/}
                        {/*<div className="bg-green-500 h-12 w-8"></div>*/}
                        <header>
                            <h2 className="text-gray-700 text-6xl font-semibold">Projects</h2>
                            <h3 className="text-2xl font-semibold">-----------------------</h3>
                        </header>
                    </div>

                    <div>
                        <h4 className="font-bold mt-12 pb-2 border-b border-red-700">Made with By Shivanshu Panwar</h4>
                        <div className="mt-8 grid lg:grid-cols-3 gap-10">
                            <div className="card hover:shadow-lg rounded-lg overflow-hidden p-2 bg-gray-700 text-white">
                                <img src={tictac} alt="photo" className="w-full h-48 sm:h-48 object-cover"/>
                                    <div className="m-4 text-white">
                                        <span className="font-bold ">P1</span>
                                        <span className="block  text-sm">Recipe by Shic</span>
                                    </div>
                                    <div className="badge">
                                        <svg className="w-4 inline-block" xmlns="http://www.w3.org/2000/svg"
                                             className="h-6 w-6" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                        </svg>
                                        <span>
                                25 mins
                            </span>
                                    </div>
                            </div>

                            <div className="card hover:shadow-lg rounded-lg overflow-hidden p-2 bg-gray-700 text-white">
                                <img src={tictac} alt="photo"
                                     className="w-full h-48 object-cover"/>
                                    <div className="m-4">
                                        <span className="font-bold text-white">p2</span>
                                        <span className="block text-white text-sm">Recipe by Shic</span>
                                    </div>
                                    <div className="badge">
                                        <svg className="w-4 inline-block" xmlns="http://www.w3.org/2000/svg"
                                             className="h-6 w-6" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                        </svg>
                                        <span>
                                25 mins
                            </span>
                                    </div>
                            </div>
                            <div className="card hover:shadow-lg rounded-lg overflow-hidden p-2 bg-gray-700 text-white">
                                <img src={tictac} alt="photo"
                                     className="w-full object-cover h-48"/>
                                    <div className="m-4">
                                        <span className="font-bold text-white">p3</span>
                                        <span className="block text-white text-sm">Recipe by Shic</span>
                                    </div>
                                    <div className="badge">
                                        <svg className="w-4 inline-block" xmlns="http://www.w3.org/2000/svg"
                                             className="h-6 w-6" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                        </svg>
                                        <span>
                                25 mins
                            </span>
                                    </div>
                            </div>
                            <div className="card hover:shadow-lg rounded-lg overflow-hidden p-2 bg-gray-700 text-white">
                                <img src={tictac} alt="photo" className="w-full object-cover h-48"/>
                                <div className="m-4">
                                    <span className="font-bold text-white">p4</span>
                                    <span className="block text-white text-sm">Recipe by Shic</span>
                                </div>
                                <div className="badge">
                                    <svg className="w-4 inline-block" xmlns="http://www.w3.org/2000/svg"
                                         className="h-6 w-6" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    <span>
                                25 mins
                            </span>
                                </div>
                            </div>
                            <div className="card hover:shadow-lg rounded-lg overflow-hidden p-2 bg-gray-700 text-white">
                                <img src={tictac} alt="photo"
                                     className="w-full object-cover h-48"/>
                                <div className="m-4">
                                    <span className="font-bold text-white">p5</span>
                                    <span className="block text- white text-sm">Recipe by Shic</span>
                                </div>
                                <div className="badge">
                                    <svg className="w-4 inline-block" xmlns="http://www.w3.org/2000/svg"
                                         className="h-6 w-6" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    <span>
                                25 mins
                            </span>
                                </div>
                            </div>
                            <div className="card hover:shadow-lg rounded-lg overflow-hidden p-2 bg-gray-700 text-white">
                                <img src={tictac} alt="photo"
                                     className="w-full object-cover h-48"/>
                                <div className="m-4">
                                    <span className="font-bold text-white">p6</span>
                                    <span className="block text-white text-sm">Recipe by Shic</span>
                                </div>
                                <div className="badge">
                                    <svg className="w-4 inline-block" xmlns="http://www.w3.org/2000/svg"
                                         className="h-6 w-6" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    <span>
                                25 mins
                            </span>
                                </div>
                            </div>
                            <div className="card hover:shadow-lg rounded-lg overflow-hidden p-2 bg-gray-700 text-white">
                                <img src={tictac} alt="photo" className="w-full object-cover h-48"/>
                                <div className="m-4">
                                    <span className="font-bold text-white">p7</span>
                                    <span className="block text-white text-sm">Recipe by Shic</span>
                                </div>
                                <div className="badge">
                                    <svg className="w-4 inline-block" xmlns="http://www.w3.org/2000/svg"
                                         className="h-6 w-6" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    <span>
                                25 mins
                            </span>
                                </div>
                            </div>
                            <div className="card hover:shadow-lg rounded-lg overflow-hidden p-2 bg-gray-700 text-white">
                                <img src={tictac} alt="photo"
                                     className="w-full object-cover h-48"/>
                                <div className="m-4">
                                    <span className="font-bold text-white">p8</span>
                                    <span className="block text-white text-sm">Recipe by Shic</span>
                                </div>
                                <div className="badge">
                                    <svg className="w-4 inline-block" xmlns="http://www.w3.org/2000/svg"
                                         className="h-6 w-6" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    <span>
                                25 mins
                            </span>
                                </div>
                            </div>
                            <div className="card hover:shadow-lg rounded-lg overflow-hidden p-2 bg-gray-700 text-white">
                                <img src={tictac} alt="photo"
                                     className="w-full object-cover h-48"/>
                                <div className="m-4">
                                    <span className="font-bold text-white">p9</span>
                                    <span className="block text-white text-sm">Recipe by Shic</span>
                                </div>
                                <div className="badge">
                                    <svg className="w-4 inline-block" xmlns="http://www.w3.org/2000/svg"
                                         className="h-6 w-6" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    <span>
                                25 mins
                            </span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                        </div>
                        <div className="flex justify-center">
                            <div
                                className="btn bg-secondary-100 text-gray-600 font-bold hover:shadow-inner transform hover:scale-125 hover:bg-opacity-40">
                                Github for all projects...
                            </div>
                        </div>
                    </div>
                </main>
            </div>
    );
}

export default Work;