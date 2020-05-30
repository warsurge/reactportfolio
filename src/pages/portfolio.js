import React from "react"


const SoundThis = "/sound.jpg";
const Fitness = "/fitness.jpg";
const BingeWorthy= "/binge.png";
const Weather = "/weather.jpg";
const Workday = "/workday.jpg";

function Portfolio () {

    return(
        <div class="center">
            <div class="card bg-light mb-3" style={{maxwidth: "75%"}}>
                <div class="card-header center">
                    <h2>PORTFOLIO</h2>
                </div>
                <div class="card-body">



                    <div class="row row-cols-lg-2 row-cols-md-2 row-cols-sm-12">
                        <div class="col mb-4">
                            <div class="card">
                                <img src={SoundThis} class="card-img-top" alt="SoundThis screenshot" />
                                <div class="card-body">
                                    <h4 class="card-title">SoundThis!</h4>
                                    <p class="card-text">App for music lovers. Will let you see your favorite artists
                                        and discover new artists and when they are touring!</p>
                                    <a href="https://github.com/Brian-Fairbanks/SoundThis.git">Github Repository</a>
                                    <br />
                                    <a href="https://brian-fairbanks.github.io/SoundThis/">Deploy the App!</a>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-4">
                            <div class="card">
                                <img src={Weather} class="card-img-top" alt="Weather Me This screenshot"/>
                                <div class="card-body">
                                    <h4 class="card-title">Weather Me This!</h4>
                                    <p class="card-text">App to tell what the weather will be. Will give you the weather
                                        in any area and give you a five day forecast.</p>
                                    <a href="https://github.com/warsurge/homework-6.git">Github Repository</a> <br />
                                    <a href=" https://warsurge.github.io/homework-6/">Deploy the App!</a>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-4">
                            <div class="card">
                                <img src={Workday} class="card-img-top" alt="Work day Screen screenshot" />
                                <div class="card-body">
                                    <h4 class="card-title">Work Day Planner</h4>
                                    <p class="card-text">An app that will help you plan your day with interacitve time
                                        blocks.</p>
                                    <a href="https://github.com/warsurge/homework-5.git">Github Repository</a> <br />
                                    <a href="https://warsurge.github.io/homework-5/">Deploy the App!</a>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-4">
                            <div class="card">
                                <img src={BingeWorthy} class="card-img-top" alt="BingeWorthy Screen screenshot" />
                                <div class="card-body">
                                    <h4 class="card-title">BingeWorthy</h4>
                                    <p class="card-text">An app that will help you get through being locked up by showing the top shows of the major streaming services.</p>
                                    <a href="https://github.com/mmejares/project2_BingeWorthy.git">Github Repository</a> <br />
                                    <a href="https://production-binge-worthy.herokuapp.com/">Deploy the App!</a>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-4">
                            <div class="card">
                                <img src={Fitness} class="card-img-top" alt="Fitness Tracker Screen screenshot" />
                                <div class="card-body">
                                    <h4 class="card-title">Fitness Tracker</h4>
                                    <p class="card-text">An app that you can use to help keep track of your workouts and see your progress!</p>
                                    <a href="https://github.com/warsurge/homework-14.git">Github Repository</a> <br />
                                    <a href="https://fitness-tracker15.herokuapp.com/">Deploy the App!</a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Portfolio