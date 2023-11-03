import './globals.css'
import './calendar.css'
import ProviderRedux from 'src/redux/provider'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <ProviderRedux>{children}</ProviderRedux>
    </html>
  )
}
