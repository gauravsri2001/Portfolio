import css from "../assets/css.png";
import html from "../assets/html.png";
import aws from "../assets/aws.png";
import data_analysis from "../assets/data_analysis.png";
import java from "../assets/java.png";
import js from "../assets/js.png";
import mysql from "../assets/mysql.png";
//import react_dev from "../assets/react_dev.jpeg";
import reactjs from "../assets/reactjs.png";
import tableau from "../assets/tableau.jpg";
import tailwind from "../assets/tailwind.png";
import web from "../assets/web.png";
import wireshark from "../assets/wireshark.png";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.jpeg";
import project3 from "../assets/project3.jpeg";

const services = [
    {
        title: "Front-End Developer",
        icon: web,
    },
    {
        title: "Data Analyst",
        icon: data_analysis,
    },
];

const technologies = [
    {
        name: "Java",
        icon: java,
    },
    {
        name: "MySQL",
        icon: mysql,
    },
    {
        name: "HTML5",
        icon: html,
    },
    {
        name: "CSS3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: js,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind",
        icon: tailwind,
    },
    {
        name: "AWS",
        icon: aws,
    },
    {
        name: "Tableau",
        icon: tableau,
    },
    {
        name: "Wireshark",
        icon: wireshark,
    },
    
];

const projects = [
    {
        name: "FlexiGuide",
        description: 
            "Interactive fitness application allowing users to explore diverse workout categories and access over 1000+ exercises with practical examples.",
        tags: [
            {
                name: "ReactJS",
                color: "green-text=gradient",
            },
            {
                name: "Material UI",
                color: "blue-text-gradient",
            },
            {
                name: "Rapid API",
                color: "pink-text-gradient",
            },
        ],
        image: project1,
        source_code_link: "https://github.com/gauravsri2001/FlexiGuide",
        source_deploy_link: "https://gauravsri2001.github.io/FlexiGuide/", 
    },

    {
        name: "E-commerce Insights: Cell Phone Brand Trend",
        description: "Utilized Tableau to analyze a vast dataset, revealing customer preferences for cellphone brands in e-commerce. Guided strategic decisions with actionable insights.",
        tags:[
            {
                name: "Tableau",
                color: "green-text=gradient",
            },
            {
                name: "MySQL",
                color: "blue-text-gradient",
            },
            {
                name: "Bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: project2,
        source_code_link: "https://github.com/gauravsri2001/E-commerce-Insights-Cell-Phone-Brand-Trends",
        
    },

    {
        name: "Travel_Buddy - a travel advisor app",
        description: "Created and deployed a Travel Companion App, combining Google Maps API, geolocation, and Rapid APIs for real-time data on nearby restaurants, hotels, and attractions.",
        tags:[
            {
                name: "Tableau",
                color: "green-text=gradient",
            },
            {
                name: "MySQL",
                color: "blue-text-gradient",
            },
            {
                name: "Bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: project3,
        source_code_link: "https://github.com/gauravsri2001/Travel_Buddy",
    },
];
export {services, technologies, projects};