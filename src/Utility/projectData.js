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
//import golfIslandJS from '../Utility/codes/golfIsland/js.txt';
//Portfolio
import portfolioImg from '../Utility/codes/portfolio/img.jpg';
import portfolioHTML from '../Utility/codes/portfolio/html.txt';
import portfolioCSS from '../Utility/codes/portfolio/css.txt';
import portfolioJS from '../Utility/codes/portfolio/js.txt';
//Flexbox
import flexboxImg from '../Utility/codes/flexbox/img.jpg';
import flexboxHTML from '../Utility/codes/flexbox/html.txt';
import flexboxCSS from '../Utility/codes/flexbox/css.txt';
//import flexboxJS from '../Utility/codes/flexbox/js.txt';
// Fotomatic
import fotomaticImg from '../Utility/codes/fotomatic/img.jpg';
import fotomaticHTML from '../Utility/codes/fotomatic/html.txt';
import fotomaticCSS from '../Utility/codes/fotomatic/css.txt';
//import fotomaticJS from '../Utility/codes/fotomatic/js.txt';
//CheatSheet
import cheatSheetImg from '../Utility/codes/cheatSheet/img.jpg';
import cheatSheetHTML from '../Utility/codes/cheatSheet/html.txt';
import cheatSheetCSS from '../Utility/codes/cheatSheet/css.txt';
//import cheatSheetJS from '../Utility/codes/cheatSheet/js.txt';
//StyleGuide
import styleGuideImg from '../Utility/codes/styleGuide/img.jpg';
import styleGuideHTML from '../Utility/codes/styleGuide/html.txt';
import styleGuideCSS from '../Utility/codes/styleGuide/css.txt';
//import styleGuideJS from '../Utility/codes/styleGuide/js.txt';
//Calculator
import calculatorImg from '../Utility/codes/calculator/img.jpg';
import calculatorHTML from '../Utility/codes/calculator/html.txt';
import calculatorCSS from '../Utility/codes/calculator/css.txt';
import calculatorJS from '../Utility/codes/calculator/js.txt';
//Appointment
import appointmentImg from '../Utility/codes/appointment/img.jpg';
import appointmentHTML from '../Utility/codes/appointment/html.txt';
import appointmentCSS from '../Utility/codes/appointment/css.txt';
import appointmentJS from '../Utility/codes/appointment/js.txt';
//Empty
import empty from '../Utility/codes/empty.txt';


const ProjectData = {

    empty: {
        name: 'empty',
        txt: empty
    },
    about: {
        name: 'About',
        section: 'main',
        value: 'about',
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
        name: 'Game of War',
        section: 'main',
        value: 'gameOfWar',
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
    calculator: {
        name: 'Calculator',
        section: 'main',
        value: 'calculator',
        article: (<article className='calculator'>
            <h1>Psychrometric Calculator</h1>
                <p>
                This web app is a calculator that takes in two inputs of either: Temperature, Dew Point, or Relative Humidity. 
                The conversion equations are stored in a library object then used to solve for the input not used.  
                The main use for this web app is to help make calculations for 
                people working in the Water Mitigation field, or studying Psychrometrics.
                </p>
                <div class="lang island">
                    <h3>Languages Used</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                    </ul>
                </div>
        </article>),
        img: calculatorImg,
        html: calculatorHTML,
        css: calculatorCSS,
        js: calculatorJS,

    },
    appointment: {
        name: 'Appointment',
        section: 'main',
        value: 'appointment',
        article: (<article className='appointment'>
            <h1>Appointment App</h1>
                <p>
                The function of this web app is to recive inputs to create contacts and appointments then store them in a state.    
                Both the contacts and appointments are shown in lists below the enrty forms. Once this web app is connected to a
                server that can store the data it will become functional.
                </p>
                <div class="lang portfolio">
                    <h3>Language Used</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                    </ul>
                </div>
        </article>),
        img: appointmentImg,
        html: appointmentHTML,
        css: appointmentCSS,
        js: appointmentJS,

    },
    more: {
        name: 'More',
        section: 'none',
        value: 'more',
        img: flexboxImg,
        html: flexboxHTML,
        css: flexboxCSS,
        //js: flexboxJS,
    },
    flexbox: {
        name: 'Flexbox',
        section: 'more',
        value: 'flexbox',
        img: flexboxImg,
        html: flexboxHTML,
        css: flexboxCSS,
        //js: flexboxJS,
    },
    fotomatic: {
        name: 'Fotomatic',
        section: 'more',
        value: 'fotomatic',
        img: fotomaticImg,
        html: fotomaticHTML,
        css: fotomaticCSS,
        //js: fotomaticJS,
    },
    cheatSheet: {
        name: 'CheatSheet',
        section: 'more',
        value: 'cheatSheet',
        img: cheatSheetImg,
        html: cheatSheetHTML,
        css: cheatSheetCSS,
        //js: cheatSheetJS,
    },
    styleGuide: {
        name: 'Style Guide',
        section: 'more',
        value: 'styleGuide',
        img: styleGuideImg,
        html: styleGuideHTML,
        css: styleGuideCSS,
        //js: styleGuideJS,
    },
    golfIsland: {
        name: 'Golf Island',
        section: 'more',
        value: 'golfIsland',
        img: golfIslandImg,
        html: golfIslandHTML,
        css: golfIslandCSS,
        //js: golfIslandJS,
    },
    portfolio: {
        name: 'Portfolio',
        section: 'more',
        value: 'portfolio',
        img: portfolioImg,
        html: portfolioHTML,
        css: portfolioCSS,
        js: portfolioJS,
    },
    
}


export default ProjectData;