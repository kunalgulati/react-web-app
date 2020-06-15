import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';

import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 140
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function LocationDropdown() {
  const classes = useStyles();

  const [checked, setChecked] = React.useState([1]);
  const [location, setLocation] = React.useState('');


  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    console.log(value)
  };


  // const handleChange = event => {
  //   setLocation(event.target.value);
  // };

  return (
    <React.Fragment>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Location</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={location}
          // onChange={handleChange}
          label="Location"
        >
          {['Apple', 'Oranges', 'Celery'].map((commodityName) => {
            const labelId = `checkbox-list-secondary-label-${commodityName}`;
            return (
              <MenuItem value={commodityName}>
                <ListItem key={commodityName} button>
                  <ListItemText
                    id={labelId}
                    primary={commodityName} />
                  <ListItemSecondaryAction>
                    <Checkbox
                      edge="end"
                      onChange={handleToggle(commodityName)}
                      checked={checked.indexOf(commodityName) !== -1}
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

    </React.Fragment>

  );
}
