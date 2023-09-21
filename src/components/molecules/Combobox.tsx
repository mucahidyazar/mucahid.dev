'use client'

import {Check, ChevronsUpDown} from 'lucide-react'
import {useState} from 'react'

import {Button} from '@/components/atoms/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/atoms/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/atoms/popover'
import {cn} from '@/utils'

interface IData {
  label: string | number
  value: string | number
}
interface IComboboxProps {
  data: IData[]
  label: string
  value: string | number | undefined
  onChange: (value: string | number) => void
}
export function Combobox({data, value, onChange, label}: IComboboxProps) {
  const [open, setOpen] = useState(false)

  const selectedCity = data.find(
    framework => String(framework.value) === String(value),
  )

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between"
        >
          {value ? selectedCity?.label : `Select ${label}...`}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <Command className="bg-black bg-opacity-50">
          <CommandInput placeholder={`Search ${label}...`} />
          <CommandEmpty>No {label} found.</CommandEmpty>
          <CommandGroup className="overflow-y-scroll max-h-[200px]">
            {data.map(item => (
              <CommandItem
                key={item.value}
                onSelect={currentValue => {
                  const foundedItem = data.find(
                    i =>
                      String(i.label).toLowerCase() ===
                      String(currentValue).toLowerCase(),
                  )
                  onChange && onChange(foundedItem?.value as string | number)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === String(item?.value) ? 'opacity-100' : 'opacity-0',
                  )}
                />
                {item?.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
