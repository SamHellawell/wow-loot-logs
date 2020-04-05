import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TableView from '../components/table-view';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

import db from '../services/db';

const defaultQueries = [{
  label: 'Custom Query',
  query: 'select sqlite_version()'
}, {
  label: 'All Loot',
  query: 'SELECT * FROM lootlogs'
}, {
  label: 'Items dropped by boss',
  query: 'SELECT item, boss FROM lootlogs GROUP BY item ORDER BY boss'
}, {
  label: 'Awarded loot with logged reason',
  query: 'SELECT player,note,item,response,date FROM lootlogs WHERE note!=""'
}, {
  label: 'Awarded loot without logged reason',
  query: 'SELECT player,note,item,response,date FROM lootlogs WHERE note=""'
}, {
  label: 'Search by player name',
  query: 'SELECT * FROM lootlogs WHERE player LIKE "%Magi%"'
}, {
  label: 'Search by player name in Blackwing Lair',
  query: 'SELECT * FROM lootlogs WHERE (player LIKE "%Magi%" AND instance LIKE "%Blackwing%")'
}, {
  label: 'Caster DPS loot drops',
  query: 'SELECT * FROM lootlogs WHERE (class LIKE "%MAGE%" OR class LIKE "%WARLOCK%") ORDER BY class'
}, {
  label: 'Physical DPS drops',
  query: 'SELECT * FROM lootlogs WHERE (class LIKE "%WARRIOR%" OR class LIKE "%ROGUE%" OR class LIKE "%HUNTER%") ORDER BY class'
}, {
  label: 'Healer loot drops',
  query: 'SELECT * FROM lootlogs WHERE (class LIKE "%PRIEST%" OR class LIKE "%SHAMAN%" OR class LIKE "%DRUID%") ORDER BY class'
}, {
  label: 'Show all players awarded loot',
  query: 'SELECT player,date FROM lootlogs GROUP BY player ORDER BY date DESC'
}];

export default function RunQuery() {
  const [error, setError] = useState();
  const [query, setQuery] = useState(defaultQueries[0]);
  const [queryStr, setQueryStr] = useState(defaultQueries[0].query);
  const [queryResult, setQueryResult] = useState(db.execQuery('select sqlite_version()'));
  const inputLabel = React.useRef(null);

  function handleChange(event) {
    setQuery(event.target.value);
    setQueryStr(event.target.value.query);
  }

  function handleQueryStrChange(event) {
    setQueryStr(event.target.value);
  }

  function handleRunQuery() {
    setQueryResult(null);
    try {
      const result = db.execQuery(queryStr);
      setQueryResult(result);
    } catch (e) {
      setError(e.toString());
    }
  }

  return (
    <Box my={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        Run Query
      </Typography>

      <br />

      <FormControl variant="outlined" fullWidth>
        <InputLabel ref={inputLabel}>
          Default Queries
        </InputLabel>
        <Select
          value={query}
          onChange={handleChange}
          labelWidth={118}
          fullWidth
        >
          {defaultQueries.map((query, index) => (
            <MenuItem value={query} key={index}>{query.label}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <br /><br />

      <TextField
        rows={6}
        label="Query"
        multiline
        variant="outlined"
        fullWidth
        value={queryStr}
        onChange={handleQueryStrChange}
      />

      <br /><br />

      <Button onClick={handleRunQuery} variant="contained" color="primary">
        Run
      </Button>

      <br /><br />

      {queryResult ? (
        queryResult.map(result => (
          <>
            <Typography variant="h4" component="h1" gutterBottom>
              Result ({result.values.length})
            </Typography>

            <br />

            <TableView
              columns={result.columns}
              values={result.values}
            />
            <br /><br />
          </>
        ))
      ) : (
        <>
          {error ? error : 'Executing query...'}
        </>
      )}
    </Box>
  );
}
