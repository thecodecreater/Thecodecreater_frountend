import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import WhatsAppFloatingButton from '../components/WhatsAppFloatingButton';
import StarfieldBg from '../components/StarfieldBg';
import Header from '../components/Header';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Header />
      <StarfieldBg />
      <Component {...pageProps} />
      <WhatsAppFloatingButton />
    </>
  );
}

export default MyApp;
