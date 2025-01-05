import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/transactions" element={<Dashboard />} />
      <Route path="/accounts" element={<Dashboard />} />
      <Route path="/investments" element={<Dashboard />} />
      <Route path="/creditCards" element={<Dashboard />} />
      <Route path="/loans" element={<Dashboard />} />
      <Route path="/services" element={<Dashboard />} />
      <Route path="/myPrivileges" element={<Dashboard />} />
      <Route path="/setting" element={<Settings />} />
    </Routes>
  );
};

export default AppRoutes;
