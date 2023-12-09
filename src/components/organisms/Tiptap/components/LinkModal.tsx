import {Button} from '@/components/ui/button'
import {Dialog, DialogContent} from '@/components/ui/dialog'
import {Input} from '@/components/ui/input'

interface LinkModalProps {
  url: string
  open: boolean
  onOpenChange: (open: boolean) => void
  closeModal: () => void
  onChangeUrl: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSaveLink: (e: React.MouseEvent<HTMLButtonElement>) => void
  onRemoveLink: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export function LinkModal(props: LinkModalProps) {
  const {url, onChangeUrl, onSaveLink, onRemoveLink, ...rest} = props
  return (
    <Dialog {...rest}>
      <DialogContent className="p-4 text-foreground sm:max-w-[425px]">
        <div>
          <Input autoFocus value={url} onChange={onChangeUrl} />
          <div>
            <Button size="sm" type="button" onClick={onRemoveLink}>
              Remove
            </Button>
            <Button size="sm" type="button" onClick={onSaveLink}>
              Save
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
