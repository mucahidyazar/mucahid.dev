'use client'
import {useRef, useState} from 'react'
import {OnProgressProps} from 'react-player/base'
import YoutubePlayer from 'react-player/youtube'

import {Icons} from '@/components/ui/icons'
import {cn} from '@/utils'

type ReactPlayerProps = {}
export function ReactPlayer({}: ReactPlayerProps) {
  const [playing, setPlaying] = useState(false)
  const [duration, setDuration] = useState<number>(0)
  const [progress, setProgress] = useState<OnProgressProps>({
    loaded: 0,
    played: 0,
    playedSeconds: 0,
    loadedSeconds: 0,
  })
  const playerRef = useRef(null)

  const togglePlayPause = () => {
    setPlaying(prev => !prev)
  }

  return (
    <>
      <YoutubePlayer
        ref={playerRef}
        url={[
          'https://www.youtube.com/watch?v=uxLBxGloIGo',
          'https://youtu.be/cdIY8ZwI2no?si=4X2RfH_NGSCftkbP',
        ]}
        playing={playing}
        controls={true}
        muted={false}
        width={0}
        height={0}
        onProgress={progress => setProgress(progress)}
        onDuration={duration => setDuration(duration)}
        style={{
          position: 'fixed',
        }}
      />

      <button
        onClick={togglePlayPause}
        className={cn(
          'relative z-50 flex h-9 w-9 items-center justify-center rounded border border-primary-500 border-opacity-10 bg-primary-500 bg-opacity-5 text-primary-500 shadow-soft-md hover:shadow-soft-lg',
        )}
      >
        {playing ? (
          <Icons.stop className="w-3" />
        ) : (
          <Icons.play className="w-3" />
        )}
        <div
          className={cn(
            'absolute bottom-0 left-0 h-1 bg-primary-500 bg-opacity-50',
          )}
          style={{
            width: `${100 / duration} * ${progress.playedSeconds}%`,
          }}
        />
      </button>
    </>
  )
}
