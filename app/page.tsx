import Image from "next/image"

export default function Home() {
  return (
    <main className="container mx-auto mt-10 px-4">
      <h1 className="text-4xl font-bold mb-6 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
        Shema King👑 Welcomes You
      </h1>
      <Image src="/shema-king-hero.jpg" alt="Shema King" width={800} height={400} className="rounded-lg shadow-lg" />
      <p className="mt-6 text-lg">
        Explore the latest music and learn more about Shema King👑's journey in the world of music.
      </p>
    </main>
  )
}

        
