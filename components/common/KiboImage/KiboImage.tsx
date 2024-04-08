import { SyntheticEvent } from 'react'

import { SvgIconComponent } from '@mui/icons-material'
import Image, { ImageProps } from 'next/image'

import DefaultImage from '@/public/product_placeholder.svg'

interface KiboImageProps extends ImageProps {
  errorimage?: ImageData | SvgIconComponent
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
  marginLeft?: number
}

const errorImage = { image: DefaultImage }

const onImageError = (
  event: SyntheticEvent<HTMLImageElement, Event> & {
    target: HTMLImageElement
  }
) => {
  const { target } = event
  target.src = errorImage.image
}

const KiboImage = (props: KiboImageProps) => {
  errorImage.image = props.errorimage
  return (
    <Image
      {...props}
      alt={props.alt}
      onError={onImageError}
      style={{
        objectFit: props.objectFit ?? 'contain',
        width: props.width,
        marginLeft: props.marginLeft,
      }}
    />
  )
}

export default KiboImage
