import React from "react";

import { ReactComponent as CaretIcon } from "./icons/caret.svg";
import { ReactComponent as BellIcon } from "./icons/bell.svg";
import { ReactComponent as MessengerIcon } from "./icons/messenger.svg";
import {ReactComponent as PlusIcon} from './icons/plus.svg';

const App = ({user,usericon}) => {
  return (
    <NavBar>
      <NavItem href="#" text={user} icon={usericon}/>
      <h5 className="username">{user}</h5>
      <NavItem href="#" icon={<PlusIcon />} />
      <NavItem href="#" icon={<MessengerIcon />} />
      <NavItem href="#" icon={<BellIcon />} />
      <NavItem href="#" icon={<CaretIcon />} />
    </NavBar>
  );
};

const NavBar = ({ children }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">{children}</ul>
    </nav>
  );
};

const NavItem = ({ href, text, icon }) => {
  return (
    <li className="list-item">
      <a href={href} className="list-anchor">
        {text?text && icon:icon}
      </a>
    </li>
  );
};

export default App;
