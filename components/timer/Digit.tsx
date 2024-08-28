interface DigitProps {
  value: any
  title: string
}

export const Digit = ({ value, title }: DigitProps) => {
  const leftDigit = value >= 10 ? value.toString()[0] : "0"
  const rightDigit = value >= 10 ? value.toString()[1] : value.toString()

  return (
    <div className="mx-1 flex flex-col items-center first:ml-0">
      <span className="mb-1 text-xs">{title}</span>
      <div className="flex flex-row p-0">
        <span className="relative flex flex-[1_1_25%] rounded-sm px-3 py-2 text-3xl text-white after:absolute after:inset-x-0 after:inset-y-1/2 after:h-1 after:w-full first:ml-1">
          {leftDigit}
        </span>
        <span className="relative flex flex-[1_1_25%] rounded-sm px-3 py-2 text-3xl text-white after:absolute after:inset-x-0 after:inset-y-1/2 after:h-1 after:w-full first:ml-1">
          {rightDigit}
        </span>
      </div>
    </div>
  )
}
