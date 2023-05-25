import Image from 'next/image'

interface IMediaCoverProps {
  coverUrl: string
}

export function MediaCover({ coverUrl }: IMediaCoverProps) {
  const videoExtensions = ['.mp4', '.avi', '.mov', '.wmv']

  const mediaIsVideo = videoExtensions.some((extension) => {
    return coverUrl.endsWith(extension)
  })

  if (mediaIsVideo) {
    return (
      <video
        className="aspect-video w-full rounded-lg object-cover"
        src={coverUrl}
        controls
      />
    )
  }

  return (
    <Image
      className="aspect-video w-full rounded-lg object-cover"
      src={coverUrl}
      alt=""
      width={592}
      height={280}
    />
  )
}
