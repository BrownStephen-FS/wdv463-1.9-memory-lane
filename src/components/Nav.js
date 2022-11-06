import React from "react";
import { Link } from "react-router-dom";
import {FaHome} from "react-icons/fa";
import {BsFillSignpostFill, BsFillSignpost2Fill, BsSignpost} from "react-icons/bs";

const Nav = () => {
  return (
    <nav style={styles.container} id="navBar">
      <Link to="/main" style={styles.links} className="navLink" title="Main">
        <FaHome />
      </Link>
      <Link to="/page2" style={styles.links} className="navLink" title="Page 2">
        <BsFillSignpostFill />
      </Link>
      <Link to="/page3" style={styles.links} className="navLink" title="Page 3">
        <BsFillSignpost2Fill />
      </Link>
      <Link to="/page4" style={styles.links} className="navLink" title="Page 4">
      <BsSignpost />
      </Link>
    </nav>
  );
};

export default Nav;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    backgroundColor: "#778899",
    height: "50rem",
  },
  links: {
    padding: "1rem",
    textAlign: "center",
    display: "block",
    marginTop: "3rem",
    fontSize: "3rem",
  },
};
