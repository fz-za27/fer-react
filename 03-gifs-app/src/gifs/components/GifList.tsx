import type { FC } from "react"
import type { Gif } from "../interfaces/gif.interface"

interface Props {
  gifs: Gif[]
}

export const GifList: FC<Props> = ({ gifs }) => {

  return (
    <div className="gifs-container">
      {
        gifs.map(({ id, height, title, url, width }) => (
          <div key={id} className="gif-card">
            <img src={url} alt={title} />
            <h3>{title}</h3>
            <p>{width} x {height} (1.5mb)</p>
          </div>
        ))
      }
    </div>
  )
}