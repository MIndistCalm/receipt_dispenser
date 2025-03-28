import { useNavigate } from 'react-router-dom'
import { ChevronRight24 } from '../../assets/icons'

interface HeaderGeneralProps {
  title?: string
  onClick: VoidFunction
}

export const HeaderGeneral = ({ title }: HeaderGeneralProps) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(-1)
  }

  return (
    <div className="relative flex h-[68px] max-h-17 items-center px-4 py-3 shadow-md">
      <button className="absolute h-11 cursor-pointer" onClick={handleClick}>
        <img
          src={ChevronRight24}
          className="rotate-180 stroke-blue-400"
          alt="<"
        />
      </button>
      <span className="pr- w-full text-center text-xl font-semibold tracking-tight">
        {title}
      </span>
    </div>
  )
}
