import type { GiphyRandomResponse } from "../data/giphy.response"

const API_KEY = ''

const createImageInsideDOM = (url: string) => {
  const imgElement = document.createElement('img')
  imgElement.src = url

  document.body.append(imgElement)
}

const getRandomGifURL = async (): Promise<string> => {
  const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)

  // const data = (await response.json()) as GiphyRandomResponse
  const { data }: GiphyRandomResponse = await response.json()

  return data.images.original.url
}

getRandomGifURL()
  .then(createImageInsideDOM)