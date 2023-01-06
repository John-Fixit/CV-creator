import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.css"
import Navbar from '../Components/Navbar'
function MyApp({ Component, pageProps }) {
  if(Component.getLayOut){
    return Component.getLayOut(
      <>
        <Component {...pageProps} />
      </>
    )
  }
  else{
    return <>

      <Navbar />
      <Component {...pageProps} />
    </>
  }
 
}

export default MyApp
