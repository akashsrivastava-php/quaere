import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Grid, TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import { getUser, update } from './utils'
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
  mb20:{
    marginBottom: '20px',
    width: '20%'
  }
}));

export default function Edit(props) {
  const classes = useStyles();
  const [ user, setUser ] = useState({})
  const [ loading, setLoading ] = useState(false)
  const { match : { params : { id } } } = props
  const { handleSubmit, register, errors } = useForm();

  useEffect(()=>{
    if(id){
        (async()=>{
            const res = await getUser(id)
            if(res.status){
                setUser(res.data)
            }else{
                toast.error(res.data.msg)
            }
        })()
    }
  },[])

  const onSubmit = async (values) => {
      setLoading(true)
      const res = await update(id, values)
      if(res.status){
          toast.success('User updated!')
          props.history.push('/')
      }else{
          toast.error('Something went wrong!')
      }
      setLoading(false)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            CRUD OPERATION
          </Typography>
          <Button color="inherit" onClick={()=>props.history.push('/')} style={{float: 'right', marginRight: '25px'}}>Back</Button>
          <Button color="inherit" onClick={()=>props.history.push('/design')}>Get Design</Button>
        </Toolbar>
      </AppBar>
        <div className={classes.card}>
            <div style={{textAlign: 'center'}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                <Grid>
                    <TextField id="outlined-basic" className={classes.mb20} key={user.name} defaultValue={user.name} label="Name" variant="outlined" name="name" helperText={ errors.name ? errors.name.message : null } error={(errors.name ? true : false)} inputRef={register({ required: { value: true, message: 'Name is required.' }})}/>
                </Grid>
                <Grid>
                    <TextField id="outlined-basic" className={classes.mb20} key={user.email} defaultValue={user.email} label="Email" variant="outlined" name="email" helperText={ errors.email ? errors.email.message : null } error={(errors.email ? true : false)} inputRef={register({ required: { value: true, message: 'Email is required.' }})}/>
                </Grid>
                <Grid>
                    <TextField id="outlined-basic" className={classes.mb20} key={user.website} defaultValue={user.website} label="Website" variant="outlined" name="website" helperText={ errors.website ? errors.website.message : null } error={(errors.website ? true : false)} inputRef={register({ required: { value: true, message: 'Website is required.' }})}/>
                </Grid>
                <Grid>
                <Button color="primary" type="submit" disabled={loading} variant="contained">{loading ? 'Processing' : 'Update'}</Button>
                </Grid>
                </form>
            </div>
        </div>
    </div>
  );
}
