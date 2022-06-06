import React from 'react'
import { Table } from 'react-bootstrap'

export const Leaderboard = () => {
  return (
    <div style={{margin: 60}}>
        <h1 style={{margin: 40}}>Leaderboard</h1>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>Position</th>
      <th>Username</th>
      <th>Points</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>@mdofds</td>
      <td>453</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>324</td>
    </tr>
  </tbody>
</Table>
    </div>
  )
}
