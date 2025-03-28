import { HeaderGeneral } from '../../components'
import { ReceiptNewForm } from '../../entities/receipts'

interface ReceiptsNewProps {
  className?: string
}

export const ReceiptsNew = ({ className }: ReceiptsNewProps) => {
  return (
    <>
      <HeaderGeneral title="Новый чек" />
      <ReceiptNewForm />
    </>
  )
}
