import { FC } from "react"

interface KotlinIconProps {
}

const KotlinIcon: FC<KotlinIconProps> = (props) => {
  return <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform scale-50">
    <path d="M64 64H0V0H64L31.3373 31.5369L64 64Z" fill="url(#paint0_radial)"/>
    <defs>
      <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(61.8732 2.63097) scale(73.3111)">
        <stop offset="0.00343514" stopColor="#EF4857"/>
        <stop offset="0.4689" stopColor="#D211EC"/>
        <stop offset="1" stopColor="#7F52FF"/>
      </radialGradient>
    </defs>
  </svg>
}

export default KotlinIcon
