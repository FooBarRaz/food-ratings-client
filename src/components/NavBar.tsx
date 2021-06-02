import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useAppDispatch, useAppSelector, useQuery } from '../hooks';
import { usersReducer } from '../store/user';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

export default function NavBar() {
    const classes = useStyles();
    const isLoggedIn = useAppSelector(state => state.users.isLoggedIn);
    const dispatch = useAppDispatch();
    const query = useQuery();
    const token = '';
    

    if(token) {
        dispatch(usersReducer.actions.handleLogin({token}))
    }



    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Food Ratings
          </Typography>
                    {isLoggedIn
                        ? <Button color="inherit" href='/logout'>Logout</Button>
                        : <Button color="inherit" href='https://dishit.auth.us-east-1.amazoncognito.com/login?client_id=4uv5l3pv6cqqe515btm6bc7emb&response_type=token&scope=email+openid&redirect_uri=http://localhost:3000/?'>Login</Button>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}
