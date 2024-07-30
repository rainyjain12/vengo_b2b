import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme, useMediaQuery } from '@mui/material';
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';  
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { FaChartLine } from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";
import { FaRobot } from "react-icons/fa";
import { SiSimpleanalytics } from "react-icons/si";
import { FaLock, FaBell } from "react-icons/fa";
import Logo from "../../assets/images/vengo-logo.png";
import { PiAddressBookTabsFill } from "react-icons/pi";
import { padding } from "@mui/system";
import { FaPlus } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa6";
import { FaPlug } from "react-icons/fa6";

// Define styles using the sx prop
const drawerWidth = 250;
const menu = [
  { id: 0, title: "Manage AI", tabTitle:" AI Identity Management",icon:<FaRobot />, slugs: "/ai-management",
    children: [
      { id: 6, title: "Joe Markland", tabTitle: "", slugs: "/edit-ai" },
      { id: 7, title: "Sliver Marketing", tabTitle: "", slugs: "/edit-ai" },
      { id: 8, title: "Jason Sherman", tabTitle: "", slugs: "/edit-ai" },
      { id: 9, title: "Kristin LaSalle", tabTitle: "", slugs: "/edit-ai" },
      { id: 10, title: 'Create New AI', tabTitle: "", slugs: "/edit-ai" }
    ] 
   },
  { id: 1, title: "Analytics", tabTitle:"Dashboard", icon:<FaChartLine/> , slugs: "/dashboard" },
  { id: 2, title: "Customize",tabTitle:"",icon:<MdGroups2 />,  slugs: "/customize" },
  { id: 3, title: "Chat History", tabTitle:"Chat History",icon:<SiSimpleanalytics />, slugs: "/chat-history" },
  { id: 4, title: "Sales Leads", tabTitle:"Sales Leads",icon:<PiAddressBookTabsFill />, slugs: "/sales" },
  { id: 5, title: "Integration", tabTitle:"Integration",icon:<FaPlug />, slugs: "/integration" },
  { id: 11, title: "Billing", tabTitle:"Plan & Billing",icon:<FaCreditCard />, slugs: "/billing" },
  { id: 12, title: "Account", tabTitle:"Account Settings",icon:<FaUser />, slugs: "/settings" },
  { id: 13, title: "Team", tabTitle:"Manage Team",icon:<FaUserPlus />, slugs: "/team" },
];
const Sidebar = ({ setActiveItem, activeTabId, setActiveTabId, handleDrawerToggle, open, setOpen, isMobile }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState({});

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    const storedActiveTabId = localStorage.getItem("activeTabId");
    const storedActiveItem = localStorage.getItem("activeItem");

    if (storedActiveTabId && storedActiveItem) {
      setActiveTabId(parseInt(storedActiveTabId, 10));
      setActiveItem(storedActiveItem);
    }
  }, [setActiveItem, setActiveTabId]);

  const handleItemClick = (item) => {
    if (item.children) {
      setOpenMenu((prevState) => ({ ...prevState, [item.id]: !prevState[item.id] }));
    } else {
      navigate(item.slugs);
      setActiveTabId(item.id);
      setActiveItem(item.tabTitle);
      localStorage.setItem("activeTabId", item.id);
      localStorage.setItem("activeItem", item.tabTitle);
      isMobile && setOpen(false);
    }
  };

  const isSubMenuItemActive = (children) => {
    return children.some(child => child.id === activeTabId);
  };

  return (
    <Drawer
      variant={isMobile ? "temporary" : "persistent"}
      onClose={handleDrawerToggle}
      open={!isMobile ? true : open}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          backgroundColor: "#360374 !important",
          borderRight: "1px solid white !important",
        },
      }}
      anchor="left"
    >
      <ListItem className="flex flex-row items-center justify-end">
        {isMobile && (
          <IconButton onClick={handleDrawerToggle} sx={{ color:"white"}}>
             <CloseIcon />
          </IconButton>
        )}
      </ListItem>
      <div sx={{ display: "flex", justifyContent: "center", alignItems: "flex-start", background: "#360374 !important", p:2 }}>
        <img src={Logo} alt="Logo" />
      </div>
      <List sx={{ display: "flex", flexDirection: "column", gap: 1 , marginTop:"20px"}}>
        {menu.map((menuItem) => (
          <React.Fragment key={menuItem.id}>
            <ListItem
              button
              selected={activeTabId === menuItem.id || (menuItem.children && isSubMenuItemActive(menuItem.children))}
              onClick={() => handleItemClick(menuItem)}
              sx={{
                color: activeTabId === menuItem.id || (menuItem.children && isSubMenuItemActive(menuItem.children)) ? "#360374 !important" : 'inherit',
                '&:hover': {
                  backgroundColor: "#5348c8",
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: "30px", color: "white !important" }}>
                <span>{menuItem.icon}</span>
              </ListItemIcon>
              <ListItemText
                primary={menuItem.title}
                sx={{ fontFamily: "Poppins, sans-serif", fontSize: "0.875rem", color: "white !important" }}
              />
               {menuItem.children ? (
                openMenu[menuItem.id] ? <ExpandLess /> : <ExpandMore />
              ) : null}
            </ListItem>
              
              {menuItem.children && (
              <Collapse in={openMenu[menuItem.id]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {menuItem.children.map((child) => (
                    <ListItem
                      key={child.id}
                      button
                      selected={activeTabId === child.id}
                      onClick={() => handleItemClick(child)}
                      sx={{
                        pl: 4,
                        color: activeTabId === child.id ? "#360374 !important" : 'inherit',
                        '&:hover': {
                          backgroundColor: "#5348c8",
                        },
                      }}
                    >
                      {child.id==10? <span className="text-white mr-2">{<FaPlus/>}</span>:''}
                      <div
                      className="text-[#f1d4f8] text-sm"
                        sx={{ fontFamily: "Poppins, sans-serif"}}
                      >{child.title}</div>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
