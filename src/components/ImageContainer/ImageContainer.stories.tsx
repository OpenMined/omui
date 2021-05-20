import React from 'react'
import {Story, Meta} from '@storybook/react'
import {Image} from './Image'

const PlayIcon = () => (
  <svg width="60" height="68" viewBox="0 0 60 68" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.8">
      <path
        d="M57.0175 30.594C59.6795 32.1345 59.6795 35.9777 57.0175 37.5181L6.06642 67.0035C3.39976 68.5467 0.0629316 66.6224 0.0629318 63.5414L0.0629343 4.57074C0.0629345 1.48974 3.39977 -0.434533 6.06644 1.10866L57.0175 30.594Z"
        fill="#F1F0F4"
      />
      <path
        d="M57.0175 30.594C59.6795 32.1345 59.6795 35.9777 57.0175 37.5181L6.06642 67.0035C3.39976 68.5467 0.0629316 66.6224 0.0629318 63.5414L0.0629343 4.57074C0.0629345 1.48974 3.39977 -0.434533 6.06644 1.10866L57.0175 30.594Z"
        fill="url(#paint0_linear)"
      />
    </g>
    <defs>
      <linearGradient id="paint0_linear" x1="19.6885" y1="-8" x2="19.6885" y2="76.1121" gradientUnits="userSpaceOnUse">
        <stop stop-color="white" stop-opacity="0.8" />
        <stop offset="1" stop-color="white" stop-opacity="0.5" />
      </linearGradient>
    </defs>
  </svg>
)

const ImageStory = args => {
  const {orientation, ratio, src} = args

  return (
    <div className="w-1/4">
      <Image src={src} orientation={orientation} ratio={ratio} />
    </div>
  )
}

export default {
  title: 'Atoms/Images',
  component: ImageStory,
  argTypes: {
    ratio: {
      defaultValue: '16:9',
      options: ['16:9', '4:3', '3:2', '1:1'],
      type: 'select'
    },
    orientation: {
      defaultValue: 'landscape',
      options: ['portrait', 'landscape'],
      type: 'select'
    },
    src: {
      mapping: {
        Empty: '',
        Trask:
          'https://s3-alpha-sig.figma.com/img/7bd9/453c/8fe83c3c7c615b7c89599c48781b0e0e?Expires=1622419200&Signature=E7nuSPH-PBeebEJO1VZV3M7GPL65gLtTuGxNA2i76bfTGNjkKIw0TCyMDXosir2HuCVjFHgENw8vN2trZMvClkLa7j9ChWWKOCjF6MuGb7kZCPRai1gsdTNcC6tL~s0tg8oU5K-oqb1z~i43DMOVVYzSgP9UWdqXR2atYwKKMYA6FEZrO2TYLHQhLQSmfu~Jrx5e4QEj9UC~QUsUHv9~ovfZUyZcKhapGO4lx16Dpy~pT8aAB8-2Uy~fVeRXmwt-COgnf~BAFhM~6gJhCzABHMWsjAvm1Gl6IO3XaXrui6MFbBp1qnXrZa67sugtAm5tQ-KqRnrTG2~09neBm0nBrw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        Fabric:
          'https://s3-alpha-sig.figma.com/img/6a88/a7a1/76c3aade41118cc203f473718393ee70?Expires=1622419200&Signature=Lx~gLRKOR0Q-oW1Ws~DOgz9S3p3GiP7GeVIwocRUABmRBFzKpuNcbHxPCisxEApm-Je8F3i5hOidwazcWwvCZKhsCsDl5M14heCl3nh8u6yRGvThcbsF80kry5UtW9uuBA~~I06RKcbIPoQftcre3mlyUZPcK7o~XZsDe~cozLCA84sDy4Uh5GQGoZYa6OkwWw7ltrZheEpislywZQJNHMukIrBIPx2clmYfHAeW14T61fCez6RuryNkcN8B3zNho1XWgNKtbfNDKX8w9GncTH0RjVFXmH6Wh-pgD7xrHFWhKufTDHaedlNFP8EGi0eZmJrcZAOZTYAS22nd9-ocuw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
      },
      defaultValue: 'Trask',
      control: {
        options: ['Empty', 'Trask', 'Fabric'],
        labels: {
          Empty: 'Empty',
          Trask: 'Trask',
          Fabric: 'Fabric'
        },
        type: 'select'
      }
    }
  }
} as Meta

export const Images = ImageStory.bind({})
