import React from "react"

const Surge = "randomSurge.jpg"

function Home(){
    return(
        <div class="center">
        <div class="card border-dark mb-3; center" style="max-width: 80%">
            <h2 class="card-title" style="text-align: center;">About Me</h2>
            <div class="card text-center" style="max-width: 75%">
                <div class="card-body">

                    <img src= {Surge} class="rounded float-left" alt="Surge in Chicago" style="width: 65%;" />
                    <p class="card-text">
                        Hello my name is Sergio Bracamontes, I am 32 and originally from Parkersburg,
                        WV but currently reside in Austin, TX.</p>

                    <p class="card-text"> I graduated from Parkersburg High School in 2006. Continuing my pursuit of knowledge I enrolled
                        at Wheeling Jesuit University and finished with a Bachelor’s Degree in Communications in 2010.
                        After college, I then went on to pursue a career in teaching and in coaching. I was hired on by
                        the Linsly School in Wheeling, WV, as an intern that let me pursue that career for a year. I
                        went on to further my coaching career and reenrolled into Wheeling Jesuit University as a
                        graduate assistant for the swim team, while pursuing my Masters in Business.</p>

                    <p class="card-text">After coaching I went back to school at West Virginia University, where I acquired a certificate
                        in Chemical Operations and was able to intern for DuPont. I was immediately hired after
                        completing my program by DuPont as a process operator. Advancing myself to a shift supervisor, I
                        felt that it was time to advance myself further and proceed to enroll into the University of
                        Texas Coding Bootcamp. I hope to further my career in computer programming and am looking
                        forward to the challenge.</p>

                </div>
            </div>
        </div>
    </div>
    )
}

export default Home