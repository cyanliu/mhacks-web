import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import { OutlineTextField } from '../../components';

const Favicon = require('../../../static/blackout/favicon.png');

import Header from './header.jsx';
import Footer from './footer.jsx';

import { SectionHeader, SectionBody } from './section_components.jsx';

const contentHeight = 120;
const sidebarWidth = 200;

const Container = styled.div`
    display: flex;
    height: ${props => props.height - contentHeight*2}px;
    width: 60%;
    margin: ${contentHeight}px auto;
`;

const Sidebar = styled.div`
    width: ${sidebarWidth}px;
`;

const SidebarLinks = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

const SidebarLink = styled.li`
    fontSize: 16px;
    padding: 10px 0;

    a {
        color: gray;
        textDecoration: none;
    }

    :hover {
        color: darkorange;
    }
`;

const Content = styled.div`
    width: calc(100% - ${sidebarWidth}px);
    height: 100%;
    overflowX: hidden;
    overflowY: scroll;
`;

/* Page Component */
class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = { width: '0', height: '0' };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();

        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>MHacks Nano</title>

                    <link rel="icon" type="image/x-icon" href={Favicon} />
                </Helmet>

                <Header />

                <Container {...this.state}>
                    <Sidebar>
                        <nav>
                            <SidebarLinks>
                                <SidebarLink><a href="#section-about">About MHacks</a></SidebarLink>
                                <SidebarLink><a href="#section-what-is-nano">MHacks Nano</a></SidebarLink>
                                <SidebarLink><a href="#section-faq">FAQ</a></SidebarLink>
                                <SidebarLink><a href="#section-apply">Apply</a></SidebarLink>
                            </SidebarLinks>
                        </nav>
                    </Sidebar>

                    <Content>
                        <div id="about">
                            <SectionHeader>About MHacks</SectionHeader>
                            <SectionBody>MHacks is a 36-hour hackathon run by University of Michigan students. At MHacks, we want to help you turn your ideas into reality. You're welcome to come with or without a team. We'll provide you with all the resources and mentors you need to help you work on something cool or learn new skills. You'll have the freedom to create a product, learn new techniques for your future work, or just have fun working on a project with friends. Moreover, we will offer you a chance to network with other creators and professionals. For newcomers and veterans alike, MHacks is a weekend experience you won’t want to miss.</SectionBody>
                        </div>

                        <div id="what-is-mhacks-nano">
                            <SectionHeader>What is MHacks Nano?</SectionHeader>
                            <SectionBody>MHacks is a 36-hour hackathon run by University of Michigan students. At MHacks, we want to help you turn your ideas into reality. You're welcome to come with or without a team. We'll provide you with all the resources and mentors you need to help you work on something cool or learn new skills. You'll have the freedom to create a product, learn new techniques for your future work, or just have fun working on a project with friends. Moreover, we will offer you a chance to network with other creators and professionals. For newcomers and veterans alike, MHacks is a weekend experience you won’t want to miss.</SectionBody>
                        </div>

                        <div id="faq">
                            <SectionHeader>FAQ</SectionHeader>
                            <SectionBody>MHacks is a 36-hour hackathon run by University of Michigan students. At MHacks, we want to help you turn your ideas into reality. You're welcome to come with or without a team. We'll provide you with all the resources and mentors you need to help you work on something cool or learn new skills. You'll have the freedom to create a product, learn new techniques for your future work, or just have fun working on a project with friends. Moreover, we will offer you a chance to network with other creators and professionals. For newcomers and veterans alike, MHacks is a weekend experience you won’t want to miss.

                            MHacks is a 36-hour hackathon run by University of Michigan students. At MHacks, we want to help you turn your ideas into reality. You're welcome to come with or without a team. We'll provide you with all the resources and mentors you need to help you work on something cool or learn new skills. You'll have the freedom to create a product, learn new techniques for your future work, or just have fun working on a project with friends. Moreover, we will offer you a chance to network with other creators and professionals. For newcomers and veterans alike, MHacks is a weekend experience you won’t want to miss.

                            MHacks is a 36-hour hackathon run by University of Michigan students. At MHacks, we want to help you turn your ideas into reality. You're welcome to come with or without a team. We'll provide you with all the resources and mentors you need to help you work on something cool or learn new skills. You'll have the freedom to create a product, learn new techniques for your future work, or just have fun working on a project with friends. Moreover, we will offer you a chance to network with other creators and professionals. For newcomers and veterans alike, MHacks is a weekend experience you won’t want to miss.
                            </SectionBody>
                        </div>
                        <div id="apply">
                            <SectionHeader>Apply</SectionHeader>
                            <SectionBody>
                                <OutlineTextField 
                                    
                                />
                            </SectionBody>
                        </div>
                    </Content>
                </Container>

                <Footer />
            </div>
        );
    }
}

export default HomePage;
