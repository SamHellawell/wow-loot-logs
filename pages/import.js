import React, {useState, useEffect} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '../components/link';

import db from '../services/db';

const allowedColumns = [
	"player",
	"date",
	"item",
	"itemID",
	"itemString",
	"votes",
	"response",
	"class",
	"instance",
	"boss",
	"gear1",
	"gear2",
	"subType",
	"equipLoc",
	"note",
  "logid",
];

export default function Import() {
  const [csvData, setCSVData] = useState('');

  function handleCSVChange(event) {
    setCSVData(event.target.value);
  }

  function handleCSVImport(event) {
    event.preventDefault();

    const dataSplitter = `,`;
    const lineSplitter = `\n`;

    const lines = csvData.split(lineSplitter);
    const columns = lines[0].split(dataSplitter);
    columns.push('logid');

    console.log('importing', lines.length, 'records with columns', columns);

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i];
      const data = line.split(dataSplitter);

      const logId = data[0] + data[1] + data[2];
      data.push(logId);

      if (data.length === columns.length) {
        let query = 'INSERT INTO lootlogs("' + columns[0] + '"';
        let queryValues = '';

        for (let c = 0; c < columns.length; c++) {
          const column = columns[c];

          if (allowedColumns.indexOf(column) > -1) {
            if (c !== 0) {
              query += ', "' + column + '"';
            }

            let rowValue = data[c];
            if (column === 'date') {
              rowValue = new Date('20' + rowValue.split('/')[2], rowValue.split('/')[1] - 1, rowValue.split('/')[0]).getTime();
            }

            queryValues += (c === 0 ? '' : ', ') + '\'' + (rowValue + '').replace(/'/g, "") + '\'';
          }
        }

        query += ')\nVALUES(';
        query += queryValues + ');';

        try {
          db.runQuery(query);
          console.log('query success', query);
        } catch (error) {
          console.error('query failed', query)
          console.error('Unable to insert row ', (i-1), 'error:', error);
        }
      }
    }

    console.log('import done, export db and save it or browse pages')
  }

  function handleExport() {
    const binaryArray = db.export();
    const blob = new Blob([binaryArray], {type: "application/x-sqlite3"});
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'database.db';
    link.click();
  }

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Import Loot Logs
        </Typography>

        <form noValidate autoComplete="off" onSubmit={handleCSVImport}>
          <TextField rows={10} label="CSV Data" multiline onChange={handleCSVChange} value={csvData} fullWidth />
          <br /><br />
          <Button type="submit" variant="contained" color="primary">
            Import
          </Button>
        </form>

        <br /><br />

        <Button onClick={handleExport} variant="contained" color="primary">
          Export Database
        </Button>
      </Box>
    </Container>
  );
}
