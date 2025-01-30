import Image from "next/image"
import { checkImageExists } from "./utils/imageChecker"

export default async function Page() {
  const heroImageSrc = "/images/Home1.jpg"
  const heroImageExists = await checkImageExists(heroImageSrc)

  return (
    <main className="container mx-auto mt-10 px-4">
      <h1 className="text-4xl font-bold mb-6 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
        Shema King👑 Welcomes You
      </h1>
      <div className="relative w-full h-[400px]">
        {heroImageExists ? (
          <Image
            src={heroImageSrc || "/placeholder.svg"}
            alt="Shema King"
            fill
            className="rounded-lg shadow-lg object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gray-300 flex items-center justify-center rounded-lg shadow-lg">
            <span className="text-gray-600">Hero image not found: {heroImageSrc}</span>
          </div>
        )}
      </div>
      <p className="mt-6 text-lg">
        Explore the latest music and learn more about Shema King👑's journey in the world of music.
      </p>
    </main>
  )
}

            
