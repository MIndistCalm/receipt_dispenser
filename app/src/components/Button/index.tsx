import { ReactNode } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children?: ReactNode | string
  disabled?: boolean
  styleButton?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export const Button = ({
  className,
  size = 'md',
  children,
  type = 'button',
  styleButton = 'primary',
  disabled = false,
  onClick = () => {},
  ...rest
}: ButtonProps) => {
  const commonClassName =
    'flex items-center justify-center rounded-2xl font-semibold cursor-pointer'

  const styleButtonClassName = {
    primary: 'bg-blue-400 text-white hover:bg-blue-800',
    secondary: 'bg-gray-200 text-gray-900',
  }

  const sizeClassName = {
    sm: 'px-4 py-2',
    md: 'px-6 py-3',
    lg: 'px-8 py-4',
  }

  return (
    <button
      type={type}
      className={`h-14 ${commonClassName} ${styleButtonClassName[styleButton]} ${sizeClassName[size]} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}
