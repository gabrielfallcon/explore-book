import { Header } from '../components/Header';
import '../styles/global.scss';
import { WishListProvider } from '../context/WishListContext';

function MyApp({ Component, pageProps }) {
  return (
    <WishListProvider>
      <Header />
      <Component {...pageProps} />
    </WishListProvider>
  )
}

export default MyApp
