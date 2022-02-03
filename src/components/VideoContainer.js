function VideoContainer({embedUrl, title}){


    return(
        <div>
            <iframe
                width="919"
                height="525"
                src={embedUrl}
                frameBorder="0"
                allowFullScreen
                title={title}
            />
        </div>
    )
}

export default VideoContainer;