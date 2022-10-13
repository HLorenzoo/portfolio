import { Stack, Button, Box, Link } from "@chakra-ui/react";
import React from "react";
import "./SlideDrawer.css";
import { motion, isValidMotionProp, AnimatePresence } from "framer-motion";
import useAppContext from "../../../../context/context";

const SlideDrawer = ({ show }) => {
  let drawerClasses = show ? "side-drawer open" : "side-drawer";
  const { language, setlanguage } = useAppContext();
  return (
    <AnimatePresence>
      {show && (
        <Box
          className={drawerClasses}
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
        >
          <Stack
            mt="20px"
            spacing={12}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            alignContent="space-between"
          >
            <Link href="#inicio">
              <button
                className="hvr-underline-from-left"
                style={{ width: "200px" }}
              >
                <small style={{ color: "#19b1ff", fontSize: "13px" }}>
                  0.1{" "}
                </small>
                <p style={{ color: "white" }}>Home</p>
              </button>
            </Link>
            <Link href="#aboutme">
              <button
                className="hvr-underline-from-left"
                style={{ width: "200px" }}
              >
                <small style={{ color: "#19b1ff", fontSize: "13px" }}>
                  0.2{" "}
                </small>
                <p style={{ color: "white" }}>About</p>
              </button>
            </Link>
            <Link href="#proyectos">
              <button
                className="hvr-underline-from-left"
                style={{ width: "200px" }}
              >
                <small style={{ color: "#19b1ff", fontSize: "13px" }}>
                  0.3
                </small>
                <p style={{ color: "white" }}>Skills</p>
              </button>
            </Link>
            <Link href="#skills">
              <button
                className="hvr-underline-from-left"
                style={{ width: "200px" }}
              >
                <small style={{ color: "#19b1ff", fontSize: "13px" }}>
                  0.4
                </small>
                <p style={{ color: "white" }}>Projects</p>
              </button>
            </Link>
            <Link href="#contact">
              <button
                className="hvr-underline-from-left"
                style={{ width: "200px" }}
              >
                <small style={{ color: "#19b1ff", fontSize: "13px" }}>
                  0.5
                </small>
                <p style={{ color: "white" }}>Contact</p>
              </button>
            </Link>
            <a href={language === "es" ? "cv.pdf" : "resume.pdf"} download={language === "es" ? "cv" : "resume"} >
              <Button w="150px" colorScheme="linkedin" variant="outline">
                CV
              </Button>
            </a>
          </Stack>
        </Box>
      )}
    </AnimatePresence>
  );
};

export default SlideDrawer;
