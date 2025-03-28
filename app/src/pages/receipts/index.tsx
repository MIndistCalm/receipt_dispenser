import { EmojiEnum } from '../../assets/images'
import { EmptyReceiptsList, ReceiptHeader, ReceiptList } from '../../entities'

const scrollbarTrackStyle =
  '[&::-webkit-scrollbar-track]:transparent h-full overflow-y-auto px-3'
const scrollbarThumbStyle =
  '[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-transparent dark:[&::-webkit-scrollbar-thumb]:bg-neutral-300'
const scrollbarTrackDarkStyle =
  '[&::-webkit-scrollbar-track]:rounded-full dark:[&::-webkit-scrollbar-track]:bg-transparent'

export interface Receipt {
  id: number
  date: string
  amount: number
  label: string
  emoji: string
  users: User[]
}

export interface User {
  id: number
  name: string
  image: string
}

export const Receipts = () => {
  const receipts: Receipt[] = [
    {
      id: 1,
      date: new Date().toUTCString(),
      amount: 100,
      label: 'Каршеринг',
      emoji: EmojiEnum.PINK_HEART,
      users: [
        {
          id: 1,
          name: 'John Doe',
          image: 'https://picsum.photos/id/100/200/300',
        },
        {
          id: 2,
          name: 'John Doe',
          image: 'https://picsum.photos/id/100/200/300',
        },
        {
          id: 3,
          name: 'John Doe',
          image: 'https://picsum.photos/id/100/200/300',
        },
      ],
    },
    {
      id: 2,
      date: new Date().toUTCString(),
      amount: 1_326.87,
      label: 'Каршеринг',
      emoji: EmojiEnum.PINK_HEART,
      users: [
        {
          id: 1,
          name: 'John Doe',
          image: 'https://picsum.photos/id/100/200/300',
        },
        {
          id: 2,
          name: 'John Doe',
          image: 'https://picsum.photos/id/100/200/300',
        },
        {
          id: 3,
          name: 'John Doe',
          image: 'https://picsum.photos/id/100/200/300',
        },
      ],
    },
    {
      id: 3,
      date: new Date().toUTCString(),
      amount: 100,
      label: 'Каршеринг',
      emoji: EmojiEnum.PINK_HEART,
      users: [
        {
          id: 1,
          name: 'John Doe',
          image: 'https://picsum.photos/id/100/200/300',
        },
        {
          id: 2,
          name: 'John Doe',
          image: 'https://picsum.photos/id/100/200/300',
        },
        {
          id: 3,
          name: 'John Doe',
          image: 'https://picsum.photos/id/100/200/300',
        },
      ],
    },
  ]

  return (
    <>
      <ReceiptHeader />
      <div
        className={`${scrollbarTrackStyle} ${scrollbarThumbStyle} ${scrollbarTrackDarkStyle}`}
      >
        {receipts.length > 0 ? (
          <ReceiptList receipts={receipts} />
        ) : (
          <EmptyReceiptsList />
        )}
      </div>
    </>
  )
}
