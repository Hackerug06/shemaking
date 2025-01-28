import Image from "next/image"

const songs = [
  {
    title: "Chasing Money",
    duration: "2:42",
    releaseDate: "2023-05-9",
    size: "2.47 MB",
    cover: "/Chasing-Money.jpg",
    file: "/Chasing-Money-Shema-King.mp3",
  },
  {
    title: "Dirty Dance",
    duration: "2:43",
    releaseDate: "2023-08-16",
    size: "2.49 MB",
    cover: "/Dirty-Dance.jpg",
    file: "/Dirty-Dance-Shema-King-Official.mp3",
  },
  {
    title: "Reap",
    duration: "3:14",
    releaseDate: "2023-09-3",
    size: "2.97 MB",
    cover: "/Reap.jpg",
    file: "/Reap-Shema-King.mp3",
  },
  {
    title: "No Stress",
    duration: "2:33",
    releaseDate: "2024-06-06",
    size: "2.33 MB",
    cover: "/No-Stress.jpg",
    file: "/No Stress-Shema-King.mp3",
  },
  {
    title: "Mr Right",
    duration: "2:34",
    releaseDate: "2023-12-15",
    size: "2.35 MB",
    cover: "/Mr-Right.jpg",
    file: "/Mr-Right-Shema-King.mp3",
  },
  // Add more songs as needed
]

export default function Music() {
  return (
    <main className="container mx-auto mt-10 px-4">
      <h1 className="text-4xl font-bold mb-6 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
        Music
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {songs.map((song, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <Image
              src={song.cover || "/placeholder.svg"}
              alt={`${song.title} Cover`}
              width={200}
              height={200}
              className="rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{song.title}</h2>
            <p>Duration: {song.duration}</p>
            <p>Release Date: {song.releaseDate}</p>
            <p>Size: {song.size}</p>
            <audio controls className="w-full mt-2">
              <source src={song.file} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <a
              href={song.file}
              download
              className="mt-2 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </main>
  )
}

