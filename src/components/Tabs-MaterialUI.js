import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Communities" />
            <Tab label="Fischer Sections" />
            <Tab label="Legal Sections" />
            <Tab label="Sites" />

          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>Communities Grid View here</TabContainer>}
        {value === 1 && <TabContainer>Fischer Sections Grid View here</TabContainer>}
        {value === 2 && <TabContainer>Legal Sections Grid View here</TabContainer>}
        {value === 3 && <TabContainer>Sites Grid View here<br/><br/></TabContainer>}

      </div>

    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
