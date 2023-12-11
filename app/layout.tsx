import './globals.css'
import './calendar.css'
import ProviderRedux from 'src/redux/provider'
import Loading from 'src/screens/components/general/Loading'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <ProviderRedux>
        {children}
        <Loading />
      </ProviderRedux>
    </html>
  )
}
