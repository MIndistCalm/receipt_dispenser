import { ChevronRight24 } from '../../../../assets/icons'
import { Receipt } from '../../../../pages/receipts'

interface ItemProps {
  receipt: Receipt
  onClick: VoidFunction
}

export const Item = ({ receipt, onClick = () => {} }: ItemProps) => {
  const usersCount = receipt.users.length

  const shortDate = new Date(receipt.date).toLocaleDateString('ru-RU', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  })

  return (
    <div
      className="flex cursor-pointer flex-row items-center justify-between rounded-2xl bg-white p-3 shadow-sm hover:bg-gray-50"
      onClick={onClick}
    >
      <div className="flex flex-row items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gray-200">
          <img src={receipt.emoji} className="h-7 w-7" alt="" />
        </div>
        {/* <div>{receipt.emoji}</div> */}
        <div className="flex flex-col">
          <span className="font-semibold text-blue-400">{receipt.label}</span>
          <span className="text-xs text-gray-500">
            {usersCount ? `${usersCount} чел. • ` : ''}
            {receipt.amount.toLocaleString('ru-RU')} ₽
          </span>
        </div>
      </div>
      <div className="flex items-center gap-1 rounded-full p-1">
        <span className="text-sm leading-[18px] text-gray-500">
          {shortDate}
        </span>
        <img src={ChevronRight24} className="[&>path:stroke-gray-500]" alt="" />
      </div>
    </div>
  )
}
