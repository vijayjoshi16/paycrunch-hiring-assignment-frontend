import { TextField } from '@material-ui/core';
import { useState } from 'react';
import './Search.css';
import { successToast, errorToast } from '../toast';
import { Grid } from '@material-ui/core';

export default function Search(){
    const [searchResults, setSearchResults] = useState([]);
    const [limits, setLimits] = useState([0,0]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const search = (mode)=>{
        if(title===""){
            errorToast("Please enter title!");
            return;
        }
        if(description===""){
            errorToast("Please enter description!");
            return;
        }
        fetch(
            process.env.REACT_APP_API_URL+"query/search_videos/",
            {
                method:"POST",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    title,
                    description,
                    mode
                })
            }
        ).then(res=>res.json())
        .then(result=>{
            if(result.message=="Success" && result.videos.length>0){
                successToast(result.message);
                setSearchResults(result.videos);
                setLimits([0,Math.min(12,result.videos.length)]);
                console.log(result)
            }else{
                if(result.message!=="Success")
                errorToast(result.message);
                else
                errorToast("Couldn't find any matching videos!")
            }
        })
    }

    return(
        <div className="search_container">
            <h2>SEARCH BASED ON YOUR PREFERNCE</h2>
            <TextField
            variant="filled"
            helperText="Enter title"
            style={{margin:"10px"}}
            value={title}
            onChange={(e)=>setTitle(e.target.value)}>

            </TextField>
            <TextField
            variant="filled"
            helperText="Enter description"
            style={{margin:"10px"}}
            value={description}
            onChange={(e)=>setDescription(e.target.value)}>

            </TextField>
            <br></br>
            <button
            className="search_btn"
            onClick={()=>{search("exact")}}>EXACT SEARCH</button>
            
            <button
            className="search_btn"
            onClick={()=>{search("smart")}}>PARTIAL SEARCH</button>
            {
                searchResults.length!=0
                ?
                <Grid container>
                {
                    searchResults.slice(limits[0],limits[1])
                    .map(video=>{
                        return(
                                <Grid 
                                
                                item xs={12} sm={6} md={4} lg={3}>
                                <div
                                className="video_card">
                                    <img
                                    className="video_img" 
                                    src={video.thumbnail} />
                                    <h3 className="video_content">{video.title.slice(0, 25) + (video.title.length > 25 ? "..." : "")}</h3>
                                    <p className="video_content">{video.description.slice(0, 100) + (video.description.length > 100 ? "..." : "")}</p>
                                    </div>
                                </Grid>
                            )
                    })
                }
                </Grid>
                :
                <></>
            }
            
            

            <br></br>
            {
            limits!==[] && limits[0]!==0 && <button
            className="pagination_btn"
            onClick={()=>{
                setLimits([limits[0]-12,limits[1]-12]);
            }}
            > PREVIOUS</button>
            }
            
            {
                limits!=[] && limits[1]!=searchResults.length &&
                <button
                className="pagination_btn"
                onClick={()=>{
                    setLimits([limits[0]+12,Math.min(searchResults.length,limits[1]+12)]);
                }}
                >NEXT</button>
            }
            
        </div>
    )
}