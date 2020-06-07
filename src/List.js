import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Card, Grid, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { getAll, deleteUser } from './utils'
import { toast } from 'react-toastify';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  card:{
    marginTop: '25px',
    flexGrow: 1,
  },
  tableHead:{
    fontWeight: '700'
  },
}));

export default function List(props) {
  const classes = useStyles();
  const [ users, setUsers ] = useState([])  

  useEffect(()=>{
    (async()=>{
        const res = await getAll()
        if(res.status){
            setUsers(res.data)
        }
    })()
  },[])

  const handelDelete = async (id) => {
        const res = await deleteUser(id)
        if(res.status){
            toast.success('User deleted!')
        }else{
            toast.error('Something went wrong!')
        }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            CRUD OPERATION
          </Typography>
          <Button color="inherit" onClick={()=>props.history.push('/design')}>Get Design</Button>
        </Toolbar>
      </AppBar>
      <div className={classes.root}>
        <Card className={classes.card}>
            <Grid>
                <Button color="inherit" onClick={()=>props.history.push('/add')} variant="contained" style={{float: 'right', marginRight: '25px'}}>Add</Button>
            </Grid>
            <Grid>
                <Table>
                    <TableHead>
                        <TableRow>
                        <TableCell className={classes.tableHead}>Name</TableCell>
                        <TableCell className={classes.tableHead}>Email</TableCell>
                        <TableCell className={classes.tableHead}>Website</TableCell>
                        <TableCell className={classes.tableHead}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            users.length > 0 ?
                            users.map((val,key)=>{
                                return(
                                    <TableRow key={key}>
                                        <TableCell>{val.name}</TableCell>
                                        <TableCell>{val.email}</TableCell>
                                        <TableCell>{val.website}</TableCell>
                                        <TableCell>
                                            <Grid container xs="6">
                                                <Grid xs="3">
                                                    <EditIcon onClick={()=>props.history.push(`/edit/${val.id}`)} style={{cursor: 'pointer'}}/>
                                                </Grid>
                                                <Grid xs="3">
                                                    <DeleteIcon onClick={()=>handelDelete(val.id)} style={{cursor: 'pointer'}}/>
                                                </Grid>
                                            </Grid>
                                        </TableCell>
                                    </TableRow>
                                )
                            }) :
                            <TableRow>
                                <TableCell colSpan="4" style={{textAlign: 'center'}}>No Records Found</TableCell>
                            </TableRow>
                        }
                    </TableBody>
                </Table>
            </Grid>
        </Card>
    </div>
    </div>
  );
}
