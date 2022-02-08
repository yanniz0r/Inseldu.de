import Plausible from "plausible-tracker"

export default function getTracker() {
  if (typeof window === 'undefined') return
  const plausible = Plausible({
    apiHost: 'https://analytics.inseldu.de',
    hashMode: true,
  })

  plausible.enableAutoPageviews()

  return plausible
}