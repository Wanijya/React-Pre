import React from "react";
import { motion } from "motion/react";

const App = () => {
  return (
    <div>
      <motion.div
        className="box"
        animate={{ x: 1000, rotate: 360 }}
        transition={{
          duration: 2,
          delay: 1,
          repeat: Infinity,
          ease: "anticipate",
        }}
      ></motion.div>
      <motion.div
        className="circle"
        animate={{ x: 1100, scale: 0.5 }}
      ></motion.div>
      <motion.h1
        animate={{ x: 1000 }}
        transition={{ duration: 2, delay: 1, ease: "anticipate" }}
        drag
        whileDrag={{ scale: 1.2 }}
        dragConstraints={{ left: 0, top: 0, right: 1100, bottom: 0 }}
      >
        Hellooo!!
      </motion.h1>
      <motion.div
        className="box"
        animate={{
          x: [0, 800, 800, 0, 0],
          y: [0, 0, 300, 300, 0],
          rotate: [0, 360, 0, -360, 0],
        }}
        transition={{ duration: 4, delay: 1 }}
      ></motion.div>
      <motion.div
        className="boxt"
        whileHover={{ backgroundColor: "green" }}
        whileTap={{scale: 0.8}}
        drag
        whileDrag={{scale: 0.8}}
        dragConstraints={{left:0, top:0, right:1100, bottom:0}}
        dragDirectionLock="true"
      ></motion.div>
    </div>
  );
};

export default App;
