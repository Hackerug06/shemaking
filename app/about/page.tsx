import Image from "next/image"

export default function About() {
  return (
    <main className="container mx-auto mt-10 px-4">
      <h1 className="text-4xl font-bold mb-6 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
        About Shema King👑
      </h1>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <Image
          src="/shema-king-profile.jpg"
          alt="Shema King"
          width={400}
          height={400}
          className="rounded-lg shadow-lg"
        />
        <div>
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

