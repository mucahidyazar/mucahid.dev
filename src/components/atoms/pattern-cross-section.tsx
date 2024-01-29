export function PatternCrossSection({className, ...props}: PatternProps) {
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
          width="20"
          height="20"
          patternTransform="scale(6) rotate(0)"
        >
          <path
            d="M 10,-2.55e-7 V 20 Z M -1.1677362e-8,10 H 20 Z"
            strokeWidth="0.1"
            stroke="hsla(var(--primary-500) / 0.15)"
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
export type PatternProps = {
  className?: string
}
