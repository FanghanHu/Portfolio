import React, {useState} from 'react';
import PageNav from './pageNav';

export default function PageNavbar(props) {
    const [activePage, setActivePage] = useState(props.pages?props.pages[0][1]:"");
    
    return (
        <ul className="page-navbar">
            {props.pages?props.pages.map(page => {
                return (
                    <PageNav 
                        key={page[1]}
                        activePage={activePage} 
                        setActivePage={setActivePage}
                        path={page[0]}
                        page={page[1]}
                    />
                );
            }):""}
        </ul>
    );
}