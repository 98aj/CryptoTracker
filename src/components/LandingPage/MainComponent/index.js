import React from "react";
import "./style.css";
import Button from "../../Common/Button";
import iphone from "../../../assets/iphone.png";
import gradient from "../../../assets/gradient.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function MainComponent() {
  return (
    <div className="flex-parent">
      <div className="left-div">
        <motion.h1
          className="track-crypto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          className="real-time"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className="para-info"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 1, delay: 0.75 }}
        >
          Track crypto in real time using api, to try some fun click on
          dashbord.
        </motion.p>
        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Link to='/dashbord'><Button text={"dashbord"} /></Link>
          <Link><Button text={"share"} outline={true} /></Link>
        </motion.div>
      </div>
      <div className="right-div">
        <motion.img
          src={iphone}
          className="iphone"
          initial={{ y: -15 }}
          animate={{ y: 15 }}
          transition={{
            type: 'smooth',
            repeatType: 'mirror',
            duration: 2,
            repeat: Infinity,
          }}
        />
        <img src={gradient} className="gradient" />
      </div>
    </div>
  );
}
