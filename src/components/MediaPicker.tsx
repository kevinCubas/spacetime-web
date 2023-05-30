'use client'

import { ChangeEvent, useState } from 'react'
import { PreviewMedia } from './PreviewMedia'

interface IMediaPickerProps {
  previewUrl?: string
}

type PreviewUrl = string | null | Array<string>

export function MediaPicker({ previewUrl }: IMediaPickerProps) {
  const [preview, setPreview] = useState<PreviewUrl>(previewUrl ?? null)

  const onFileSelected = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target

    if (!files || files.length === 0) return

    const previewURL = URL.createObjectURL(files[0])
    const file = [previewURL, files[0].type]

    setPreview(file)
  }

  return (
    <>
      <input
        name="media"
        type="file"
        id="media"
        className="sr-only"
        accept="image/*,video/*"
        onChange={onFileSelected}
      />
      {preview && <PreviewMedia preview={preview} />}
    </>
  )
}
