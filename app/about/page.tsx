import Image from "next/image"
import { checkImageExists } from "../utils/imageChecker"

export default async function About() {
  const profileImageSrc = "/images/shema-king-profile.jpg"
  const profileImageExists = await checkImageExists(profileImageSrc)

  return (
    <main className="container mx-auto mt-10 px-4">
      <h1 className="text-4xl font-bold mb-6 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
        About Shema King👑
      </h1>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="relative w-full md:w-1/2 aspect-square">
          {profileImageExists ? (
            <Image
              src={profileImageSrc || "logo.png"}
              alt="Shema King"
              fill
              className="rounded-lg shadow-lg object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-300 flex items-center justify-center rounded-lg shadow-lg">
              <span className="text-gray-600">Profile image not found</span>
            </div>
          )}
        </div>
        <div className="md:w-1/2">
          <p className="text-lg mb-4">
            Shema King👑 is a rising star in the music industry, known for his unique blend of afrobeats and
            contemporary R&B. Born and raised in [City/Country], Shema discovered his passion for music at a young age.
          </p>
          <p className="text-lg mb-4">
            With a voice that captivates and lyrics that inspire, Shema King👑 has been making waves in the music scene
            since his debut in [Year]. His music often explores themes of love, empowerment, and cultural pride.
          </p>
          <p className="text-lg">
            Shema King👑's journey is just beginning, and he's excited to share his music with the world. Stay tuned for
            upcoming releases and live performances!
          </p>
        </div>
      </div>
    </main>
  )
}

      
