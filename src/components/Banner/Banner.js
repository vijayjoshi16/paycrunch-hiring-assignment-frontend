import './Banner.css';
import Grid from '@material-ui/core/Grid';
import bannerImg from '../../img/bannerImg.png';

export default function Banner(){
    const listText = [
        "An alternative solution to perform YouTube search",
        "This app uses the YouTube API to get you all the videos you need at one place",
        "We provide fetching of latest published videos",
        "Moreover, we also fetch videos based on the user's given title and description"
    ]
    return(
        <Grid container
        className='banner_container'>
            <Grid item xs={12} sm={6} md={6} lg={6}>
                <img src={bannerImg} 
                    className='banner_image'
                />
            </Grid> 
            <Grid item xs={12} sm={6} md={6} lg={6}>
                <h2 className='banner_heading'>Youtube API Web App</h2>
                <ul>
                    {
                        listText.map(item=>(
                            <li className='banner_description'>{item}</li>
                        ))
                    }
                </ul>
            </Grid> 
        </Grid>
    )
}