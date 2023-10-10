import Footer from 'src/screens/components/general/Footer'
import './globals.css'
import Navbar from 'src/screens/components/general/Navbar'
import ProviderRedux from 'src/redux/provider'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ProviderRedux>
          <Navbar />
          <div style={{ paddingTop: 72 }}>{children}</div>
          <Footer />
        </ProviderRedux>
      </body>
    </html>
  )
}
