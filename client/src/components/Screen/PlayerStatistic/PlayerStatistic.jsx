import React from 'react'

// Children Components
import { ScreenTitle } from '../../../components/UI/Title/ScreenTitle/ScreenTitle'

// Style
import cl from './PlayerStatistic.module.css'

// Component
export const PlayerStatistic = () => {
  // С помощью Axios нужно получить данные с сервера и с их помощью срендерить таблицу, а то и несколько таблиц. А пока таблица-заглушка!

  return (
    <div className={cl.Statistic}>
      <ScreenTitle>Player Statistics</ScreenTitle>
      <table>
        <tr>
          <th>Title 1 (th 1)</th>
          <th>Title 2 (th 2)</th>
          <th>Title 3 (th 3)</th>
        </tr>
        <tr>
          <td>Text 1 (td 1)</td>
          <td>Text 2 (td 1)</td>
          <td>Text 3 (td 1)</td>
        </tr>
      </table>
    </div>
  )
}
