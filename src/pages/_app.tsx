import { Header } from 'components/Header';
import { WishListProvider } from 'context/WishListContext';
import '../styles/global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <WishListProvider>
      <Header />
      <Component {...pageProps} />
    </WishListProvider>
  )
}

export default MyApp
