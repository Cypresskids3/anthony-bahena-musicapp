'use client'
import styles from "./styles.css"
import { useState } from "react"
export default function MusicBox(props){
    const[isHovered, setIsHovered] = useState(false);
    return(
        <div className="music-grid">
            <div className="image-box">
                <img src={props.source} alt="cover"className="music-image"onClick={
                    () => {
                        window.open(props.link, '_blank')
                    }
                } onMouseEnter={
                    () => {
                        setIsHovered(true); 
                    }
                } onMouseLeave={
                    () => {
                        setIsHovered(false);
                    }
                }/>
                {
                    isHovered ? <img className="play-button" src="play-button.png"/> : <></>
                }
            </div>
            <div className="music-info-box">
                <h1 className="song-name">{props.name}</h1>
                <p className="music-supp-text">on</p>
                <h1 className="album">{props.album}</h1>
                <p className="music-supp-text">by</p>
                <h1 className="artist-name">{props.artist}</h1>
                <p className="lyric">'{props.lyric}'</p>
            </div>
        </div>
    )
}

/*10 Songs
song -> Speak To Me (2023 Remaster)
| Pink Floyd| Pink Floyd - The Dark Side of the Moon (Full Album HQ)| [youtube link](https://www.youtube.com/watch?v=2o4ygOv0wKk&list=PL3PhWT10BW3Urh8ZXXpuU9h526ChwgWKy&index=1 | Speak 

1 image for each song -> image goes in public folder

song -> Breathe (In The Air) (2023 Remaster)
| Pink Floyd| Pink Floyd - The Dark Side of the Moon (Full Album HQ)| [youtube link](https://www.youtube.com/watch?v=stOCUPEytzg&list=PL3PhWT10BW3Urh8ZXXpuU9h526ChwgWKy&index=2) | Breathe 

1 image for each song -> image goes in public folder

song -> On The Run (2023 Remaster)
| Pink Floyd| Pink Floyd - The Dark Side of the Moon (Full Album HQ)| [youtube link](https://www.youtube.com/watch?v=KrfhWmHxKQI&list=PL3PhWT10BW3Urh8ZXXpuU9h526ChwgWKy&index=3) | Run

1 image for each song -> image goes in public folder

song -> Time (2023 Remaster)
| Pink Floyd| Pink Floyd - The Dark Side of the Moon (Full Album HQ)| [youtube link](https://www.youtube.com/watch?v=bpnZZ14fGqE&list=PL3PhWT10BW3Urh8ZXXpuU9h526ChwgWKy&index=4) | Time 

1 image for each song -> image goes in public folder

song -> The Great Gig In The Sky (2023 Remaster)
| Pink Floyd| Pink Floyd - The Dark Side of the Moon (Full Album HQ)| [youtube link](https://www.youtube.com/watch?v=c-8bKbAuGiA&list=PL3PhWT10BW3Urh8ZXXpuU9h526ChwgWKy&index=5) | 
Gig 

1 image for each song -> image goes in public folder

song -> Money (2023 Remaster)
| Pink Floyd| Pink Floyd - The Dark Side of the Moon (Full Album HQ)| [youtube link](https://www.youtube.com/watch?v=Cy4lg1w3Leo&list=PL3PhWT10BW3Urh8ZXXpuU9h526ChwgWKy&index=6) | Money 

1 image for each song -> image goes in public folder

song -> Us And Them (2023 Remaster)
| Pink Floyd| Pink Floyd - The Dark Side of the Moon (Full Album HQ)| [youtube link](https://www.youtube.com/watch?v=_It2WPW4O3s&list=PL3PhWT10BW3Urh8ZXXpuU9h526ChwgWKy&index=7) | Them 

1 image for each song -> image goes in public folder

song -> Any Colour You Like (2023 Remaster)
| Pink Floyd| Pink Floyd - The Dark Side of the Moon (Full Album HQ)| [youtube link](https://www.youtube.com/watch?v=nlgIkOT6qJk&list=PL3PhWT10BW3Urh8ZXXpuU9h526ChwgWKy&index=8) | Colour 

1 image for each song -> image goes in public folder

song -> Brain Damage (2023 Remaster)
| Pink Floyd| Pink Floyd - The Dark Side of the Moon (Full Album HQ)| [youtube link](https://www.youtube.com/watch?v=jZEpNJ_bV6w&list=PL3PhWT10BW3Urh8ZXXpuU9h526ChwgWKy&index=9) | Brain 

1 image for each song -> image goes in public folder

song -> Eclipse (2023 Remaster)
| Pink Floyd| Pink Floyd - The Dark Side of the Moon (Full Album HQ)| [youtube link](https://www.youtube.com/watch?v=k0xGxnZFNYs&list=PL3PhWT10BW3Urh8ZXXpuU9h526ChwgWKy&index=10) | Eclipse 

1 image for each song -> image goes in public folder*/
