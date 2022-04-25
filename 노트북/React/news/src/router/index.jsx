import React from 'react';
import { /* Link , */ NavLink} from 'react-router-dom'
import './router.css'

const Router = (props) => {
    return (
        <header>
            <NavLink to="/news">news</NavLink>
            <NavLink to="/jobs">jobs</NavLink>
            <NavLink to="/ask">ask</NavLink>
        </header>
    )
};

export default Router;