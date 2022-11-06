import React from 'react'

// Children Components
import { ScreenTitle } from '../../../components/UI/Title/ScreenTitle/ScreenTitle'

// Style
import cl from './Rating.module.css'

// Component
export const Rating = () => {
  return (
    <div className={cl.Rating}>
      <ScreenTitle>Rating of players</ScreenTitle>
      <table>
        <tr>
          <th>Place</th>
          <th>Name</th>
          <th>Played</th>
          <th>Win</th>
          <th>Lost</th>
          <th>Scores</th>
        </tr>
        <tr>
          <td> undefined </td>
          <td> undefined </td>
          <td> undefined </td>
          <td> undefined </td>
          <td> undefined </td>
          <td> undefined </td>
        </tr>
      </table>
    </div>
  )
}
