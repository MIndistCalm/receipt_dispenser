import { useEffect, useRef } from 'react'
import { useAuth } from '../../../hooks/useAuth'

export const SignIn = () => {
  const { phone, setPhone, initializeRecaptcha, onSignInSubmit } = useAuth()
  const recaptchaContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (recaptchaContainerRef.current) {
      initializeRecaptcha(recaptchaContainerRef.current)
    }
  }, []) // Пустой массив, чтобы эффект сработал один раз

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div id="recaptcha-container" ref={recaptchaContainerRef} />
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Img"
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold text-gray-900">
          Войдите в свою учетную запись
        </h2>
      </div>

      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={onSignInSubmit}>
          <div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-900"
              >
                Номер телефона
              </label>
            </div>
            <div className="mt-2">
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-white hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-indigo-600"
            >
              Войти
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
