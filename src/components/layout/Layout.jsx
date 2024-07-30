import React, { useState, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { styled } from '@mui/system';
import { useMediaQuery } from '@mui/material'; 
import { useTheme } from '@mui/material/styles';

import Sidebar from "./Sidebar";
import Header from "./Header";

const Root = styled('div')(({ theme }) => ({
    display: "flex",
    flexGrow: 1,
}));

const Content = styled('div')(({ theme }) => ({
    flexGrow: 1,
    [theme.breakpoints.up("md")]: {
        padding: theme.spacing(3),
        marginTop: 70,
    },
    marginTop: 100,
}));

const Layout = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(true);
    const [isMobileOpen, setIsMobileOpen] = useState(true);
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [activeItem, setActiveItem] = useState('Dashboard');
    const [activeTabId, setActiveTabId] = useState(0);

    const handleDrawerToggle = () => {
        setOpen(!open);
        if (isMobileOpen) {
            setIsMobileOpen(false);
        } else {
            setOpen(!open);
        }
    };

    return (
        <Root>
            <Sidebar 
                activeItem={activeItem} 
                setActiveItem={setActiveItem} 
                activeTabId={activeTabId} 
                setActiveTabId={setActiveTabId} 
                handleDrawerToggle={handleDrawerToggle} 
                isMobile={isMobile} 
                setOpen={setOpen} 
                open={open} 
            />
            <Header 
                activeTab={activeItem} 
                handleDrawerToggle={handleDrawerToggle} 
                isMobile={isMobile} 
            />
            <Content>
                <Suspense
                    fallback={
                        <div className="spinner-border suspense-fallback-loader" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    }
                >
                    <Outlet />
                </Suspense>
            </Content>
        </Root>
    );
};


export default Layout;
