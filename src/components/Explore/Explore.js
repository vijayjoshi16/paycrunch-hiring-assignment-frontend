import { Grid } from '@material-ui/core';
import { useEffect, useState } from 'react';
import VideoCard from '../VideoCard/VideoCard';
import './Explore.css';

const Explore = ()=>{
    const [videos, setVideos] = useState([]);
    const [pageNo, setPageNo] = useState(0);

    const fetchVideos = ()=>{
        setVideos([]);
        fetch(
            process.env.REACT_APP_API_URL+'query/all_videos/'+pageNo*10+'/12',
            {
                method:"GET",
                headers: {
                    'Content-Type': 'application/json'
                  },
            }
        ).then(res=>res.json())
        .then(data=>{
            setVideos(data.videos);
        })
    }

    useEffect(()=>{
        fetchVideos()
    },[pageNo])

    return(
        <div className='explore_container' id='explore'>
            <h2>EXPLORE RECENTLY FETCHED VIDEOS</h2>
            {
                videos.length!=0
                ?
                <Grid container>
                    {
                        videos.map(video=>{
                            return(
                                <Grid 
                                
                                item xs={12} sm={6} md={4} lg={3}>
                                <VideoCard video={video}/>
                                </Grid>
                            )
                        })
                    }
                </Grid>
                :
                <>Loading...</>
            }
            {
                pageNo!=0 && <button
            className="pagination_btn"
            onClick={()=>{
                setPageNo(pageNo-1);
            }}> PREVIOUS</button>
            }
            
            <button
            className="pagination_btn"
            onClick={()=>{
                setPageNo(pageNo+1);
            }}>NEXT</button>
        </div>
    )
}

export default Explore;