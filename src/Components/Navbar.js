import "./NavbarStyle.css";
import { Component } from "react";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <figure className="headline">
          <a href="/" className="icon-btn">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="/" className="icon-btn">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="/" className="icon-btn">
            <i className="fab fa-linkedin"></i>
          </a>
        </figure>
        <header>
          <a href="/" className="logo">
            Ahmad <span>Sher</span>
          </a>

          <nav className={this.state.clicked ? "links active" : "links"}>
            <ul>
              <li>
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="nav-link">
                  Services
                </a>
              </li>
              <li>
                <a href="/" className="nav-link">
                  About
                </a>
              </li>
              <li>
                <a href="/" className="nav-link">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="bars" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>

          <div className="icons">
            <a href="/" className="icon-btn">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="/" className="icon-btn">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="/" className="icon-btn">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </header>
      </>
    );
  }
}
export default Navbar;
