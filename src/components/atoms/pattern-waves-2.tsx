export type PatternProps = {
  className?: string
}
export function PatternWaves2({className, ...props}: PatternProps) {
  return (
    <svg
      id="patternId"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <defs>
        <pattern
          id="a"
          patternUnits="userSpaceOnUse"
          width="80"
          height="80"
          patternTransform="scale(3) rotate(170)"
        >
          <path
            d="M-20.133 4.568C-13.178 4.932-6.452 7.376 0 10c6.452 2.624 13.036 5.072 20 5 6.967-.072 13.56-2.341 20-5 6.44-2.659 13.033-4.928 20-5 6.964-.072 13.548 2.376 20 5s13.178 5.068 20.133 5.432"
            stroke-width="0.3"
            stroke="hsla(var(--primary-500) / 0.15)"
            fill="none"
          />
          <path
            d="M-20.133 24.568C-13.178 24.932-6.452 27.376 0 30c6.452 2.624 13.036 5.072 20 5 6.967-.072 13.56-2.341 20-5 6.44-2.659 13.033-4.928 20-5 6.964-.072 13.548 2.376 20 5s13.178 5.068 20.133 5.432"
            stroke-width="0.3"
            stroke="hsla(var(--primary-500) / 0.25)"
            fill="none"
          />
          <path
            d="M-20.133 44.568C-13.178 44.932-6.452 47.376 0 50c6.452 2.624 13.036 5.072 20 5 6.967-.072 13.56-2.341 20-5 6.44-2.659 13.033-4.928 20-5 6.964-.072 13.548 2.376 20 5s13.178 5.068 20.133 5.432"
            stroke-width="0.3"
            stroke="hsla(var(--primary-500) / 0.1)"
            fill="none"
          />
          <path
            d="M-20.133 64.568C-13.178 64.932-6.452 67.376 0 70c6.452 2.624 13.036 5.072 20 5 6.967-.072 13.56-2.341 20-5 6.44-2.659 13.033-4.928 20-5 6.964-.072 13.548 2.376 20 5s13.178 5.068 20.133 5.432"
            stroke-width="0.3"
            stroke="hsla(var(--primary-500) / 0.2)"
            fill="none"
          />
        </pattern>
      </defs>
      <rect
        width="800%"
        height="800%"
        transform="translate(0,0)"
        fill="url(#a)"
      />
    </svg>
  )
}
