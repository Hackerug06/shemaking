import Image from "next/image"

export default function Home() {
  return (
    <main className="container mx-auto mt-10 px-4">
      <h1 className="text-4xl font-bold mb-6 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
        Welcome to Shema King👑's Official Website
      </h1>
      <div className="relative w-full h-[400px]"> {/* Added container with fixed height */}
        <Image
          src={`/images/shema-king-hero.jpg`}  {/* Updated path */}
          alt="Shema King"
          fill
          className="rounded-lg shadow-lg object-cover"
          priority
        />
      </div>
      <p className="mt-6 text-lg">
        Explore the latest music and learn more about Shema King👑's journey in the world of music.
      </p>
    </main>
  )
}

        
