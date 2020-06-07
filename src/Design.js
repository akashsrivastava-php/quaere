import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, InputBase, Tabs, Tab, Box, Card, CardHeader, CardContent, Grid, TextField, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 10,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
    marginRight: '25px'
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '500px'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  card:{
    marginTop: '25px',
    flexGrow: 1,
  },
  mb20:{
    marginBottom: '20px'
  },
  mt10:{
    marginTop: '10px'
  },
  tableHead:{
    fontWeight: '700'
  },
  billBtn:{
    float: 'right',
    marginTop: '20px'
  }
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }


export default function ButtonAppBar(props) {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            ICON
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Client Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Button color="inherit">Get Support</Button>
          <Button color="inherit" onClick={()=>props.history.push('/')}>Crud</Button>
        </Toolbar>
      </AppBar>
      <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Dashboard" {...a11yProps(0)} />
          <Tab label="Account" {...a11yProps(1)} />
          <Tab label="Users" {...a11yProps(2)} />
          <Tab label="Activity" {...a11yProps(3)} />
          <Tab label="Billing" {...a11yProps(4)} />
          <Tab label="Settings" {...a11yProps(5)} />
          <Tab label="Style Editor" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Card className={classes.card}>
          <CardHeader title="Account"/>
          <CardContent>
            <Grid spacing={3}>
              <Grid container item xs={6}>
                <Grid item xs={3}>
                  Company :
                </Grid>
                <Grid item xs={3}>
                  Notary Services LLC
                </Grid>
                <Grid item xs={3}>
                  <Button variant="contained">Edit</Button>
                </Grid>
              </Grid>
              <Grid container item xs={6}>
                <Grid item xs={3}>
                  Address :
                </Grid>
                <Grid item xs={3}>
                  1350 N Stemmons Fwy Dallas, TX 75207
                </Grid>
              </Grid>
              <Grid container item xs={6}>
                <Grid item xs={3}>
                  Phone :
                </Grid>
                <Grid item xs={3}>
                  214-255-2520
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        
        <Card className={classes.card}>
          <CardHeader title="License"/>
          <CardContent>
            <Grid container spacing={6}>
              <Grid container item xs={4}>
                <Grid item xs={12}>
                  <div className={classes.mb20}>
                    <TextField id="outlined-basic" label="License Key" variant="outlined" fullWidth="true" />
                  </div>
                  <div className={classes.mb20}>
                    <TextField id="outlined-basic" label="Domain" variant="outlined" fullWidth="true" />
                  </div>
                  <div className={classes.mb20}>
                  <Grid container spacing="2" item xs={12}>
                    <Grid item xs={10}>
                      <TextField id="outlined-basic" label="License Type" variant="outlined" fullWidth="true" />
                    </Grid>
                    <Grid item xs={2}>
                      <Button className={classes.mt10} variant="contained">Upgrade</Button>
                    </Grid>
                  </Grid>
                  </div>
                  <div className={classes.mb20}>
                    <TextField id="outlined-basic" label="License Status" variant="outlined" fullWidth="true" />
                  </div>
                </Grid>
              </Grid>

              <Grid item xs={8}>
                <Grid>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell className={classes.tableHead}>Registration Date</TableCell>
                        <TableCell className={classes.tableHead}>Next Due Date</TableCell>
                        <TableCell className={classes.tableHead}>Billing Cycle</TableCell>
                        <TableCell className={classes.tableHead}>Payment Method</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>Tuesday, May 26, 2020</TableCell>
                        <TableCell>Tuesday, May 26, 2020</TableCell>
                        <TableCell>Monthly</TableCell>
                        <TableCell>Credit Card</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Grid>
                <Grid>
                  <Button className={classes.billBtn} variant="contained">View Billing</Button>
                </Grid>
              </Grid>
            </Grid>

          </CardContent>
        </Card>

      </TabPanel>
      <TabPanel value={value} index={1}>
        Account
      </TabPanel>
      <TabPanel value={value} index={2}>
        Users
      </TabPanel>
      <TabPanel value={value} index={3}>
        Activity
      </TabPanel>
      <TabPanel value={value} index={4}>
        Billing
      </TabPanel>
      <TabPanel value={value} index={5}>
        Settings
      </TabPanel>
      <TabPanel value={value} index={6}>
        Style Editor
      </TabPanel>
    </div>
    </div>
  );
}
