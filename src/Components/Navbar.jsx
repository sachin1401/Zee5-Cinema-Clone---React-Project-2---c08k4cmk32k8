import React, { useState } from "react";
import {
  AppBar,
  Tabs,
  Tab,
  styled,
  Toolbar,
  InputBase,
  alpha,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AppsSharpIcon from "@mui/icons-material/AppsSharp";
import TranslateSharpIcon from "@mui/icons-material/TranslateSharp";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import "../style/Navbar.css";

const Navbar = (props) => {
  const [selectedTab, setSelectedTab] = useState(0); // Set the default selected tab index here
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  // Retrieve the user's name from local storage
  const loggedInUser = localStorage.getItem("loggedInUser");

  return (
    <>
      <AppBar sx={{ background: "#0f0617", color: "white", padding: "3px" }}>
        <Toolbar>
          {/* logo of website */}
          <div className="imgg">
            <Link to="./">
              <img
                src="https://www.zee5.com/images/ZEE5_logo.svg?ver=3.12.12"
                alt="ZeeApp Logo"
                className="nav-logo"
              />
            </Link>
          </div>
          <>
            {/* different tab section */}
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              aria-label="navigation tabs"
            >
              <Tab
                label="Home"
                component={Link}
                to="/"
                className="white-link"
              />
              <Tab
                label="Movies"
                component={Link}
                to="/under-construction"
                className="white-link"
              />
              <Tab
                label="TV Shows"
                component={Link}
                to="/under-construction"
                className="white-link"
              />
              <Tab
                label="Premium"
                component={Link}
                to="/under-construction"
                className="white-link"
              />
            </Tabs>
            <Link to="/under-construction" className="white-link">
              <AppsSharpIcon />
            </Link>
            {/* here search bar using mui */}
            <div className={`input-div ${loggedInUser ? "center" : ""}`}>
              <Button
                sx={{
                  marginLeft: "20px",
                  borderColor: "#7c2ebd",
                  width: "320px",
                  color: "white",
                  ":hover": {
                    borderColor: "#7d2ebd75",
                  },
                }}
                variant="outlined"
                startIcon={<SearchIcon />}
              >
                <Link to="/search" className="white-link">
                  Search for Movies, Shows, etc.
                </Link>
              </Button>
              {/* <input type="text" placeholder="Search for Movies, Shows, etc." /> */}
            </div>
            <Link
              to="/under-construction"
              className="white-link"
              style={{ paddingRight: "10px" }}
            >
              <TranslateSharpIcon />
            </Link>
            {/* login functionality */}
            {loggedInUser ? (
              // If a user is logged in, display their name and a "Logout" button
              <div>
                <span className="white-link" style={{ paddingRight: "10px" }}>
                  {" "}
                  Welcome {loggedInUser}
                </span>
                <Button
                  sx={{
                    // marginLeft: "20px",
                    borderColor: "#7c2ebd",
                    color: "white",
                    ":hover": {
                      borderColor: "#7d2ebd75",
                    },
                  }}
                  variant="outlined"
                  onClick={() => {
                    // Handle logout logic here, e.g., remove user data from local storage
                    localStorage.removeItem("loggedInUser");
                    // Redirect to the login page or any other desired action
                    window.location.href = "/";
                  }}
                >
                  Logout
                </Button>
              </div>
            ) : (
              // If no user is logged in, display the "Login" button
              <Button
                sx={{
                  // marginLeft: "20px",
                  borderColor: "#7c2ebd",
                  color: "white",
                  ":hover": {
                    borderColor: "#7d2ebd75",
                  },
                }}
                variant="outlined"
              >
                <Link to="./login" className="white-link">
                  Login
                </Link>
              </Button>
            )}
            <Button
              sx={{
                marginLeft: "15px",
                backgroundColor: "#a73dff",
                "&:hover": {
                  backgroundColor: "#a83dffb6",
                },
              }}
              variant="contained"
            >
              {/* <AccountBalanceIcon />{" "} */}
              <Link to="./buy-plan" className="white-link">
                BUYPlan
              </Link>
            </Button>
          </>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
