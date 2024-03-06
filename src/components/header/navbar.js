import { Link } from "react-router-dom";

const Header = () => {
  const linkStyle={textDecoration:"none", margin:"20px"}

  return (
    <>


<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link style={linkStyle} to={"/"}>Home</Link>
        </li>
        <li class="nav-item">
          <Link style={linkStyle} to={"/about"}>About</Link>
        </li>
        <li class="nav-item">
          <Link style={linkStyle} to={"/profile"}>Profile</Link>
        </li>  
        <li class="nav-item">
          <Link style={linkStyle} to={"/setting"}>Setting</Link>
        </li> 
      </ul>
    </div>
  </div>
</nav>
    </>
  );
};

export default Header
