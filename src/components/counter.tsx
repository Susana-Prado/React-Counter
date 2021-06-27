import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  })
);

export default function Counter(): JSX.Element {
  const classes = useStyles();
  const [value, setValue] = useState<number>(0);

  const increment = (): void => {
    setValue(value + 1);
  };

  const decrement = (): void => {
    setValue(value - 1);
  };

  return (
    <div className={classes.root}>
      <h1 className="title">Counter</h1>
      <h2>{value}</h2>
      <Button
        style={{ borderRadius: '5px' }}
        variant="outlined"
        color="primary"
        onClick={increment}
      >
        +
      </Button>
      <Button variant="outlined" color="primary" onClick={decrement}>
        -
      </Button>
      <br />
      <Button variant="outlined" color="secondary" onClick={() => setValue(0)}>
        Reset
      </Button>
    </div>
  );
}

