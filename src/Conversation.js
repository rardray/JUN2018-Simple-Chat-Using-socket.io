import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import Avatar from '@material-ui/core/Avatar';

import red from '@material-ui/core/colors/red';


const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class Conversation extends React.Component {
    componentWillMount() {
        console.log(this.props.value3)
    }
  render() {
    const { classes } = this.props;
    const {value, value2, value3, id} = this.props
    return (
      <div key = {id}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
              {value3}
              </Avatar>
            }
            title={value}
            subheader={value2}
          />
      </div>
    );
  }
}

 Conversation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Conversation);