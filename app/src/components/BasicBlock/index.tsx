import { ReactNode } from 'react'

interface BasicBlockProps {
  className?: string
  children?: ReactNode | string
  onClick?: VoidFunction
}

export const BasicBlock = ({
  className = '',
  children,
  onClick = () => {},
  ...rest
}: BasicBlockProps) => {
  return (
    <div
      className={`rounded-2xl p-4 shadow-md ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </div>
  )
}
