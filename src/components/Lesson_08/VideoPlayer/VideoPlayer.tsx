import { useRef } from 'react';

function VideoPlayer({ source } : { source: string }) {
  const playerRef = useRef<HTMLVideoElement | null>(null);

  const play = () => playerRef.current?.play();

  const pause = () => playerRef.current?.pause();

  return (
    <div>
      <video ref={playerRef} src={source}
        width="320"
        height="180"
        controls
      >
        Sorry, your browser does not support embedded videos.
      </video>
      <div>
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
      </div>
    </div>
  );
}
export default VideoPlayer;
