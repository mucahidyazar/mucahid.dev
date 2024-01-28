import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'

interface SheetTableProps {
  title: string
  data: string[][]
  showLinkAsColumn?: boolean
}
export function SheetTable({
  title,
  data,
  showLinkAsColumn = false,
}: SheetTableProps) {
  let tableHeaderData = data?.[0]
  let tableBodyData = data?.slice(1)

  const linkIndex = tableHeaderData?.findIndex(
    (cell: string) => cell === 'Link',
  )

  return (
    <div className="flex flex-col">
      <h2 className="mb-4 text-2xl text-primary-500 underline underline-offset-4">
        {title}
      </h2>
      <Table className="text-xs">
        <TableHeader>
          <TableRow>
            {tableHeaderData?.map((cell: string, index: number) => {
              if (!showLinkAsColumn && index === linkIndex) return null

              return (
                <TableHead key={index.toString()}>
                  <p className="text-main">{cell}</p>
                </TableHead>
              )
            })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow> */}
          {tableBodyData?.map((row: string[], index: number) => (
            <TableRow key={index.toString()} className="group">
              {row.map((cell: string, index: number) => {
                if (!showLinkAsColumn && index === linkIndex) return null

                const link = row[linkIndex]
                if (index === 0 && link) {
                  return (
                    <TableCell
                      key={index.toString()}
                      title={cell}
                      className="!p-2 font-semibold"
                    >
                      <a
                        className="hover:underline group-hover:text-main"
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <p className="max-w-[200px] truncate">{cell}</p>
                      </a>
                    </TableCell>
                  )
                }

                return (
                  <TableCell
                    key={index.toString()}
                    title={cell}
                    className="!p-2"
                  >
                    <p className="max-w-[200px] truncate">{cell}</p>
                  </TableCell>
                )
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
