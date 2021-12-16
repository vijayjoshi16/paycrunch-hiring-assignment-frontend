import './VideoCard.css'

const VideoCard = (props)=>{
    return(
        <div
        className="video_card">
            <img
            className="video_img" 
            src={props.video.thumbnail} />
            <h3 className="video_content">{props.video.title.slice(0, 25) + (props.video.title.length > 25 ? "..." : "")}</h3>
            <p className="video_content">{props.video.description.slice(0, 100) + (props.video.description.length > 100 ? "..." : "")}</p>
        </div>
    )
}

export default VideoCard;