import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { connect } from 'react-redux';
import { simpleAction } from './store/actions/simpleAction';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function CenteredTabs({simpleReducer,simpleAction}) {
  const classes = useStyles();
  const value = simpleReducer.page;
  const setValue = simpleAction;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Paper>
  );
}

const mapStateToProps = (state) => ({
  ...state,
});
const mapDispatchToProps = (dispatch) => ({
  simpleAction: (incomingProps) => dispatch(simpleAction(incomingProps)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CenteredTabs);
