const cleanPercentage = percentage => {
  const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0 // we can set non-numbers to 0 here
  const isTooHigh = percentage > 100
  return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage
}

const Circle = ({color, percentage, stroke}) => {
  const r = 50
  const circ = 2 * Math.PI * r
  const strokePct = ((100 - percentage) * circ) / 100 // where stroke will start, e.g. from 15% to 100%.
  const circleColor = stroke ? stroke : color
  return (
    <circle
      r={r}
      cx={126}
      cy={75}
      fill="transparent"
      stroke={strokePct !== circ ? circleColor : ''} // remove color as 0% sets full circumference
      strokeWidth="6"
      strokeDasharray={circ}
      stroke-linecap="round"
      strokeDashoffset={percentage ? strokePct : 0}
    ></circle>
  )
}

const Percent = ({percentage}) => {
  return (
    <text
      x="50%"
      y="50%"
      dominantBaseline="central"
      textAnchor="middle"
      fontSize="1.125rem"
      font-family="Fira Code"
      font-weight="400"
      stroke="#20afdf"
      stroke-width="1"
    >
      {percentage.toFixed(0)}%
    </text>
  )
}

export const ProgressCircle = percentage => {
  const pct = cleanPercentage(percentage)
  return (
    <>
      <hr />
      <svg width={150} height={150}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#ffffff" />
            <stop offset="100%" stop-color="#20afdf" />
          </linearGradient>
        </defs>
        <g transform="rotate(-90 100 100)">
          <Circle color="#e3e2e9" />
          <Circle stroke="url(#gradient)" color="#20afdf" percentage={pct} />
        </g>
        <Percent percentage={pct} />
      </svg>
    </>
  )
}
