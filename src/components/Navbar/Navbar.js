import './Navbar.css'
import { Grid } from "@material-ui/core"


export default function Navbar(){
    return(
        <Grid container
        className='navbar_container'>
            <Grid item xs={6} sm={6} md={6} lg={6}>
                <h3>PAYCRUNCH ASSIGNMENT</h3>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6}>
                <p className='navbar_item'>Explore</p>
                <p className='navbar_item'>Search</p>
            </Grid>
        </Grid>
    )
}