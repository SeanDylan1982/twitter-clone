import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="Home">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Twitter Clone</title>
        <link rel="favicon" type="image/x-icon" href="./public/favicon.ico" />
      </head>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Twitter Clone</h1>
        
      </main>
    </div>
  )
}