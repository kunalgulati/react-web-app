import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
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

export default function GradeDropdown() {
  const classes = useStyles();

  const [checked, setChecked] = React.useState([1]);
  const [grade, setGrade] = React.useState('');


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
  //   setGrade(event.target.value);
  // };

  return (
    <React.Fragment>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Grade</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={grade}
          // onChange={handleChange}
          label="Grade"
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
