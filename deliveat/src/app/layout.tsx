import './globals.css'
import { MyContextProvider } from '@/contexts/index';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='flex-1 h-full'>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className='text-gray h-full flex-1'><MyContextProvider>{children}</MyContextProvider></body>

    </html>

  )
}
