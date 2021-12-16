import { TextField } from '@material-ui/core';
import './Search.css';


export default function Search(){
    return(
        <div className="search_container">
            <h2>SEARCH BASED ON YOUR PREFERNCE</h2>
            <TextField
            variant="filled"
            helperText="Enter title"
            className="search_input">

            </TextField>
            <TextField
            variant="filled"
            helperText="Enter description"
            className="search_input">

            </TextField>
        </div>
    )
}