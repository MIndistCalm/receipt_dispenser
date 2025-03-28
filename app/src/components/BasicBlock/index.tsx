import { ReactNode } from 'react'

interface BasicBlockProps {
  className?: string
  children?: ReactNode | string
}

export const BasicBlock = ({ className = '', children }: BasicBlockProps) => {
  return <div className={`p-4 shadow-md rounded-2xl ${className}`}>{children}</div>
}
