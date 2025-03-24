import { EmptyReceiptsList, ReceiptHeader, ReceiptList } from '../../entities'

const containerBaseStyle =
  'mx-auto flex h-screen flex-col gap-3 rounded-2xl bg-gray-50'
const containerResponsiveStyle =
  'md:h-[calc(100vh-0.25rem*8)] md:max-w-[500px] md:py-8 md:shadow-2xl'
const scrollbarTrackStyle =
  '[&::-webkit-scrollbar-track]:transparent h-full overflow-y-auto px-3'
const scrollbarThumbStyle =
  '[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-transparent dark:[&::-webkit-scrollbar-thumb]:bg-neutral-300'
const scrollbarTrackDarkStyle =
  '[&::-webkit-scrollbar-track]:rounded-full dark:[&::-webkit-scrollbar-track]:bg-transparent'

export const Receipts = () => {
  const receipt = []
  return (
    <div className={`${containerBaseStyle} ${containerResponsiveStyle}`}>
      <ReceiptHeader />
      <div
        className={`${scrollbarTrackStyle} ${scrollbarThumbStyle} ${scrollbarTrackDarkStyle}`}
      >
        {receipt.length > 0 ? <ReceiptList /> : <EmptyReceiptsList />}
      </div>
    </div>
  )
}
