import { motion } from "framer-motion";
import styled from "styled-components";

const Test = ({ color }) => {
  const MotionWrapper = styled(motion.button)`
    background-color: ${color};
    height: 100px;
    width: 100px;
    border-radius: 50px;
    margin: 0.5rem;

    @media (max-width: 768px) {
      height: 30px;
      width: 30px;
      border-radius: 15px;
    }
  `;

  return (
    <MotionWrapper whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} />
  );
};

export default Test;
