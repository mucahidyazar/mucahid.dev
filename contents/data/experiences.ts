//SVG FILES
import GranobraSvg from "../../contents/svg/experiences/granobra.svg"
import BiletsepetiSvg from "../../contents/svg/experiences/biletspeti.svg"

interface experienceInterface {
  company: string
  description: string
  position: string
  situtation: string
  from: string
  to: string
  website: string
  image: SVGElement
}

export const experiences: experienceInterface[] = [
  {
    company: "GRANOBRA",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi corporis dicta ipsum magni maxime, mollitia quae quaerat veritatis voluptate voluptatem! Accusantium dicta illum impedit quam.",
    position: "Full Stack Developer",
    situtation: "Working",
    from: "01/03/2020",
    to: "",
    website: "https://granobra.com",
    image: GranobraSvg,
  },
  {
    company: "BiletSepeti.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi corporis dicta ipsum magni maxime, mollitia quae quaerat veritatis voluptate voluptatem! Accusantium dicta illum impedit quam.",
    position: "Frontend Developer",
    situtation: "Working",
    from: "01/03/2020",
    to: "",
    website: "https://www.biletsepeti.com",
    image: BiletsepetiSvg,
  },
]
