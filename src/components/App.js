import video from "../data/video.js";
import VideoContainer from "./VideoContainer.js";
import Details from "./Details.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoContainer url={video.embedUrl} title={video.title}/>
      <Details title={video.title} views={video.views} createdAt={video.createdAt} upvotes={video.upvotes}
      downvotes={video.downvotes} comments={video.comments}/> 
    </div>
  );
}

export default App;
