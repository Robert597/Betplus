import React from 'react';
import DataContext from '../dataContext/dataContext';

const Table = () => {
const {loading, data} = React.useContext(DataContext);
  return (
    <div>
        {loading && (
            <p className='loader'>Loading...</p>
        )}
        {
            !loading && (
                <div className='table'>
                    <h1>BetPlus Table</h1>
                    <table className='content-table'>
                        <thead>
                            <tr>
                                
                                <th>S/N</th>
                                <th>Fixture Id</th>
                                <th>Home</th>
                                <th>Away</th>
                                <th>Score</th>
                                <th>League</th>
                                <th>Date</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data?.map((data, i) => (
                                <tr>
                                    <td>
                                      {i}  
                                    </td>
                                    <td>
                                      {data?.fixtureId}  
                                    </td>
                                    <td>
                                      {data?.home?.name}  
                                    </td>
                                    <td>
                                      {data?.away?.name}  
                                    </td>
                                    <td>
                                   {data?.score?.home} - {data?.score?.away}
                                    </td>
                                    <td>
                                  {data?.league}
                                    </td>
                                    <td>
                                  {data?.date}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )
        }
    </div>
  )
}

export default Table