import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as Link } from 'react-router-dom';

class DropDown extends React.Component {
  render() {
    const dropList = this.props.droplist;
    const listItems = dropList.map((item, i) => {
      const name = item[0];
      if (item.length === 1) {
      return <Link key={i} to={"/" + name} onClick={() => this.props.toggleNavBar()}>{name}</Link>
      } else {
        return (
          <div key={i} className="dropdown">
            <a className="dropbtn" onClick={() => this.props.toggleDrop(name)}>
              {name}
            </a>
            <DropDown droplist={item[1]} name={name} toggleNavBar={() => this.props.toggleNavBar()} toggleDrop={(id) => this.props.toggleDrop(id)} subcontent={true} />
          </div>
        );
      }
    });
    if (this.props.subcontent) {
      return <div className="dropdown-content subcontent" id={this.props.name}>{listItems}</div>
    } else {
      return <div className="dropdown-content" id={this.props.name}>{listItems}</div>
    }
  }
}

DropDown.propTypes = {
  droplist: PropTypes.array.isRequired,
  subcontent: PropTypes.object,
  name: PropTypes.string,
  toggleNavBar: PropTypes.func.isRequired,
  toggleDrop: PropTypes.func.isRequired,
};

export default DropDown;
