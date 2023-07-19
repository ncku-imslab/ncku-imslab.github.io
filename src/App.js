import React, { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import Navigation from "./components/navigation";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer";

const App = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particlesOpts = {
    particles: {
      color: {
        value: ["#4a4e69", "#84a98c", "#ffca3d", "#f2a2e3", "#64a6bd"],
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "right",
        enable: true,
        outModes: {
          default: "out",
        },
        random: false,
        speed: 0.4,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 1750,
        },
        value: 100,
      },
      opacity: {
        anim: {
          enable: true,
          speed: 0.5,
          opacity_min: 0.1,
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 2 },
      },
    },
    detectRetina: true,
  }


  return (
    <div className="flex flex-column min-vh-100 pa3 tc">
      <Particles className="z--1 fixed absolute--fill" init={particlesInit} options={particlesOpts} />
      <div className="flex-auto pb4">
        <Navigation />
        <Outlet />
      </div>
      <Footer />
    </div>
  )
};

export default App
