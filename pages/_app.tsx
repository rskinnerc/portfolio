import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import {store} from '../store/store'
import { firebaseInit } from 'firespot'
import { getAnalytics } from "firebase/analytics";
import { useEffect } from 'react'

firebaseInit();

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const analytics = getAnalytics();
  }, [])

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
