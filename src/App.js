import React from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar'
import RightSidebar from './components/RightSidebar'
import Dashboard from './components/Dashboard'



export default function App() {
  return (
    <Div>
      <Sidebar />
      <RightSidebar />
      <Dashboard />
    </Div>
  )
}

const Div = styled.div `
position: relative;
`;