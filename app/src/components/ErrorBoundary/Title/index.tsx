function throwError() {
  throw new Error('Пропущен заголовок')
}

interface TitleProps {
  title?: string
}

export const Title = ({ title }: TitleProps) => {
  if (!title) throwError()
  return <p>{title}</p>
}
