import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as Link } from 'react-router-dom';
import DropDown from './DropDown';

class TopNav extends React.Component {
  render() {
    const listItems = this.props.navList.map((item, i) => {
      const name = item[0];
      if (item.length === 1) {
        return <li key={i}><Link to={"/" + name} onClick={() => this.props.toggleNavBar()}>{name}</Link></li>
      } else {
        return (
          <li key={i} className="dropdown">
            <a className="dropbtn" onClick={() => this.props.toggleDrop(name)}>
              {name}
            </a>
            <DropDown droplist={item[1]} name={name} toggleNavBar={() => this.props.toggleNavBar()} toggleDrop={(id) => this.props.toggleDrop(id)} />
          </li>
        );
      }
    });
    return (
      <ul>
        { listItems }
        { !!listItems[1] && (
          <li className="icon">
            <a onClick={() => this.props.toggleNavBar()}>&#9776;</a>
          </li>
        ) }
      </ul>
    );
  }
}

TopNav.propTypes = {
  navList: PropTypes.array,
  toggleDrop: PropTypes.func.isRequired,
  toggleNavBar: PropTypes.func.isRequired,
};

export default TopNav;
