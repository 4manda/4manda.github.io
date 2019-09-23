import React from 'react';
import '../../styles/navbar.css';
import TopNav from './TopNav';

const navList = [
  // ["home"],
  // ["about"],
  // ["kudos"], // credit, awknowledgment, gratitude, kudos, recognition, gramercy
];

class NavBar extends React.Component {
  toggleDrop(id) {
    const drop = document.getElementById(id);
    drop.classList.toggle("show");
    drop.previousSibling.classList.toggle("arrowdown")
  }

  toggleNavBar() {
    const x = document.getElementById("topnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  render() {
    return (
      <div className="topnav" id="topnav">
        <TopNav navList={navList} toggleDrop={(id) => this.toggleDrop(id)} toggleNavBar={() => this.toggleNavBar()} />
      </div>
    );
  }
}

export default NavBar;
