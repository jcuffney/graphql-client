import React, { memo } from 'react';
import { applyTo, pathOr, pipe } from 'ramda';
import { Container, makeStyles, Typography, Grid, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// import styles from './FAQ.module.scss';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
}));

export default applyTo(() => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="sm" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Contact
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          We'd love to hear from you!
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md">
        <Grid container spacing={5} alignItems="flex-end">
          <h1>WIP</h1>
        </Grid>
      </Container>
    </>
  );
}, pipe(
  memo,
));
