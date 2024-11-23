import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";

function MainNavbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Simulating logged-in status
  const userName = "John Doe"; // Example user name
  const userAvatar = "https://via.placeholder.com/40"; // Placeholder user avatar image URL

  const handleLogout = () => {
    console.log("User logged out"); // Replace with actual logout logic
    setIsLoggedIn(false);
  };

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 185 45"
            width={"100px"}
            style={{ fill: "white" }}
          >
            <g>
              <path d="M20.57,15.33c-.39-.74-1.1-1.12-2.12-1.12-.57,0-1.03.15-1.4.46-.37.3-.66.8-.87,1.48-.21.68-.36,1.57-.44,2.67-.08,1.1-.13,2.45-.13,4.04,0,1.7.06,3.07.17,4.12.12,1.05.29,1.86.54,2.44.24.58.55.97.91,1.17.37.2.79.3,1.27.3.4,0,.77-.07,1.12-.21.35-.14.65-.41.9-.82.25-.41.45-.99.6-1.73.15-.74.22-1.72.22-2.94h4.53c0,1.22-.09,2.37-.28,3.46s-.54,2.04-1.05,2.86c-.51.82-1.24,1.46-2.17,1.92-.93.46-2.15.69-3.63.69-1.7,0-3.05-.27-4.06-.82-1.01-.55-1.78-1.33-2.31-2.36-.53-1.03-.88-2.25-1.04-3.68-.16-1.43-.24-3-.24-4.72s.08-3.27.24-4.7c.16-1.44.5-2.67,1.04-3.7.54-1.03,1.31-1.83,2.31-2.41,1.01-.58,2.36-.87,4.06-.87s2.89.26,3.82.79c.93.52,1.63,1.19,2.09,2,.46.81.75,1.68.87,2.61.12.93.17,1.81.17,2.63h-4.53c0-1.64-.19-2.83-.58-3.57Z" />
              <path d="M32.98,11.31v8.59h5.29v-8.59h4.53v22.47h-4.53v-9.97h-5.29v9.97h-4.53V11.31h4.53Z" />
              <path d="M55.92,11.31l5.95,22.47h-4.72l-1.04-4.75h-5.98l-1.04,4.75h-4.72l5.95-22.47h5.6ZM55.32,25.32l-2.17-10.1h-.06l-2.17,10.1h4.41Z" />
              <path d="M74.86,15.03h-4.91v18.75h-4.53V15.03h-4.91v-3.71h14.35v3.71Z" />
              <path d="M89.97,15.03h-4.91v18.75h-4.53V15.03h-4.91v-3.71h14.35v3.71Z" />
              <path d="M104.47,15.03h-8.02v5.29h7.55v3.71h-7.55v6.04h8.34v3.71h-12.87V11.31h12.55v3.71Z" />
              <path d="M115.42,11.31c1.89,0,3.36.48,4.41,1.43,1.05.95,1.57,2.41,1.57,4.36,0,1.51-.3,2.74-.91,3.7-.61.96-1.55,1.57-2.83,1.84v.06c1.13.17,1.96.54,2.49,1.1s.85,1.48.98,2.74c.04.42.07.88.09,1.37.02.49.04,1.04.06,1.65.04,1.2.1,2.11.19,2.74.13.63.4,1.06.82,1.29v.19h-4.91c-.23-.31-.38-.68-.44-1.09-.06-.41-.1-.83-.13-1.27l-.12-4.31c-.04-.88-.26-1.57-.66-2.08-.4-.5-1.07-.76-2.01-.76h-2.42v9.5h-4.53V11.31h8.37ZM113.47,21.13c1.09,0,1.93-.26,2.52-.77.59-.51.88-1.38.88-2.6,0-2.08-1.05-3.11-3.15-3.11h-2.14v6.48h1.89Z" />
              <path d="M132.13,11.31c.92,0,1.78.09,2.56.28.79.19,1.46.5,2.03.94.57.44,1.01,1.03,1.32,1.76s.47,1.64.47,2.71c0,1.22-.28,2.26-.85,3.13-.57.87-1.42,1.46-2.55,1.78v.06c1.26.17,2.25.7,2.99,1.6.73.9,1.1,2.11,1.1,3.62,0,.88-.12,1.72-.35,2.52-.23.8-.62,1.49-1.18,2.09s-1.28,1.08-2.17,1.43c-.89.36-2,.54-3.32.54h-7.65V11.31h7.58ZM130.37,20.53c1.26,0,2.18-.23,2.75-.68.58-.45.87-1.21.87-2.28s-.26-1.83-.79-2.27c-.52-.44-1.35-.66-2.49-.66h-1.64v5.88h1.29ZM130.84,30.45c1.09,0,1.97-.24,2.64-.72.67-.48,1.01-1.37,1.01-2.67,0-.65-.09-1.19-.27-1.62-.18-.43-.42-.78-.72-1.04-.3-.26-.67-.45-1.09-.55-.42-.1-.88-.16-1.38-.16h-1.95v6.77h1.76Z" />
              <path d="M141.81,17.84c.16-1.44.5-2.67,1.04-3.7.53-1.03,1.31-1.83,2.31-2.41,1.01-.58,2.36-.87,4.06-.87s3.05.29,4.06.87c1.01.58,1.78,1.38,2.31,2.41.54,1.03.88,2.26,1.04,3.7.16,1.44.24,3,.24,4.7s-.08,3.29-.24,4.72c-.16,1.43-.5,2.65-1.04,3.68-.54,1.03-1.31,1.81-2.31,2.36-1.01.54-2.36.82-4.06.82s-3.05-.27-4.06-.82c-1.01-.55-1.78-1.33-2.31-2.36-.54-1.03-.88-2.25-1.04-3.68-.16-1.43-.24-3-.24-4.72s.08-3.27.24-4.7ZM146.21,26.4c.07,1.06.22,1.92.44,2.58.22.66.54,1.14.94,1.45.41.3.95.46,1.62.46s1.21-.15,1.62-.46c.41-.3.72-.79.94-1.45.22-.66.37-1.52.44-2.58.07-1.06.11-2.34.11-3.85s-.04-2.79-.11-3.84c-.07-1.05-.22-1.91-.44-2.58-.22-.67-.53-1.16-.94-1.46-.41-.3-.95-.46-1.62-.46s-1.21.15-1.62.46c-.41.3-.72.79-.94,1.46-.22.67-.37,1.53-.44,2.58-.07,1.05-.11,2.33-.11,3.84s.04,2.8.11,3.85Z" />
              <path d="M162.84,11.31l2.89,7.27,2.86-7.27h4.94l-5.22,11.11,5.6,11.36h-5.1l-3.24-7.61-3.21,7.61h-4.97l5.6-11.36-5.16-11.11h5Z" />
            </g>
            <path d="M185,45H0V0h185v45ZM3,42h179V3H3v39Z" />
          </svg>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link href="/plans" className="text-light">
              Plans
            </Nav.Link>
            <Nav.Link href="/contact" className="text-light">
              Contact
            </Nav.Link>
          </Nav>
          {isLoggedIn ? (
            <Dropdown align="end">
              <Dropdown.Toggle
                variant="light"
                id="user-avatar-dropdown"
                className="d-flex align-items-center border-0 bg-transparent"
              >
                <img
                  src={userAvatar}
                  alt="User Avatar"
                  className="rounded-circle me-2"
                  width={32}
                  height={32}
                />
                <span className="text-light">{userName}</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/dashboard">Dashboard</Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>Disconnect</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Button variant="warning" href="/login">
              Login
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
