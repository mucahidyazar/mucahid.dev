'use client'

// => Tiptap packages
import Bold from '@tiptap/extension-bold'
import Code from '@tiptap/extension-code'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import Document from '@tiptap/extension-document'
import Heading from '@tiptap/extension-heading'
import History from '@tiptap/extension-history'
import Italic from '@tiptap/extension-italic'
import Link from '@tiptap/extension-link'
import Paragraph from '@tiptap/extension-paragraph'
import Strike from '@tiptap/extension-strike'
import Text from '@tiptap/extension-text'
import {TextAlign} from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import {useEditor, EditorContent, Editor} from '@tiptap/react'
import css from 'highlight.js/lib/languages/css'
import js from 'highlight.js/lib/languages/javascript'
import ts from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'
import {createLowlight, common} from 'lowlight'
import {useEffect, useState} from 'react'

import {useSavingStatus} from '@/hooks'
import {cn} from '@/utils'

import {Toolbar} from './components'
import {THEME, Theme, themes} from './constants'
import {MyImage} from './extensions'

const lowlight = createLowlight(common)
lowlight.register({html, css, js, ts})

const allowedImageTypes = [
  'image/bmp',
  'image/gif',
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/tiff',
  'image/webp',
  'image/x-icon',
]

type TiptapProps = {
  content?: string
  onUpdate?: (content: string) => void
  defaultTheme?: Theme
}
export function Tiptap({
  content = '',
  defaultTheme = THEME.default,
  onUpdate,
}: TiptapProps) {
  const {status, setSaving} = useSavingStatus()

  const editor = useEditor({
    extensions: [
      Document,
      History,
      Paragraph,
      Text,
      TextAlign.configure({types: ['heading', 'paragraph', 'image']}),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'tiptap-link',
        },
      }),
      CodeBlockLowlight.configure({
        lowlight,
        defaultLanguage: 'javascript',
      }),
      Heading.configure(),
      Bold,
      Underline,
      Italic,
      Strike,
      Code,
      MyImage,
    ],
    content,
    onUpdate: e => {
      const content = e.editor.getHTML()
      onUpdate?.(content)

      setSaving()
    },
    editorProps: {
      handlePaste: view => {
        // (view, ,event, slice)
        // const runAsync = (async () => {
        //   const clipboardItems = (await navigator.clipboard.read()) as any

        //   clipboardItems.forEach(async (clipboardItem: any) => {
        //     const {types} = clipboardItem
        //     // const type = types[2]
        //     // const blob = await clipboardItem.getType(type)

        //     // if (allowedImageTypes.includes(type)) {
        //     //   const extension = type.split('/')[1]
        //     //   const formData = new FormData()
        //     //   formData.append('file', new File([blob], `image.${extension}`))

        //     //   try {
        //     //     // upload an example by supabase
        //     //     const response: any = await supabase.storage
        //     //       .from('mucahid.dev')
        //     //       // .upload(filePath, file)
        //     //       .upload(`blog/${Date.now()}.${extension}`, blob, {
        //     //         // cacheControl: '3600', // 1 hour
        //     //         upsert: false,
        //     //       })

        //     //     const src = `${env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/mucahid.dev/${response.data.path}`

        //     //     view.dispatch(
        //     //       view.state.tr.replaceSelectionWith(
        //     //         view.state.schema.nodes.image.create({
        //     //           src,
        //     //         }),
        //     //       ),
        //     //     )
        //     //   } catch (e) {
        //     //   }
        //     // }
        //     types.forEach(async (type: string) => {
        //       if (allowedImageTypes.includes(type)) {
        //         const blob = await clipboardItem.getType(type)
        //         const extension = type.split('/')[1]
        //         const formData = new FormData()
        //         formData.append('file', new File([blob], `image.${extension}`))

        //         try {
        //           // upload an example by supabase
        //           const response: any = await supabase.storage
        //             .from('mucahid.dev')
        //             // .upload(filePath, file)
        //             .upload(`blog/${Date.now()}.${extension}`, blob, {
        //               // cacheControl: '3600', // 1 hour
        //               upsert: false,
        //             })

        //           const src = `${env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/mucahid.dev/${response.data.path}`

        //           view.dispatch(
        //             view.state.tr.replaceSelectionWith(
        //               view.state.schema.nodes.image.create({
        //                 src,
        //               }),
        //             ),
        //           )
        //         } catch (e) {
        //           console.error(e)
        //         }
        //       }
        //     })
        //   })
        // })()

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _runAsync = (async () => {
          const items = (await navigator.clipboard.read()) as any
          const files: any[] = []

          if (items) {
            for (let i = 0; i < items.length; i++) {
              const item = items[i]
              const isAllowed = item.types.some((type: string) => {
                return allowedImageTypes.includes(type)
              })
              if (isAllowed) {
                const blob = await item.getType(item.types[0])
                files.push(blob)
              }
            }
          }

          files.forEach(async file => {
            const src = URL.createObjectURL(file)
            view.dispatch(
              view.state.tr.replaceSelectionWith(
                view.state.schema.nodes.image.create({
                  src,
                }),
              ),
            )
          })
        })()

        return false
      },
      // handleKeyDown: (view, event) => {
      //   if (event.key === 'Backspace') {
      //     const {selection} = view.state as any

      //     const selections = selection.ranges[0].$from.path[0].content.content

      //     selections.forEach((selection: any) => {
      //       if (selection.type.name === 'image') {
      //         const src = selection.attrs.src
      //         const filePath = src.split('/').slice(-1)[0]

      //         supabase.storage
      //           .from('mucahid.dev')
      //           .remove([`blog/${filePath}`])
      //           .then(() => {
      //             console.log('removed')
      //           })
      //           .catch((e: Error) => {
      //             console.error(e)
      //           })
      //       }
      //     })
      //   }

      //   return false
      // },
    },
  }) as Editor

  // listen .tiptap height and set a new height for .editor
  useEffect(() => {
    const tiptap = document.querySelector('.tiptap')
    const editor = document.querySelector('.editor')

    if (tiptap && editor) {
      const observer = new ResizeObserver(() => {
        const tiptapHeight = tiptap.clientHeight
        editor.setAttribute('style', `height: ${tiptapHeight + 200}px`)
      })

      observer.observe(tiptap)
    }
  }, [editor])

  const [theme, setTheme] = useState(themes[defaultTheme])

  if (!editor) {
    return null
  }

  function toggleTheme() {
    switch (theme) {
      case themes.default:
        setTheme(themes.transparent)
        break
      case themes.transparent:
        setTheme(themes.filled)
        break
      case themes.filled:
        setTheme(themes.default)
        break
    }
  }

  return (
    <div className={cn(theme, 'editor')}>
      <Toolbar editor={editor} status={status} toggleTheme={toggleTheme} />
      <EditorContent editor={editor} />
    </div>
  )
}
