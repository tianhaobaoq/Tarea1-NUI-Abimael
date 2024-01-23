import { AppBar, Button, Container, Toolbar, Grid } from "@mui/material";
import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar >
                    <Grid container>

                         <Grid item xs={12} md={2} lg={2}>        
                            <Link to={'/gestos'} style={{textDecoration:'none', color:'white'}}>Gestos</Link>
                        </Grid>
 
                        <Grid item xs={12} md={2} lg={2}>        
                            <Link to={'/vozej1'} style={{textDecoration:'none', color:'white'}}>Voz: ejemplo básico</Link>
                        </Grid>

                        <Grid item xs={12} md={2} lg={2}>        
                            <Link to={'/vozej2'} style={{textDecoration:'none', color:'white'}}>Voz: ejemplo comandos</Link>
                        </Grid>

                        <Grid item xs={12} md={2} lg={2}>        
                            <Link to={'/ar'} style={{textDecoration:'none', color:'white'}}>AR</Link>
                        </Grid>

                        
                    </Grid>
                </Toolbar >
            </Container>
        </AppBar>
      
    );
  }
  
  export default Dashboard;