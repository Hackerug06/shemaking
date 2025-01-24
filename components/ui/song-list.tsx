import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Music, Download } from "lucide-react"
import { AnimatedHeading } from "@/components/ui/animated-heading"

const songs = [
  { title: "Song 1", album: "Album 1", duration: "3:45", releaseDate: "2023-01-15", downloadLink: "#" },
  { title: "Song 2", album: "Album 2", duration: "4:12", releaseDate: "2023-03-22", downloadLink: "#" },
  { title: "Song 3", album: "Album 1", duration: "3:30", releaseDate: "2023-05-07", downloadLink: "#" },
  { title: "Song 4", album: "Album 3", duration: "3:55", releaseDate: "2023-06-30", downloadLink: "#" },
]

export function SongList() {
  return (
    <Card className="mb-8 bg-gray-800 text-white">
      <CardHeader>
        <AnimatedHeading>Top Songs</AnimatedHeading>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-gray-300">Title</TableHead>
                <TableHead className="text-gray-300">Album</TableHead>
                <TableHead className="text-gray-300">Duration</TableHead>
                <TableHead className="text-gray-300">Release Date</TableHead>
                <TableHead className="text-gray-300">Download</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {songs.map((song, index) => (
                <TableRow key={index}>
                  <TableCell className="flex items-center space-x-2">
                    <Music className="h-5 w-5" />
                    <span>{song.title}</span>
                  </TableCell>
                  <TableCell>{song.album}</TableCell>
                  <TableCell>{song.duration}</TableCell>
                  <TableCell>{song.releaseDate}</TableCell>
                  <TableCell>
                    <a
                      href={song.downloadLink}
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                    >
                      <Download className="h-5 w-5" />
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

  
