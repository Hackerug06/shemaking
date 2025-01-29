import Image from "next/image"
import { checkImageExists } from "../utils/imageChecker"

const songs = [
  {
    title: "Mr.Right",
    duration: "2:34",
    releaseDate: "2024-12-15",
    size: "2.61 MB",
    cover: "/images/Mr-Right.jpg",
    file: "/Mr-Right-Shema-King.mp3",
  },
  {
    title: "Reap",
    duration: "3:14",
    releaseDate: "2024-04-3rd",
    size: "3.12 MB",
    cover: "/images/Reap.jpg",
    file: "/Reap-Shema-King.mp3",
  },
  {
    title: "No Stress",
    duration: "2:33",
    releaseDate: "2024-08-13",
    size: "2.44 MB",
    cover: "/images/No-Stress.jpg",
    file: "/No Stress-Shema-King-Official.mp3",
  },
  {
    title: "Chasing Money",
    duration: "2:42",
    releaseDate: "2023-04-3",
    size: "2.59 MB",
    cover: "/images/Dirty-Dance.jpg",
    file: "/Reap-Shema-King.mp3",
  },
  {
    title: "Dirty Dance",
    duration: "2:43",
    releaseDate: "2023-05-16",
    size: "2.61 MB",
    cover: "/images/Dirty-Dance.jpg",
    file: "/Dirty-Dance-Shema-King-Official.mp3",
  },
]

export default async function Music() {
  const songsWithImageStatus = await Promise.all(
    songs.map(async (song) => ({
      ...song,
      coverExists: await checkImageExists(song.cover),
    })),
  )

  return (
    <main className="container mx-auto mt-10 px-4">
      <h1 className="text-4xl font-bold mb-6 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
        Music
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {songsWithImageStatus.map((song, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <div className="relative w-full aspect-square mb-4">
              {song.coverExists ? (
                <Image
                  src={song.cover || "/placeholder.svg"}
                  alt={`${song.title} Cover`}
                  fill
                  className="rounded-md object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-300 flex items-center justify-center rounded-md">
                  <span className="text-gray-600">Cover not found: {song.cover}</span>
                </div>
              )}
            </div>
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

    
