import React from 'react';
import PropTypes from "prop-types"
import { Redirect } from 'react-router-dom';

import NavBar from '../NavBar';
import SideBar from './SideBar';
import TitleBar from './TitleBar';
import MainContent from './MainContent';

export default class DashboardLayout extends React.Component {

    static defaultProps = {
        isLargeDevice: true
    };

    static propTypes = {
        user: PropTypes.object.required,
        logout: PropTypes.func,
        match: PropTypes.object,
        isLargeDevice: PropTypes.bool,
    };

    componentDidMount() {
        $('body').addClass('is-dashboard');
    }

    render() {
        const {user, logout, match, isLargeDevice} = this.props,
            isProjectsRoute = match.url === '/projects';

        return (
            user && user.id && !__MAINTENANCE__?(
                <React.Fragment>
                    <NavBar variant="dashboard" user={user} onSignOut={logout} isLargeDevice={isLargeDevice}/>
                    {isLargeDevice?(
                        <SideBar/>
                    ):null}
                    <TitleBar user={user} isLargeDevice={isLargeDevice} showBreadCrumbs={isProjectsRoute && !isLargeDevice}/>
                    <MainContent isLargeDevice={isLargeDevice} className={isProjectsRoute && !isLargeDevice?'has-breadcrumbs':''}/>
                </React.Fragment>
            ):(
                <Redirect from="*" to={`/${__MAINTENANCE__?'maintenance':''}`}/>
            )
        )
    }
}

