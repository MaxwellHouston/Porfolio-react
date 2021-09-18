//About
import aboutImg from '../Utility/codes/about/img.jpg';
import aboutHTML from '../Utility/codes/about/html.txt';
import aboutCSS from '../Utility/codes/about/css.txt';
import aboutJS from '../Utility/codes/about/js.txt';
//gameOfWar
import gameImg from '../Utility/codes/gameOfWar/img.jpg';
import gameHTML from '../Utility/codes/gameOfWar/html.txt';
import gameCSS from '../Utility/codes/gameOfWar/css.txt';
import gameJS from '../Utility/codes/gameOfWar/js.txt';
//Golf Island
import golfIslandImg from '../Utility/codes/golfIsland/img.jpg';
import golfIslandHTML from '../Utility/codes/golfIsland/html.txt';
import golfIslandCSS from '../Utility/codes/golfIsland/css.txt';
import golfIslandJS from '../Utility/codes/golfIsland/js.txt';
//Portfolio
import portfolioImg from '../Utility/codes/portfolio/img.jpg';
import portfolioHTML from '../Utility/codes/portfolio/html.txt';
import portfolioCSS from '../Utility/codes/portfolio/css.txt';
import portfolioJS from '../Utility/codes/portfolio/js.txt';




const ProjectData = {
    about: {
        article: (<article className='about'>
            <h1>About Me</h1>
                <p> My name is Max Houston and I am currently learning how to be a full stack engineer through Codecademy. 
                    This website is my portfolio for the work I have completed so far. The main projects will have a code 
                    viewer on the right side of the screen that shows the different code for each project and a description 
                    of the project on the left. The more projects page will have a list of other work and have links to 
                    their GitHub repositories. I will be updating this site regularly with new contentent and my GitHub 
                    page will always have my most recent work. I would love to hear any feedback you have on my projects 
                    as I still have a whole lot to learn.
                </p>
                <p>Email address: <span>maxhouston@gmail.com</span><br />
                   Github page: <a href="https://github.com/MaxwellHouston">https://github.com/MaxwellHouston</a>
                </p>
        </article>),
        img: aboutImg,
        html: aboutHTML,
        css: aboutCSS,
        js: aboutJS,
    },
    gameOfWar: {
        article: (<article className='gameOfWar'>
            <h1>Game<br />Of War</h1>
                <p>This is a personal project that I started when learning JavaScript. It began as just building a
                    deck of cards as an array but as I learned more it grew into a full game. Then while learning 
                    then while learning HTML and CSS I made it playable on a web browser. Everytime I learn something
                    relevant I add to the project.
                </p>
                <div class="lang game">
                    <h3>Languages Used</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                </div>                  
        </article>),
        img: gameImg,
        html: gameHTML,
        css: gameCSS,
        js: gameJS,

    },
    golfIsland: {
        article: (<article className='golfIsland'>
            <h1>Island Golf</h1>
                <p>This is a fake website I made for the Codecademy project - Responsive Club Website. It is based
                    around a fake golf club and it was made primarily with flex box, percentages, and rem units to
                    resize and fit any screen. The next step will be to add JavaScript to make the sections seperate,
                    similar to this website.
                </p>
                <div class="lang island">
                    <h3>Languages Used</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
        </article>),
        img: golfIslandImg,
        html: golfIslandHTML,
        css: golfIslandCSS,
        js: golfIslandJS,

    },
    portfolio: {
        article: (<article className='portfolio'>
            <h1>Portfolio</h1>
                <p>This site is the portfolio webpage I made for the Codecademy project - Personal Portfolio
                    Website. The layout is made on a grid with the sections being flex boxes. All of the buttons
                    and transitions were made with JavaScript. This page will be updated whenever I complete a 
                    project.
                </p>
                <div class="lang portfolio">
                    <h3>Language Used</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                </div>
        </article>),
        img: portfolioImg,
        html: portfolioHTML,
        css: portfolioCSS,
        js: portfolioJS,

    }
}


export default ProjectData;