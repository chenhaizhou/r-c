import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import '../assets/css/header.css';

class Header extends Component {
  constructor(props) {
    super();
    this.state = {
        isShowMenu: false,
        isShowLang: false
    };
  }
  showMenu () {
      this.setState({
        isShowMenu: !this.state.isShowMenu
      })
    }
    showLang () {
      this.setState({
        isShowLang: !this.state.isShowLang
      })
    }
  render() {
    return (
      <header className="header">
        <nav className={this.state.isShowMenu ? 'show' : ''}>
          <span className="nav-btn" onClick={this.showMenu.bind(this)}><i className="icon-dehaze"></i></span>
          <ul className="nav">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/buy">Buy</Link></li>
            <li><Link to="/rent">Rent</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <a href="/"><img src={logo} className="logo" alt="logo" /></a>
        <div className={`language-wrap ${this.state.isShowLang ? 'show' : ''}`}>
          <span className="language-btn"  onClick={this.showLang.bind(this)}>
            <i className="icon-globe"></i>
            <em>简体中文</em>
            <i className="icon-arrow_drop_down"></i>
          </span>
          <ul className="language">
            <li><a href="/en">English</a></li>
            <li><a href="/zh">简体中文</a></li>
          </ul>
        </div>
      </header>
      )
  }
}

export default Header;