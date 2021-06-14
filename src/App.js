import React from "react"
import { renderRoutes } from "react-router-config"
import Particles from "react-particles-js"

import Navigation from "./components/navigation"
import Footer from "./components/footer"
import Home from "./pages/home"
import Research from "./pages/research"
import Professor from "./pages/professor"
import Students from "./pages/students"
import Alumni from "./pages/alumni"
import Honors from "./pages/honors"
import Resources from "./pages/resources"
import Contact from "./pages/contact"

const particlesParameter = {
    particles: {
        color: {
            // gray, green, gold, pink, blue
            value: ["#4a4e69", "#84a98c", "#ffca3d", "#f2a2e3", "#64a6bd"],
        },
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 1750,
            },
        },
        line_linked: {
            enable_auto: true,
            color: "#8d99ae",
            enable: true,
            opacity: 0.03,
        },
        move: {
            direction: "right",
            speed: 0.4,
            random: true,
            straight: false,
            out_mode: "out",
            attract: {
                enable: true,
            },
        },
        size: {
            value: 1.6,
        },
        opacity: {
            anim: {
                enable: true,
                speed: 0.5,
                opacity_min: 0.1,
            },
        },
    },
    retina_detect: true,
}

const routesArr = [
    {
        title: "",
        component: Home,
    },
    {
        title: "research",
        component: Research,
    },
    {
        title: "professor",
        component: Professor,
    },
    {
        title: "students",
        component: Students,
    },
    {
        title: "alumni",
        component: Alumni,
    },
    {
        title: "honors",
        component: Honors,
    },
    {
        title: "resources",
        component: Resources,
    },
    {
        title: "contact",
        component: Contact,
    },
]

const routes = routesArr.map(({ title, component }) => {
    return {
        path: process.env.PUBLIC_URL + "/" + title,
        component: component,
        exact: title === "" ? true : false,
    }
})

const App = () => {
    const mainSec = (
        <div className={mainSecClass}>
            <Navigation />
            {renderRoutes(routes)}
        </div>
    )

    return (
        <div className={appClass}>
            <Particles className={particleClass} params={particlesParameter} />
            {mainSec}
            <Footer />
        </div>
    )
}

export default App

const appClass = "flex flex-column min-vh-100 pa3 tc"
const mainSecClass = "flex-auto pb4"
const particleClass = "z--1 fixed absolute--fill"
