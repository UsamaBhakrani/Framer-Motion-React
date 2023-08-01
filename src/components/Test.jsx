import { motion } from "framer-motion";
import styled from "styled-components";

const Test = () => {
  const Wrapper = styled.div`
    background-color: cyan;
    height: 100px;
    width: 100px;
    border-radius: 50px;
  `;

  return (
    <Wrapper>
      <motion.div
        className="container"
        initial={{ opacity: 1, scale: 0.1 }}
        animate={{ opacity: 0, scale: 3}}
        transition={{ duration: 1 }}
      />
    </Wrapper>
  );
};

export default Test;
