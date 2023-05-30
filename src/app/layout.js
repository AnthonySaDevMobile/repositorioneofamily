import './globals.css'


export const metadata = {
  title: 'NeoFamily',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
