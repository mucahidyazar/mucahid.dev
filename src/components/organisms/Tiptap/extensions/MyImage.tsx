import Image from '@tiptap/extension-image'
import {mergeAttributes} from '@tiptap/react'

export const MyImage = Image.extend({
  addOptions() {
    return {
      ...Image.options,
      sizes: ['inline', 'block', 'left', 'right'],
    }
  },
  renderHTML({HTMLAttributes}) {
    const {style} = HTMLAttributes

    let imageStyle = 'margin: 0'

    if (style?.includes('center')) {
      imageStyle = 'margin: 0 auto'
    } else if (style?.includes('right')) {
      imageStyle = 'margin: 0 0 0 auto'
    }
    return [
      'img',
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
        style: imageStyle,
      }),
    ]
  },
})
