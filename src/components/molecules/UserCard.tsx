interface UserCardProps {
  firstName: string
  lastName: string
  age: number | string
}
export function UserCard({firstName, lastName, age}: UserCardProps) {
  return (
    <div className="mb-4 flex gap-2">
      <div className="bg-indigo-500 text-white w-12 h-12 p-4 rounded text-xl font-bold items-center flex justify-center">
        {firstName?.charAt(0)}
        {lastName?.charAt(0)}
      </div>
      <div>
        <p>
          {firstName} {lastName}
        </p>
        <p className="text-xs">{age}</p>
      </div>
    </div>
  )
}
