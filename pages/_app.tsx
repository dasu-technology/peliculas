import Navbar from '@/components/navbar';
import App, { AppContext, AppInitialProps, AppProps } from 'next/app'
 
type AppOwnProps = { example: string }
 
export default function MyApp({
  Component,
  pageProps,
  example,
}: AppProps & AppOwnProps) {
    const navLinks = [
        { text: 'Home', url: '/' },
        { text: 'Movie', url: '/movie' }
      ];
  return (
    <>

      {/* <p>Data: {example}</p> */}
      <Navbar title="My Website" links={navLinks} />  
      <Component {...pageProps} />
    </>
  )
}
 
MyApp.getInitialProps = async (
  context: AppContext
): Promise<AppOwnProps & AppInitialProps> => {
  const ctx = await App.getInitialProps(context)
 
  return { ...ctx, example: 'data' }
}