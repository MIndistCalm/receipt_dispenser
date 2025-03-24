interface ReceiptHeaderProps {
  className?: string
}

export const ReceiptHeader = ({ className }: ReceiptHeaderProps) => {
  return (
    <div className="flex max-h-17 items-center justify-between rounded-t-lg bg-white px-4 pt-[18px] pb-2.5 shadow-md">
      <span className="text-4xl leading-10 font-bold tracking-tight">
        Все чеки
      </span>
      <button>
        <span className="text-[18px] font-semibold text-blue-400 hover:text-blue-800 cursor-pointer">
          Новый чек
        </span>
      </button>
    </div>
  )
}
