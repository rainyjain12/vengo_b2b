import React,{ lazy } from "react";
import Layout from "./components/layout/Layout.jsx";
  
const Dashboard = lazy(() => import('./components/dashboard/Dashboard.jsx'))
const Sales_leads = lazy(() => import('./components/sales-leads/Sales_leads.jsx'))
const Edit_Ai = lazy(() => import('./components/manage_ai/Edit_Ai.jsx'))
const Create_Ai = lazy(() => import('./components/manage_ai/Create_Ai.jsx'))
const Integration = lazy(() => import('./components/integration/Integration.jsx'))
const Billing = lazy(() => import('./components/billing/Billing.jsx'))
const Customize = lazy(()=>import('./components/customize/Customize.jsx'))
const History = lazy(()=>import("./components/chat-history/History.jsx"))
const Team = lazy(()=>import("./components/team/Team.jsx"))
const Account = lazy(()=>import("./components/account/Account.jsx"))
const Info = lazy(()=>import("./components/manage_ai/components/Info.jsx"))
const Photo = lazy(()=>import("./components/manage_ai/components/Photo.jsx"))
const Voice = lazy(()=>import("./components/manage_ai/components/Voice.jsx"))
const Websites = lazy(()=>import("./components/manage_ai/components/Websites.jsx"))
const Files = lazy(()=>import("./components/manage_ai/components/Files.jsx"))
const Greetings = lazy(()=>import("./components/manage_ai/components/Greetings.jsx"))
const Services = lazy(()=>import("./components/manage_ai/components/Services.jsx"))

export default function privateRoutes() {
  return {
    element: <Layout/>,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path:"/sales", element: <Sales_leads /> },
      {path:"/edit-ai",element:<Edit_Ai/>},
      {path:"/create-ai",element:<Create_Ai/>},
      {path:"/integration",element:<Integration/>},
      {path:"/customize",element:<Customize/>},
      {path:"/billing",element:<Billing/>},
      {path:"/chat-history",element:<History/>},
      {path:"/team",element:<Team/>},
      {path:"/settings",element:<Account/>},
      {path:"/business",element:<Info/>},
      {path:"/photo",element:<Photo/>},
      {path:"/voice",element:<Voice/>},
      {path:"/websites",element:<Websites/>},
      {path:"/files",element:<Files/>},
      {path:"/greetings",element:<Greetings/>},
      {path:"/services",element:<Services/>},
    ],
  };
}