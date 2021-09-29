import MenuAppBar from '../../components/AppBar'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MyCard from '../../components/Card';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react'
function Chat(props) {
    const location = useLocation()
    console.log("props===>", location)
    
    return (
        <div>
            <MenuAppBar title="Login" />
            ِ<Container>
                <Grid container justifyContent="center">
                    <Grid item xs={12} lg={6} md={12}>
                        <MyCard>
                            <h1>Chat</h1>
                            <h2>{location?.state?.username}</h2>
                        </MyCard>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Chat;