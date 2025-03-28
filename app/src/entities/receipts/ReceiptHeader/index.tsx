import { useNavigate } from 'react-router-dom'

interface ReceiptHeaderProps {
  className?: string
}

export const ReceiptHeader = ({ className }: ReceiptHeaderProps) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/receipts/new')
  }

  return (
    <div className="flex h-[68px] max-h-17 items-center justify-between rounded-t-lg bg-white px-4 pt-[18px] pb-2.5 shadow-md">
      <span className="text-4xl leading-10 font-bold tracking-tight">
        Все чеки
      </span>
      <button onClick={handleClick}>
        <span className="cursor-pointer text-[18px] font-semibold text-blue-400 hover:text-blue-800">
          Новый чек
        </span>
      </button>
    </div>
  )
}
