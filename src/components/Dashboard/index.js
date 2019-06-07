import React from 'react';
import { Link } from 'react-router-dom';
import { Label, Menu, Container, Header } from 'semantic-ui-react'
import logo from '../../logo.svg';
import './style.css';

const Dashboard = () => {
    return (
        <Container textAlign='center'>
            <Header as='h2' image={logo} content='React Component Demo' />
            <div className="menu-plane">
                <Menu vertical>
                    <Menu.Item name='lazydemo' as={Link} to='/lazydemo'>
                        <Label color='teal'>1</Label>
                        Lazy Demo
                    </Menu.Item>
                    <Menu.Item name='countdown' as={Link} to='/countdown'>
                        <Label color='teal'>2</Label>
                        Count Down Demo
                    </Menu.Item>
                    <Menu.Item name='timeline' as={Link} to='/timeline'>
                        <Label color='teal'>3</Label>
                        Timeline Demo
                    </Menu.Item>
                </Menu>
            </div>
        </Container>
        
    )
}

export default Dashboard;