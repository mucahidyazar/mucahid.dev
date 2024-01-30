'use client'
import Image from 'next/image'
import {useState} from 'react'

import {MediaCard} from '../molecules/MediaCard'
import {Dialog, DialogContent, DialogTrigger} from '../ui/dialog'

const moviesByYears = {
  2022: [
    {
      name: 'The Godfather',
      src: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
      ry: 2022,
      point: 10,
      comment:
        'Dive into the brutal, magnetic world of the Corleone family with “The Godfather.” The film, directed by Francis Ford Coppola, redefined the gangster genre. Marlon Brando and Al Pacino deliver captivating performances, painting a complex portrait of power, family, and corruption. Its sophisticated narrative and unforgettable dialogues have cemented “The Godfather“ as an unchallenged classic in cinema history.',
    },
  ],
  2023: [
    {
      name: 'The Lord of the Rings: The Fellowship of the Ring',
      src: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg',
      ry: 2023,
      point: 10,
      comment:
        "Step into a compelling tale of hope in a dark world, transported to unknown lands. Tolkien's magical universe comes to life under Peter Jackson's brilliant direction. Powerful characters and breathtaking sceneries plunge you right into the heart of adventure. As one of the most impactful works of fantasy cinema, “The Fellowship of the Ring“ leaves an unforgettable impression.",
    },
    {
      name: 'The Lord of the Rings: The Two Towers',
      src: 'https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
      ry: 2023,
      point: 10,
      comment:
        "“The Two Towers” beautifully builds on the foundation set by its predecessor. It intensifies the struggle against evil forces, heightening the tension and emotional stakes. Peter Jackson's masterful storytelling once again captures the spirit of Tolkien's world. Epic battles, complex characters, and profound themes make this sequel an unforgettable experience.",
    },
    {
      name: 'The Lord of the Rings: The Return of the King',
      src: 'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
      ry: 2023,
      point: 10,
      comment:
        "The grand finale of the trilogy, “The Return of the King,” culminates in a heart-stopping climax that stands as a testament to bravery and sacrifice. From stirring performances to stunning visual effects, the film's commitment to its epic vision is unquestionable. A triumphant conclusion, it offers a satisfying end to an unparalleled journey in the realm of fantasy cinema.",
    },
  ],
}

export function MoviesTemplate() {
  const [image, setImage] = useState('')

  return (
    <div className="flex flex-col gap-8">
      <Dialog>
        <blockquote className="text-xs italic">
          Not all movies I watched are listed here. I only list movies that I
          love and suggest to others with the year I watched them.. I also share
          with you with my personal rating between 1 and 10.
        </blockquote>

        <DialogContent className="w-fit border-none p-0">
          <Image
            src={image}
            alt="Movie poster"
            width={1000}
            height={1000}
            className="h-full w-auto origin-center rounded-md object-contain"
          />
        </DialogContent>
        {Object.entries(moviesByYears)
          .sort(() => -1)
          .map(([year, movies]) => (
            <div key={year}>
              <h2 className="mb-4 text-2xl text-primary underline underline-offset-4">
                {year}
              </h2>
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                {movies.map(movie => (
                  <DialogTrigger key={movie.name + movie.ry}>
                    <MediaCard
                      media={movie}
                      onClick={() => setImage(movie.src)}
                      showInfo
                    />
                  </DialogTrigger>
                ))}
              </div>
            </div>
          ))}
      </Dialog>
    </div>
  )
}
