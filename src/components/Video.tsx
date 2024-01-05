import { FC, useLayoutEffect, useRef } from 'react'

const VideoPlayer: FC<any> = ({
  poster,
  video,
  className,
  loop = 'loop',
  onEnded = () => null,
  onPlay = () => null,
  onPlaying = () => null,
  onClick = () => null,
}) => {
  const videoRef = useRef(null)

  useLayoutEffect(() => {
    if (videoRef?.current) {
      videoRef.current.controls = false
      videoRef.current.play()
    }
  }, [])

  return (
    <video
      onClick={onClick}
      className={`video-player ${className}`}
      style={{ backgroundImage: `url(${poster})` }}
      ref={videoRef}
      autoPlay
      playsInline
      poster={poster}
      src={video}
      loop={loop}
      muted
      onEnded={onEnded}
      onPlay={onPlay}
      onPlaying={onPlaying}
      controlsList="nofullscreen nodownload noremote footbar"
    />
  )
}

export default VideoPlayer
