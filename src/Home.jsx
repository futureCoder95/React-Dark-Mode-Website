import React, { useState, useEffect } from 'react';
import web from "./images/14.jpg";

function Home() {

    const [theme, setTheme] = useState('light-theme');

    const toggleButton = () => {
        if (theme === "dark-theme") {
            setTheme('light-theme')
        }
        else {
            setTheme('dark-theme')
        }
    }

    useEffect(() => {
        document.body.className = theme;
    }, [theme])


    return (
        <>
            {/* <Same name = 'Welcome to Home Page' imgscr = {web} btnName = "Enroll Now"/> */}
            <header>
                <section id="header" className='mt-5 d-flex align-items-center'>
                    <div className="container-fluid nav_bg">
                        <div className="row">
                            <div className="col-10 mx-auto">
                                <div className="row">
                                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 ">
                                        <h1 className='pt-3 h1'>Welcome to Home Page</h1>
                                        <h3 className="my-4">I have created this website using React.js , with the help of Bootstarap5 and some CSS for styling , Though this website may not look very appealing and attractive but I can assure you that I have learned a lot from this</h3>
                                        <div className="mt-3 ml-3">
                                            {/* <a href="/contact">  <button className='btn btn-primary my-2'>Contact Us</button></a> */}
                                            <button onClick={() => toggleButton} type="button" className="btn btn-outline-dark my-3">Enable Dark Mode</button>

                                        </div>
                                    </div>
                                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                                        <img src={web} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer class="text-gray-600 body-font">
                    <div class="containerrr px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                        <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <span class="ml-3 text-xl">Tailblocks</span>
                        </a>
                        <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 Tailblocks | All Rights Reserved 2020.

                        </p>
                        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                            <a class="text-gray-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a class="ml-3 text-gray-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a class="ml-3 text-gray-500">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a class="ml-3 text-gray-500">
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                        </span>
                    </div>
                </footer>
            </header>
        </>
    )
}

export default Home;