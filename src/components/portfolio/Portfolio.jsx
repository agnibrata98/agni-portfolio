import { useRef } from "react";
import "./portfolio.scss"
import {motion, useScroll,useSpring, useTransform} from "framer-motion"

const items = [
    {
        id:1,
        title:"React Commerce",
        img:"https://images.pexels.com/photos/4275893/pexels-photo-4275893.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sapiente, velit eligendi sunt quas distinctio eius sint voluptate quasi eum. Laudantium, tempora nisi fugit rem aliquid sequi! Ea, laboriosam esse?",
        link: "https://weather-app-blush-two-33.vercel.app/",
    },

    {
        id:2,
        title:"Elementor Ecommerce Website",
        img:"https://images.pexels.com/photos/461956/pexels-photo-461956.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sapiente, velit eligendi sunt quas distinctio eius sint voluptate quasi eum. Laudantium, tempora nisi fugit rem aliquid sequi! Ea, laboriosam esse?",
        link: "https://weather-app-blush-two-33.vercel.app/",
    },

    {
        id:3,
        title:"Wordpress Website",
        img:"https://images.pexels.com/photos/10778390/pexels-photo-10778390.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sapiente, velit eligendi sunt quas distinctio eius sint voluptate quasi eum. Laudantium, tempora nisi fugit rem aliquid sequi! Ea, laboriosam esse?",
        link: "https://weather-app-blush-two-33.vercel.app/",
    },

    {
        id:4,
        title:"React Commerce",
        img:"https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sapiente, velit eligendi sunt quas distinctio eius sint voluptate quasi eum. Laudantium, tempora nisi fugit rem aliquid sequi! Ea, laboriosam esse?",
        link: "https://weather-app-blush-two-33.vercel.app/",
    },
];

const Single = ({item})=>{
    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
        // offset:["end end", "start start"]
    })

    const y = useTransform(scrollYProgress, [0,1], [-500,500])

    return(
        <section>
            <div className="container">
                    <div className="wrapper">
                        <div className="imageContainer" ref = {ref}>
                        <img src={item.img} alt="" />
                        </div>
                        <motion.div className="textContainer" style={{y}}>
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                            <a href={item.link} target="blank"><button>See Demo</button></a>
                        </motion.div>
                    </div>
            </div>
        </section>
    )
}

function Portfolio() {

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["end end", "start start"]
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness:100,
        damping:20
    })

  return (
    <div className="portfolio" id="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div className="progressBar" style={{scaleX}}>

            </motion.div>
        </div>
        {items.map(item=>(
            <Single item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Portfolio