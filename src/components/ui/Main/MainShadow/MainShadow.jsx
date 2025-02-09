import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function MainShadow({ topShadow }) {
  const gradientArray = [
    "linear-gradient(to bottom, rgba(60, 30, 15, 0.75) 20%,#121212 100%)",
    "linear-gradient(to bottom, rgba(40, 3, 60, 0.75) 20%,#121212 100%)",
    "linear-gradient(to bottom, rgba(60,  25,25, 0.75) 20%,#121212 100%)",
    "linear-gradient(to bottom, rgba(30, 20, 30, 0.75) 20%,#121212 100%)",
    "linear-gradient(to bottom, rgba(60, 45, 45, 0.75) 20%,#121212 100%)",
    "linear-gradient(to bottom, rgba(35, 60, 40, 0.75) 20%,#121212 100%)",
    "linear-gradient(to bottom, rgba(5, 5, 90, 0.75) 20%,#121212 100%)",
  ];

  const [currentGradient, setCurrentGradient] = useState(gradientArray[0]);

  useEffect(() => {
    if (topShadow) {
      const newGradient =
        gradientArray[Math.floor(Math.random() * gradientArray.length)];
      setCurrentGradient(newGradient);
    }else{
      setCurrentGradient("linear-gradient(to bottom , #11171f 20% , #121212 100%)")
    }
  }, [topShadow]);

  return (
    <div>
      <motion.div
        className="absolute -z-10 h-[250px] w-full top-0 left-0 transition-all"
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1, backgroundImage: currentGradient }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{
          backdropFilter: "blur(30px)",
        }}
      ></motion.div>

      <div
        className="absolute h-[90px] w-full top-[230px] left-0"
        style={{
          background:
            "linear-gradient(to top, rgba(18,18,18,1), rgba(18,18,18,0.85))",
          backdropFilter: "blur(30px)",
        }}
      ></div>
    </div>
  );
}
