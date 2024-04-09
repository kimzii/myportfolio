import { Spotify } from "react-spotify-embed"
import "./Footer.css"

export const Footer = () => {
  return (
    <footer>
        <Spotify link="https://open.spotify.com/track/4box0AymO0i3MUZ81ff723" height="150px" />
        <span>Copyright@2024| by Kimzii</span>
    </footer>
  )
}
