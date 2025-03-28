import { useNavigate } from 'react-router-dom'
import { Receipt } from '../../../pages/receipts'
import { Item } from './Item'

interface ReceiptListProps {
  receipts: Receipt[]
}

export const ReceiptList = ({ receipts }: ReceiptListProps) => {
  const navigate = useNavigate()
  const handleClick = (id: number) => {
    navigate(`/receipts/${id}`)
  }

  return (
    <div className="flex flex-col gap-2.5">
      {receipts.map((receipt, index) => (
        <Item
          key={index}
          receipt={receipt}
          onClick={() => handleClick(receipt.id)}
        />
      ))}
    </div>
  )
}
