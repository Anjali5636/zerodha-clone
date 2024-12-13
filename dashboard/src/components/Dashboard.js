import React from 'react'
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import App from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from './GeneralContext';


 const Dashboard = () => {
    return (
        <div className='dashboard-container'>
            <GeneralContextProvider>
            <WatchList />
            </GeneralContextProvider>
           
            <div className='content'>
                <Routes>
                    <Route exact path="/" element={<Summary />} />
                    <Route exact path="/orders" element={<Orders />} />
                    <Route exact path="/holdings" element={<Holdings />} />
                    <Route exact path="/positions" element={<Positions />} />
                    <Route exact path="/funds" element={<Funds />} />
                    <Route exact path="/app" element={<App />} />
                </Routes>
            </div>
        </div>
    );
};

export default Dashboard;