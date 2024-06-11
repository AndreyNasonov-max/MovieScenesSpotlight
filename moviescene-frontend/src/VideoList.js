import React, { useEffect, useState } from 'react';
import axios from 'axios';

function VideoList() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/videos')
            .then(response => setVideos(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            {videos.map(video => (
                <div key={video.id}>
                    <h3>{video.title}</h3>
                    <video src={video.url} controls />
                </div>
            ))}
        </div>
    );
}

export default VideoList;
