interface EmptyReceiptsListProps {
  className?: string
}

export const EmptyReceiptsList = ({ className }: EmptyReceiptsListProps) => {
  return (
    <div className="flex flex-col gap-5 rounded-2xl bg-white p-4 shadow-lg">
      <div className="flex flex-col gap-1.5">
        <span className="text-[16px] font-semibold">Здесь пока пусто</span>
        <p className="text-gray-400">Добавьте первый чек</p>
      </div>
      <button className="min-h-14 w-full cursor-pointer rounded-2xl bg-blue-400 hover:bg-blue-800">
        <span className="text-[16px] leading-6 font-bold text-white">
          Добавить новый чек
        </span>
      </button>
    </div>
  )
}
