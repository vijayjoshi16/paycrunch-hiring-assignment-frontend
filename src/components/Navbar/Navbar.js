import './Navbar.css'
import { Grid } from "@material-ui/core"
import { gridSrc, searchSrc } from '../../img/imgSrc'


export default function Navbar(){
    return(
        <Grid container
        className='navbar_container'>
            <Grid item xs={6} sm={6} md={6} lg={6}>
                <h3>PAYCRUNCH ASSIGNMENT</h3>
            </Grid>
            <Grid className="navbar_menu" item xs={6} sm={6} md={6} lg={6}>
            <img className="navbar_item" src={gridSrc}/>
            <img className="navbar_item" src={searchSrc} />
            </Grid>
        </Grid>
    )
}