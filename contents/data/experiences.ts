//SVG FILES
import GranobraSvg from "../../contents/svg/experiences/granobra.svg"
import BiletsepetiSvg from "../../contents/svg/experiences/biletspeti.svg"
import MaxithingsSvg from "../../contents/svg/experiences/maxithings.svg"
import GetirSvg from "../../contents/svg/experiences/getir.svg"

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
    company: "Getir",
    description: "Getir firmasında web developer olarak çalışmaya başladım.",
    position: "Frontend Developer",
    situtation: "Working",
    from: "11/02/2021",
    to: "",
    website: "https://getir.com/",
    image: GetirSvg,
  },
  {
    company: "Maxithings",
    description:
      "Maxithings firmasında 3 aylık bir çalışma sürecim oldu. Bu süreçte 1 proje üzerinde tam zamanlı olarak çalıştım. Frontend tarafı tamamen benim tarafımdan yapılmış olan iyifiyat.com e-ticaret sitesini geliştirdim.",
    position: "Frontend Developer",
    situtation: "Worked",
    from: "15/10/2020",
    to: "05/02/2021",
    website: "https://maxithings.com/",
    image: MaxithingsSvg,
  },
  {
    company: "BiletSepeti.com",
    description:
      "Granobra'da çalışırken full time olarak çalıştığım turizm e-ticaret sitesidir. React, Next.js, Redux, Sass gibi teklonojiler kullanarak geliştirdim. Figma, XD ve Zeplin üzerinden gelen tasarımları pixelperfect olarak hayata geçiriyordum. Fakat pandemiden dolayı projeyi tamamlayamadan ayrılmak zorunda kaldım.",
    position: "Frontend Developer",
    situtation: "Worked",
    from: "01/03/2020",
    to: "01/09/2020",
    website: "https://www.biletsepeti.com",
    image: BiletsepetiSvg,
  },
  {
    company: "GRANOBRA",
    description:
      "GRANOBRA şirketinde fullstack developer olarak çalıştım. 1 Full Time proje, 2 side uygulama üzerinde çalıştım.",
    position: "Full Stack Developer",
    situtation: "Worked",
    from: "01/03/2020",
    to: "01/09/2020",
    website: "https://granobra.com",
    image: GranobraSvg,
  },
]
