import React from 'react';
import {Link} from 'react-router-dom';

export default function PageNav(props) {
    return (
        <li 
            className={(props.activePage === props.page)?"page-nav active":"page-nav"}
            onClick={() => {props.setActivePage(props.page)}}
        >
            <Link to={props.path}>{props.page}</Link>
        </li>
    );
}