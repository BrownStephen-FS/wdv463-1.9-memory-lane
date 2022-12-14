import React from "react";
import { Link } from "react-router-dom";
import {FaHome} from "react-icons/fa";
import {BsFillSignpostFill, BsFillSignpost2Fill, BsSignpost, BsSignpost2} from "react-icons/bs";
import {GiPostOffice} from "react-icons/gi"

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
      <Link to="/page5" style={styles.links} className="navLink" title="Page 5">
      <BsSignpost2 />
      </Link>
      <Link to="/page6" style={styles.links} className="navLink" title="Page 6">
      <GiPostOffice />
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
    height: "90rem",
  },
  links: {
    padding: "1rem",
    textAlign: "center",
    display: "block",
    marginTop: "3rem",
    fontSize: "3rem",
  },
};
