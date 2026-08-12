import ProjectCard from "../components/ProjectCard";

export default function ProjectsContent() {
    return(
        // <p>Projects test test</p>
        <div className="grid lg:grid-cols-6 md:grid-cols-3 md:h-full gap-2 ">
            {/* <div className="grid grid-rows-2 h-full">
                <ProjectCard />
                <ProjectCard />
            </div>
            <div className="grid grid-rows-2">
                <ProjectCard />
            </div>
            <div className="grid grid-rows-2">
                <ProjectCard />
            </div> */}
            <ProjectCard image1="/images/Proj-JCW-Home.png" image1W={2716} image1H={1490} image2="/images/Proj-JCW-FAQ.png" image2W={2714} image2H={1530} image3="/images/Proj-JCW-Calendar.png" image3W={2720} image3H={1538} title="Jasper County Elections Website" 
                description="I was selected to update the current website of the Jasper County Elections and Registration Department. Utilizing HTML, CSS, and JavaScript, I created a responsive, multi-page website that will provide voting information to the thousands of residents of the county. The primary challenge of this project, besides it being my first experience with HTML and CSS, was creating a modern-feeling user experience without deviating too far from the design elements present throughout the rest of the website. Features shown in the included pictures from left to right are a responsive sidebar, dropdown FAQ section, and an interactive calendar." 
                    description2="This project is currently waiting to be reviewed by the Jasper County Elections Board." 
                        description3=""/>
            {/* <ProjectCard image1="/images/Proj-BB-Home.png" image1W={3024} image1H={1530} image2="/images/Proj-BB-Routing.png" image2W={3024} image2H={1520} image3="/images/Proj-BB-Map.png" image3W={3016} image3H={1532} title="Bus Boss Website" 
                description='In my Web Programming class, I was drafted into a team of 4 to create a fully functioning React website, with items on the rubric such as a full account system, saved user preferences, and API calls. Our team decided to make a route planning hub for the area surrounding the University of Georgia called "Bus Boss,” where users can plan routes, view active bus lines, and place bets on the arrival times of certain busses using fake currency.' 
                    description2="My contributions to this project include setting up the MongoDB database and creating the “Route Planner” page, where users can view a map of both downtown Athens, GA and the University of Georgia as well as recieve information and directions on planned routes. I accomplished this using a combination of Google’s Places API and Maps API." 
                        description3=""/> */}
            <ProjectCard image1="/images/Proj-BT-Graph.png" image1W={3024} image1H={1530} image2="/images/Proj-BT-Frame.png" image2W={3024} image2H={1520} image3="/images/Proj-BT-Output.png" image3W={3016} image3H={1532} title="Prototype Violin Bow Tracker" 
                description="In my free time, I've began to create a project using OpenCV and Python that allows violinists to upload a video of themselves playing and recieve a graph that illustrates their bow movements as seen in the first image. Currently, the pixel area of the bow hand must be manually defined in the code first, but I am currently working on adding a detection algorithm that will automate that process. Then, I intend to create an intuitive user interface and add extra customisation to the graph for ease of analysis."
                    description2="The idea behind this software is to give violinists the ability to greater analyse the mechanics of their bow arm and find what works and what doesn't. In my mind, I imagine violinists uploading multiple takes of the same song and then overlaying the graphs on top of each other to examine what differences led to the better or worse sounds." 
                        description3="https://github.com/ljahn-git/Violin-Bow-Tracker"/>
            <ProjectCard image1="/images/Proj-CES-CreateAccount.png" image1W={3022} image1H={1572} image2="/images/Proj-CES-Home.png" image2W={3024} image2H={1574} image3="/images/Proj-CES-Seats.png" image3W={3014} image3H={1570} title="Cinema E-Booking Website" 
                description="For my Software Engineering class, I led a team of 4 to create a full stack Cinema E-Booking website using Agile principles as well as a modified Scrum process. The website included a functioning account system, seat selection, and an email list created using React, Java with SpringBoot, and a SQL database." 
                    description2="As team lead, I facilitated communication and made sure that milestones were met in our weekly meeting. I created the database schema, email functionality, and connected the UI to our database along with the other backend developer. I was also responsible for most of the testing and around half of the resulting bug fixes." 
                        description3="https://github.com/ltj05508/CinemaEBookingWebsite"/>
            <ProjectCard image1="/images/Proj-Brain-OuterBrain.png" image1W={2056} image1H={936} image2="/images/Proj-Brain-WhiteMatter.png" image2W={2058} image2H={934} image3="/images/Proj-Brain-InnerBrain.png" image3W={2060} image3H={932} title="3D Brain Modeling" 
                description="Under Dr. Allison Howard of the UGA Department of Psychology, I was hired to develop a bash script that automizes the process of turning brain mri results into seperable 3D models as shown in the above pictures. From left to right, the pictures show the cerebral cortex, white matter, and the inner brain structures. These models were intended to be used in a VR application developed by my lab partner that would allow students to upload mri data and then view and learn from the resulting 3D model." 
                    description2="I’ve recently made a Windows capatible version of the script and hope to finish the VR application in the coming months." 
                        description3=""/>
            <ProjectCard image1="/images/Proj-DO-Title.png" image1W={1702} image1H={954} image2="/images/Proj-DO-Enemies.png"  image2W={1702} image2H={960} image3="/images/Proj-DO-Map.png" image3W={1706} image3H={952} title="Decked Out" 
                description="In my second semester at the University of Georgia’s Game Builders Club, I was drafted as an Environment and Weapons Programmer for the shooter/rogue-like Decked Out. In Decked Out, you defeat ever-increasing numbers of enemies in waves while earning money you can spend on upgrades for your movement and attack. " 
                    description2="I created the ammo system, weapon switching, and implemented the UI elements for the game." 
                        description3="https://github.com/unorthodoxbox/DeckedOut"/>
            <ProjectCard image1="/images/Proj-RF-Map.png" image1W={1520} image1H={850} image2="/images/Proj-RF-Battle.png" image2W={1514} image2H={846} image3="/images/Proj-RF-Event.png" image3W={1514} image3H={840} title="Royal Flush" 
                description='I was a general programmer for the roguelike/deckbuilding game “Royal Flush” through the University of Georgia’s Game Builders Club. In the game, you progress through the levels of a casino in order to defeat the boss at the very top, encountering battles, random events, and shops along the way. Included in the pictures above from left to right are the main map, battle screen, and an example random event.' 
                    description2="I created the event system, the enemy spawning system, and a randomly and procedurally generating map system." 
                        description3="https://github.com/AndyDaBeast6045/RoyalFlush"/>
        </div>
    )
}