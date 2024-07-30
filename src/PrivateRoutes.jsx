import React,{ lazy } from "react";
import Layout from "./components/layout/Layout.jsx";
  
const Dashboard = lazy(() => import('./components/dashboard/Dashboard.jsx'))
const Sales_leads = lazy(() => import('./components/sales-leads/Sales_leads.jsx'))
const Edit_Ai = lazy(() => import('./components/manage_ai/Edit_Ai.jsx'))
const Integration = lazy(() => import('./components/integration/Integration.jsx'))
const Billing = lazy(() => import('./components/billing/Billing.jsx'))

export default function privateRoutes() {
  return {
    element: <Layout/>,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/sales", element: <Sales_leads /> },
      {path:"/edit-ai",element:<Edit_Ai/>},
      {path:"/integration",element:<Integration/>},
      {path:"/billing",element:<Billing/>},
    ],
  };
}