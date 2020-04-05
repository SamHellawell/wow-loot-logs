import React, {useState, useEffect} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TableView from '../components/table-view';

import db from '../services/db';
import columnMaps from '../helpers/column-maps';

export default function PlayerStats({query}) {
  const [logsList, setLogsList] = useState();
  const [orderBy, setOrderBy] = useState('date');
  const [order, setOrder] = useState('DESC');
  const [playerName, setPlayerName] = useState(query.name || 'Magi');

  async function loadLogs() {
    const result = db.execQuery(`SELECT date,item,note,response,instance,boss FROM lootlogs WHERE player LIKE "%${playerName}-%" ORDER BY ${orderBy} ${order};`);
    setLogsList(result[0]);
  }

  function onRequestSort(event, property) {
    if (orderBy === property) {
      setOrder(order === 'ASC' ? 'DESC' : 'ASC');
    } else {
      setOrderBy(property);
      setOrder('DESC');
    }

    setLogsList(null);
    loadLogs();
  }

  useEffect(() => {
    if (!logsList) {
      loadLogs();
    }
  }, []);

  return (
    <Box my={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        Player: {playerName}
      </Typography>

      <br />

      {logsList ? (
        <>
          <TableView
            onRequestSort={onRequestSort}
            columns={logsList.columns}
            values={logsList.values}
            columnMaps={columnMaps}
            orderBy={orderBy}
            order={order}
          />
        </>
      ) : (
        <>
          Loading logs...
        </>
      )}
    </Box>
  );
}

PlayerStats.getInitialProps = ({query}) => {
  return {query};
};
