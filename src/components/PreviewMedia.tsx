import { MediaCover } from './MediaCover'

interface PreviewProps {
  preview: string | null | Array<string>
}

export function PreviewMedia({ preview }: PreviewProps) {
  if (preview !== null && typeof preview === 'string') {
    return <MediaCover coverUrl={preview} />
  }

  if (preview !== null) {
    const fileType = preview[1]

    return fileType.includes('image') ? (
      // local file doesn't need automization
      // eslint-disable-next-line
      <img
        src={preview[0]}
        alt="Preview"
        className="aspect-video w-full rounded-lg object-cover"
      />
    ) : (
      <video
        src={preview[0]}
        controls={false}
        className="aspect-video w-full rounded-lg object-cover"
      />
    )
  }

  return <></>
}
