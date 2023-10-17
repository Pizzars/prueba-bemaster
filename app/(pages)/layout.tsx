import Navbar from "src/screens/components/general/Navbar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: 72 }}>{children}</div>
    </>
  )
}