import "./hero.scss"
import {motion} from "framer-motion"

const textVariants = {
    initial:{
        x: -500,
        opacity: 0,
    },
    animate:{
        x: 0,
        opacity: 1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity,
        },
    },
};

const sliderVariants = {
    initial:{
        x: 0,
    },
    animate:{
        x: "-220%",
        transition:{
            repeat: Infinity,
            repeatType:"mirror",
            duration:20,
        },
    },
};

function Hero() {
  return (
    <div className="hero">
        <div className="wrapper">
            <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                <motion.h2 variants={textVariants}>AGNI BRATA</motion.h2>
                <motion.h1 variants={textVariants}>Front End Developer and UI Designer</motion.h1>
                <motion.div className="buttons" variants={textVariants}>
                    <motion.button variants={textVariants}>
                        <a href="/#portfolio">See the latest works</a>
                    </motion.button>
                    <motion.button variants={textVariants}>
                        <a href="/#contact">Contact Me</a>
                    </motion.button>
                </motion.div>
                <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
            </motion.div>
        </div>
        <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
            React Developer And UI Designer
        </motion.div>
        <div className="imageContainer">
            <img src="/hero1img.png" alt="" />
        </div>
    </div>
  )
}

export default Hero