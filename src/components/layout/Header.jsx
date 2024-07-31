import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    ListItemIcon,
    ListItemText,
    MenuItem,
    IconButton,
    Popover,
    Avatar,
    Button,
    Divider,
} from "@mui/material";
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 250;

const headerMenu = [
    { id: 0, title: "My Profile", icon: '', slugs: "/profile" },
];

// Styled components using @mui/system
const AppBarStyled = styled(AppBar)(({ theme }) => ({
    height: "85px",
    display: "flex",
    justifyContent: "center",
    background: "#360374 !important",
    color: "white !important",
    boxShadow: "none",
    [theme.breakpoints.up("md")]: {
        width: `calc(100% - ${drawerWidth}px) !important`,
        marginLeft: drawerWidth,
    },
}));

const ToolbarStyled = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
});

const Title = styled(Typography)(({ theme }) => ({
    fontFamily: "Poppins, sans-serif",
    fontSize: "1rem",
    fontWeight: 600,
    lineHeight: "25px",
    alignItems: "center",
    marginRight: 10,
}));

const Subtitle = styled(Typography)(({ theme }) => ({
    color: "white !important",
    fontFamily: "Poppins, sans-serif",
    flexGrow: 1,
    fontSize: "1rem",
    fontWeight: 600,
    lineHeight: "25px",
    marginLeft: 6,
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
    color: "white !important",
    [theme.breakpoints.up("md")]: {
        display: "none",
    },
}));

const LoggedInUser = styled(Typography)(({ theme }) => ({
    marginRight: "6px",
    fontFamily: "Poppins, sans-serif",
    fontSize: 14,
    fontWeight: 400,
    color: "#1D2939 !important",
}));

const LogoutButton = styled(Button)(({ theme }) => ({
    fontFamily: "Poppins, sans-serif",
    fontSize: 11,
    fontWeight: 500,
    textTransform: "none",
    backgroundColor: "#ecc4f5 !important",
    color: "#360374 !important",
    padding: theme.spacing(1, 2),
}));

// Styled Popover component
const CustomPopover = styled(Popover)(({ theme }) => ({
    "& .MuiPopover-paper": {
        width: 200,
        height: 135,
        padding: theme.spacing(0.5),
        border: "1px solid #E4E6EF",
    },
}));

const Header = ({ handleDrawerToggle, isMobile }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (path) => {
        handleMenuClose();
        navigate(path);
    };

    const text = {
        fontFamily: "Poppins, sans-serif",
        fontSize: "0.7rem",
        fontWeight: 400,
    };

    return (
        <AppBarStyled position="fixed">
            <ToolbarStyled>
                {isMobile && (
                    <MenuButton edge="start" color="inherit" onClick={handleDrawerToggle}>
                        <MenuIcon />
                    </MenuButton>
                )}

                <Title variant="h6" className='md:text-base text-sm  font-semibold lg:ml-3'>
                    {location.pathname === '/customers' ? 'Customer Management' :
                        location.pathname === '/ai-management' ? 'AI Identity Management' :
                            location.pathname === '/analytics' ? 'Analytics & Reporting' :
                                location.pathname === '/access-control' ? 'Access Control' :
                                    location.pathname === '/notifications' ? 'Notifications' :
                                    location.pathname === '/integration' ? 'Integration' :
                                        'Dashboard'}
                </Title>

                <div className="flex items-center justify-center">
                    <Subtitle variant="h6" className='md:text-base text-sm  font-semibold'>
                        Admin
                    </Subtitle>
                    <div onClick={handleMenuOpen}>
                        <IconButton>
                            <Avatar alt="User Name" src={''} style={{ marginLeft: "6px", height: 32, width: 32 }} />
                        </IconButton>
                    </div>
                </div>
            </ToolbarStyled>
            <CustomPopover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleMenuClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
            >
                {headerMenu.map((menu) => (
                    <MenuItem key={menu.id} onClick={() => handleMenuItemClick(menu.slugs)}>
                        <ListItemIcon style={{ minWidth: "28px" }}>
                            {/* <CustomIcon alt={menu.title} src={''} height={20} width={20} /> */}
                        </ListItemIcon>
                        <ListItemText primary={menu.title} primaryTypographyProps={{ style: text }} />
                    </MenuItem>
                ))}
                <Divider />
                <MenuItem>
                    <div className="text-center flex ml-6 text-xs p-1"> Invite team</div>
                </MenuItem>
                <Divider />
                <MenuItem>
                    <LogoutButton className='hover:bg-[#360374] hover:text-white'>
                        Sign Out
                    </LogoutButton>
                </MenuItem>
            </CustomPopover>
        </AppBarStyled>
    );
};

export default Header;
