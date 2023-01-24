import React from 'react'
import "./Navbar.css"
import {MenuItems, MenuItems2} from './MenuItems'

class Navbar extends React.Component {
    render() {
        return (
            <nav className="NavbarItems">
                <ul classname="nav-menu-left">
                    {MenuItems2.map((item, index) =>{
                        return (
                            <li key={index}><a href={item.url}   classname={item.cName}>{item.title}</a></li>
                        )
                    })}
                </ul>
                <h2>Ecommerce Website</h2>
                <ol classname="nav-menu-right">
                    <li classname="search-bar">
                        <form class="form">
                            <button>
                                <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                                    <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </button>
                            <input class="input" placeholder="Type your text" required="" type="text" />
                            <button class="reset" type="reset">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </form>
                    </li>
                    {MenuItems.map((item, index) =>{
                        return (
                            <li key={index}><a href={item.url} classname={item.cName}><i class={item.icon}></i></a></li>
                        )
                    })}
                </ol>
            </nav>
        )
    }
}

export default Navbar;
