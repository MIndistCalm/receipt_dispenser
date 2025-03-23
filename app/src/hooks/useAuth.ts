import { useState, useRef } from 'react'
import {
  RecaptchaVerifier,
  ConfirmationResult,
  signInWithPhoneNumber,
} from 'firebase/auth'
import { auth } from '../firebase/firebaseConfig'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

declare global {
  interface Window {
    recaptchaVerifier: RecaptchaVerifier | undefined
    confirmationResult: ConfirmationResult | undefined
  }
}

export const useAuth = () => {
  const [phone, setPhone] = useState('')
  const recaptchaVerifierRef = useRef<RecaptchaVerifier | null>(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const initializeRecaptcha = (recaptchaContainer: HTMLDivElement) => {
    console.log('Инициализация reCAPTCHA')
    if (!recaptchaVerifierRef.current) {
      recaptchaVerifierRef.current = new RecaptchaVerifier(
        auth,
        recaptchaContainer,
        {
          size: 'invisible',
          callback: () => {
            console.log('reCAPTCHA успешно отрендерен')
            onSignInSubmit()
          },
        }
      )
      recaptchaVerifierRef.current.render()
    }
  }

  const onSignInSubmit = async (event?: React.FormEvent) => {
    console.log('Попытка входа')
    event?.preventDefault()

    if (!phone) {
      console.error('Введите номер телефона')
      return
    }

    const appVerifier = recaptchaVerifierRef.current

    if (!appVerifier) {
      console.error('reCAPTCHA не инициализирован')
      return
    }

    try {
      console.log('Отправка SMS для входа или создания пользователя')
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phone,
        appVerifier
      )
      window.confirmationResult = confirmationResult

      const code = window.prompt('Введите код из SMS')
      if (code) {
        console.log('Подтверждение кода')
        confirmationResult
          .confirm(code)
          .then((result) => {
            const user = result.user
            console.log('Вы зашли в систему')

            // Пользователь успешно авторизован или создан

            const phoneNumber = user.phoneNumber

            // Для установки номера телефона
            dispatch({ type: 'SET_PHONE', payload: phoneNumber })
            navigate('/home')
            if (user.uid) {
              localStorage.setItem('access', user.uid)
            }
            console.log('Номер телефона пользователя:', phoneNumber)
          })
          .catch((error) => {
            console.error('Ошибка при подтверждении кода:', error)
          })
      } else {
        console.error('Код не был введен')
      }
    } catch (error) {
      console.error('Ошибка при отправке SMS:', error)
    }
  }

  return { phone, setPhone, initializeRecaptcha, onSignInSubmit }
}
