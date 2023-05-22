'use client'

import { ChangeEvent, useState } from 'react'
import { PreviewMedia } from './PreviewMedia'

export function MediaPicker() {
  const [preview, setPreview] = useState<string[] | null>(null)

  const onFileSelected = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target

    if (!files || files.length === 0) return

    console.log(files)
    const previewURL = URL.createObjectURL(files[0])
    const file = [previewURL, files[0].type]

    setPreview(file)
  }

  return (
    <>
      <input
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
