import styled from "styled-components";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;


import React from 'react'

export default function DashboardLayout() {
  return (
    <StyledDashboardLayout>
      <div>Statistics</div>
      <div>Todays activity</div>
      <div>chart for stay duration</div>
      <div>chart of sales </div>
    </StyledDashboardLayout>
  )
}
