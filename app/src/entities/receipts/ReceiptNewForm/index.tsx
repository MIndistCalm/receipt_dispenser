import { useFormik } from 'formik'
import { BasicBlock } from '../../../components'
import { ChevronRight24, Plus20 } from '../../../assets/icons'
import { Button } from '../../../components/Button'
import { useNavigate } from 'react-router-dom'

interface ReceiptNewFormProps {
  className?: string
}

export const ReceiptNewForm = ({ className }: ReceiptNewFormProps) => {
  const navigate = useNavigate()
  const { values, setFieldValue } = useFormik({
    initialValues: {
      label: '',
      amount: 0,
      emoji: '',
    },
    onSubmit: (values) => {
      console.log(values)
    },
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setFieldValue(e.target.name, e.target.value)
  }

  const handleToReceiptItemClick = () => {
    navigate('/')
  }

  console.log(values)

  return (
    <form className="flex h-full flex-col justify-between gap-3 px-3 pb-3">
      <div className="flex h-full flex-col gap-3">
        <BasicBlock className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <span className="text-[16px] font-semibold">Название чека</span>
            <span className="text-sm leading-5 text-gray-500">
              Выберите эмодзи по нажатию на плюс, чтобы отличать чек в списке
              всех чеков
            </span>
          </div>
          <div className="flex flex-row items-center gap-3">
            <button className="flex max-h-10 min-h-10 max-w-10 min-w-10 items-center justify-center rounded-full bg-gray-200">
              <img src={Plus20} className="h-5 w-5" alt="" />
            </button>
            <input
              type="text"
              id="receiptName"
              name="label"
              className="block h-14 w-full rounded-2xl border border-gray-300 bg-transparent px-4 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none"
              placeholder="Например, лекарства"
              onChange={handleInputChange}
            />
          </div>
        </BasicBlock>
        <BasicBlock
          className="flex cursor-pointer flex-row gap-1 hover:bg-gray-100"
          onClick={handleToReceiptItemClick}
        >
          <div className="flex flex-col gap-1">
            <span className="text-[16px] font-semibold">Позиции в чеке</span>
            <span className="text-sm leading-5 text-gray-500">Нет позиций</span>
          </div>
          <img src={ChevronRight24} alt=">" />
        </BasicBlock>
      </div>
      <Button className="w-full" type="submit">
        Создать чек
      </Button>
    </form>
  )
}
