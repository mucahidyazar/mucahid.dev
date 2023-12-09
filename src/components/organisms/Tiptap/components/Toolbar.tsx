import {BubbleMenu, Editor} from '@tiptap/react'
import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  Code2Icon,
  CodeIcon,
  HeadingIcon,
  ImageIcon,
  ItalicIcon,
  LinkIcon,
  PaletteIcon,
  RotateCcwIcon,
  RotateCwIcon,
  StrikethroughIcon,
  UnderlineIcon,
} from 'lucide-react'
import {useCallback, useState} from 'react'

import {Icons} from '@/components/ui/icons'
import {SAVING_STATUS, SAVING_STATUS_LABEL, SavingStatus} from '@/constants'
import {cn} from '@/utils'

import {LinkModal} from './LinkModal'

type ToolbarProps = {
  editor: Editor
  status: SavingStatus
  toggleTheme: () => void
}
export function Toolbar({editor, status, toggleTheme}: ToolbarProps) {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [url, setUrl] = useState<string>('')

  const openModal = useCallback(() => {
    setUrl(editor.getAttributes('link').href)
    setIsOpen(true)
  }, [editor])

  const closeModal = useCallback(() => {
    setIsOpen(false)
    setUrl('')
  }, [])

  const saveLink = useCallback(() => {
    if (url) {
      editor
        .chain()
        .focus()
        .extendMarkRange('link')
        .setLink({href: url, target: '_blank'})
        .run()
    } else {
      editor.chain().focus().extendMarkRange('link').unsetLink().run()
    }
    closeModal()
  }, [editor, url, closeModal])

  const align = useCallback(
    (position: 'left' | 'center' | 'right') => {
      editor.chain().focus().setTextAlign(position).run()
    },
    [editor],
  )

  const removeLink = useCallback(() => {
    editor.chain().focus().extendMarkRange('link').unsetLink().run()
    closeModal()
  }, [editor, closeModal])

  const toggleBold = useCallback(() => {
    editor.chain().focus().toggleBold().run()
  }, [editor])

  const toggleHeading = useCallback(
    (level: 1 | 2 | 3 | 4 | 5 | 6) => {
      editor.chain().focus().toggleHeading({level}).run()
    },
    [editor],
  )

  const toggleUnderline = useCallback(() => {
    editor.chain().focus().toggleUnderline().run()
  }, [editor])

  const toggleItalic = useCallback(() => {
    editor.chain().focus().toggleItalic().run()
  }, [editor])

  const toggleStrike = useCallback(() => {
    editor.chain().focus().toggleStrike().run()
  }, [editor])

  const toggleCode = useCallback(() => {
    editor.chain().focus().toggleCode().run()
  }, [editor])

  const toggleCodeBlock = useCallback(() => {
    editor.chain().focus().toggleCodeBlock().run()
  }, [editor])

  const addImage = useCallback(() => {
    const url = window.prompt('URL')

    if (url) {
      editor.chain().focus().setImage({src: url}).run()

      editor.chain().enter().focus().run()
    }
  }, [editor])

  let currentLevel = editor.getAttributes('heading').level || 1

  return (
    <div className="toolbar">
      <div className="menu">
        <button
          type="button"
          className="menu-button"
          onClick={() => {
            if (currentLevel === 6) currentLevel = 0
            toggleHeading((currentLevel + 1) as 1 | 2 | 3 | 4 | 5 | 6)
          }}
        >
          <div className="flex items-center">
            <HeadingIcon className="h-4 w-4" />
            {currentLevel}
          </div>
        </button>
        <button
          type="button"
          className="menu-button"
          onClick={() => align('left')}
        >
          <AlignLeftIcon className="h-4 w-4" />
        </button>
        <button
          type="button"
          className="menu-button"
          onClick={() => align('center')}
        >
          <AlignCenterIcon className="h-4 w-4" />
        </button>
        <button
          type="button"
          className="menu-button"
          onClick={() => align('right')}
        >
          <AlignRightIcon className="h-4 w-4" />
        </button>
        <button
          type="button"
          className="menu-button"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
        >
          {/* rotate left */}
          <RotateCcwIcon className="h-4 w-4" />
        </button>
        <button
          type="button"
          className="menu-button"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
        >
          {/* rotate right */}
          <RotateCwIcon className="h-4 w-4" />
        </button>
        <button
          type="button"
          className={cn('menu-button', {
            'is-active': editor.isActive('link'),
          })}
          onClick={openModal}
        >
          <LinkIcon className="h-4 w-4" />
        </button>
        <button
          type="button"
          className={cn('menu-button', {
            'is-active': editor.isActive('bold'),
          })}
          onClick={toggleBold}
        >
          <BoldIcon className="h-4 w-4" />
        </button>
        <button
          type="button"
          className={cn('menu-button', {
            'is-active': editor.isActive('underline'),
          })}
          onClick={toggleUnderline}
        >
          <UnderlineIcon className="h-4 w-4" />
        </button>
        <button
          type="button"
          className={cn('menu-button', {
            'is-active': editor.isActive('intalic'),
          })}
          onClick={toggleItalic}
        >
          <ItalicIcon className="h-4 w-4" />
        </button>
        <button
          type="button"
          className={cn('menu-button', {
            'is-active': editor.isActive('strike'),
          })}
          onClick={toggleStrike}
        >
          <StrikethroughIcon className="h-4 w-4" />
        </button>
        <button
          type="button"
          className={cn('menu-button', {
            'is-active': editor.isActive('code'),
          })}
          onClick={toggleCode}
        >
          <CodeIcon className="h-4 w-4" />
        </button>
        <button
          type="button"
          className={cn('menu-button', {
            'is-active': editor.isActive('code'),
          })}
          onClick={toggleCodeBlock}
        >
          <Code2Icon className="h-4 w-4" />
        </button>
        <button
          type="button"
          className={cn('menu-button', {
            'is-active': editor.isActive('code'),
          })}
          onClick={addImage}
        >
          <ImageIcon className="h-4 w-4" />
        </button>
      </div>

      <div className="flex items-center gap-2">
        <p className="flex items-center text-xs">
          {SAVING_STATUS[status] === 'saving' && (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          )}
          {SAVING_STATUS_LABEL[status]}
        </p>
        <div>
          <button type="button" className="menu-button" onClick={toggleTheme}>
            <PaletteIcon className="h-4 w-4" />
          </button>
        </div>
      </div>

      <BubbleMenu
        className="bubble-menu-light text-sm"
        tippyOptions={{duration: 150}}
        editor={editor}
        shouldShow={({
          editor,
          view: _view,
          state: _state,
          oldState: _oldState,
          from,
          to,
        }) => {
          // only show the bubble menu for links.
          return from === to && editor.isActive('link')
        }}
      >
        <button type="button" className="bubble-edit" onClick={openModal}>
          Edit
        </button>
        <button type="button" className="bubble-remove" onClick={removeLink}>
          Remove
        </button>
      </BubbleMenu>

      <LinkModal
        url={url}
        open={modalIsOpen}
        onOpenChange={setIsOpen}
        closeModal={closeModal}
        onChangeUrl={e => setUrl(e.target.value)}
        onSaveLink={saveLink}
        onRemoveLink={removeLink}
      />
    </div>
  )
}
