import Image from "next/image"

const songs = [
  {
    title: "Chasing Money",
    duration: "3:45",
    releaseDate: "2023-05-15",
    size: "7.2 MB",
    cover: "chasingmoney.jpg",
    file: "./",
  },
  {
    title: "Reap",
    duration: "4:12",
    releaseDate: "2023-07-22",
    size: "8.1 MB",
    cover: "Reap.jpg",
    file: "reap.mp3",
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

