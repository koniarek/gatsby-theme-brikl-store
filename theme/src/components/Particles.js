import React, { Component } from "react"
import Particles from "react-particles-js"

class Canvas extends Component {
  state = { width: "0px" }
  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener("resize", this.updateWindowDimensions)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions)
  }
  updateWindowDimensions = () => {
    this.setState({
      width: `${window.innerWidth}px`,
    })
  }
  render() {
    const { width } = this.state
    return (
      <Particles
        height="70vh"
        width={width}
        params={{
          particles: {
            number: {
              value: 150,
              density: {
                enable: true,
                value_area: 600,
              },
            },
            color: {
              value: ["#a6026a", "#FBD43C", "#77C696", "#5BCBF0"],
            },
            shape: {
              type: ["circle", "triangle", "edge"],
              stroke: {
                width: 0,
                color: "#a6026a",
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.2,
              random: true,
              anim: {
                enable: true,
                speed: 0.1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 8,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false,
              },
            },
            move: {
              enable: true,
              speed: 0.3,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false,
              },
              onclick: {
                enable: false,
              },
              resize: true,
            },
          },
          retina_detect: true,
        }}
      />
    )
  }
}

export default Canvas
