import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
       
        return (
            <>
            <ul className="flex header justify-bw">
                <NavLink id="nav" activeClassName="active" exact to='/'>
                    <li>
                         Popular 
                    </li>
                </NavLink>
                <NavLink id="nav" activeClassName="active" to='/battle'>
                    <li>
                         Battle
                    </li>
                </NavLink>
            </ul>
            </>
        )
    }
}

export default Header