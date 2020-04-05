import React, {useState, useEffect} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';

function getFormattedDate(date) {
  let year = date.getFullYear();
  let month = (1 + date.getMonth()).toString().padStart(2, '0');
  let day = date.getDate().toString().padStart(2, '0');
  return month + '/' + day + '/' + year;
}

function TableView({columns, values, onRequestSort, orderBy, order, onRowClick, columnMaps = {}}) {
  const createSortHandler = (property) => (event) => {
    if (onRequestSort) {
      onRequestSort(event, property);
    }
  };

  const createClickHandler = (property) => (event) => {
    if (onRowClick) {
      onRowClick(event, property);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="Table View">
        <TableHead>
          <TableRow>
            {columns.map(column => (
              <TableCell
                align="left"
                key={column}
                sortDirection={orderBy === column ? order : false}
              >
                {onRequestSort ? (
                  <TableSortLabel
                    active={orderBy === column}
                    direction={orderBy === column ? order.toLowerCase() : 'ASC'}
                    onClick={createSortHandler(column)}
                  >
                    {columnMaps[column] || column}
                  </TableSortLabel>
                ) : (
                  <>
                    {columnMaps[column] || column}
                  </>
                )}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {values.map((value, index) => (
            <TableRow
              key={index}
              onClick={createClickHandler(value)}
            >
              {value.map((row, rowIndex) => {
                let displayValue = row;

                if (columns[rowIndex] === 'date') {
                  displayValue = getFormattedDate(new Date(displayValue));
                } else if (typeof displayValue === 'string') {
                  const hyperLinkRegex = /=HYPERLINK\((["'])(.*?)\1;\"(.*?)\"\)/i;
                  const matches = displayValue.match(hyperLinkRegex);
                  if (matches && matches.length) {
                    const url = matches[2];
                    const text = matches[3];
                    displayValue = (
                      <a href={url} target="_blank">{text}</a>
                    );
                  }
                }

                if (rowIndex === 0) {
                  return (
                    <TableCell component="th" scope="value">{displayValue}</TableCell>
                  );
                } else {
                  return (
                    <TableCell align="left">{displayValue}</TableCell>
                  );
                }
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableView;
