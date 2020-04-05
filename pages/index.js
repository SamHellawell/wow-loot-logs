import React, {useState, useEffect} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TableView from '../components/table-view';

import logs from '../services/logs';
import columnMaps from '../helpers/column-maps';

export default function LogsTable() {
  const [logsList, setLogsList] = useState();
  const [orderBy, setOrderBy] = useState('date');
  const [order, setOrder] = useState('DESC');

  async function loadLogs() {
    const result = await logs.getUnformatted(orderBy, order);
    setLogsList(result);
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

  function handleClickRow(event, row) {
    // TODO
  }

  useEffect(() => {
    if (!logsList) {
      loadLogs();
    }
  }, []);

  return (
    <Box my={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        Loot Logs
      </Typography>

      <br />

      {logsList ? (
        <>
          <TableView
            onRowClick={handleClickRow}
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
