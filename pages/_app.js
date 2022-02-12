import Head from 'next/head'
import withRedux from 'next-redux-wrapper'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import initStore from '../store'
import { Provider } from 'react-redux'
import LocaleProvider from '../app/core/LocaleProvider'
import { AuthProvider } from '../util/use-auth'
import Layout from '../app/core/Layout'
import '../styles/pages/signup.css'
import '../styles/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import { BreakpointProvider } from 'react-socks'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { Publishable_key, Secret_key } from '../public/StripeKeys'

const stripePromise = loadStripe(Publishable_key)
const Page = ({ Component, pageProps, store }) => {
  return (
    <>
      <Head>
        <title>ArtRegistry</title>
      </Head>
      <ToastContainer
        autoClose={3000}
        closeOnClick
        draggable
        hideProgressBar={false}
        newestOnTop
        position="bottom-center"
        pauseOnFocusLoss
        pauseOnHover
        rtl={false}
      />
      <BreakpointProvider>
        <Provider store={store}>
          <LocaleProvider>
            <AuthProvider>
              <Layout>
                <Elements stripe={stripePromise}>
                  <Component {...pageProps} />
                </Elements>
              </Layout>
            </AuthProvider>
          </LocaleProvider>
        </Provider>
      </BreakpointProvider>
    </>
  )
}

export default withRedux(initStore)(Page)
