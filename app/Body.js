import styles from './styles.css'
import MusicBox from './MusicBox'

export default function Body(){ //body component
    return(
        <div className='body-content'>
            <MusicBox source={'./maxresdefault.jpg'} name={'Speak To Me (2023 Remaster)'} album={'Pink Floyd - The Dark Side of the Moon (Full Album HQ)'} artist={'Pink Floyd'} link={'https://www.youtube.com/watch?v=2o4ygOv0wKk&list=PL3PhWT10BW3Urh8ZXXpuU9h526ChwgWKy&index=1'} lyric={'Speak'}/>
            <MusicBox source={'./OIP.jpg'} name={'Breathe (In The Air) (2023 Remaster)'} album={'Pink Floyd - The Dark Side of the Moon (Full Album HQ)'} artist={'Pink Floyd'} link={'https://www.youtube.com/watch?v=stOCUPEytzg&list=PL3PhWT10BW3Urh8ZXXpuU9h526ChwgWKy&index=2'} lyric={'Breathe'}/>
            <MusicBox source={'./weed.jpg'} name={'On The Run (2023 Remaster)'} album={'Pink Floyd - The Dark Side of the Moon (Full Album HQ)'} artist={'Pink Floyd'} link={'https://www.youtube.com/watch?v=KrfhWmHxKQI&list=PL3PhWT10BW3Urh8ZXXpuU9h526ChwgWKy&index=3'} lyric={'Run'}/>
            <MusicBox source={'./time.jpg'} name={'Time (2023 Remaster)'} album={'Pink Floyd - The Dark Side of the Moon (Full Album HQ)'} artist={'Pink Floyd'} link={'https://www.youtube.com/watch?v=bpnZZ14fGqE&list=PL3PhWT10BW3Urh8ZXXpuU9h526ChwgWKy&index=4'} lyric={'Time'}/>
            <MusicBox source={'./gig.jpg'} name={'The Great Gig In The Sky (2023 Remaster)'} album={'Pink Floyd - The Dark Side of the Moon (Full Album HQ)'} artist={'Pink Floyd'} link={'https://www.youtube.com/watch?v=c-8bKbAuGiA&list=PL3PhWT10BW3Urh8ZXXpuU9h526ChwgWKy&index=5'} lyric={'Gig'}/>
            <MusicBox source={'./money.jpg'} name={'Money (2023 Remaster)'} album={'Pink Floyd - The Dark Side of the Moon (Full Album HQ)'} artist={'Pink Floyd'} link={'https://www.youtube.com/watch?v=Cy4lg1w3Leo&list=PL3PhWT10BW3Urh8ZXXpuU9h526ChwgWKy&index=6'} lyric={'Money'}/>
            <MusicBox source={'./them.jpg'} name={'Us And Them (2023 Remaster)'} album={'Pink Floyd - The Dark Side of the Moon (Full Album HQ)'} artist={'Pink Floyd'} link={'https://www.youtube.com/watch?v=_It2WPW4O3s&list=PL3PhWT10BW3Urh8ZXXpuU9h526ChwgWKy&index=7'} lyric={'Them'}/>
            <MusicBox source={'./color.jpg'} name={'Any Colour You Like (2023 Remaster)'} album={'Pink Floyd - The Dark Side of the Moon (Full Album HQ)'} artist={'Pink Floyd'} link={'https://www.youtube.com/watch?v=nlgIkOT6qJk&list=PL3PhWT10BW3Urh8ZXXpuU9h526ChwgWKy&index=8'} lyric={'Colour'}/>
            <MusicBox source={'./brain.jpg'} name={'Brain Damage (2023 Remaster)'} album={'Pink Floyd - The Dark Side of the Moon (Full Album HQ)'} artist={'Pink Floyd'} link={'https://www.youtube.com/watch?v=jZEpNJ_bV6w&list=PL3PhWT10BW3Urh8ZXXpuU9h526ChwgWKy&index=9'} lyric={'Brain'}/>
            <MusicBox source={'./eclipse.jpg'} name={'Eclipse (2023 Remaster)'} album={'Pink Floyd - The Dark Side of the Moon (Full Album HQ)'} artist={'Pink Floyd'} link={'https://www.youtube.com/watch?v=k0xGxnZFNYs&list=PL3PhWT10BW3Urh8ZXXpuU9h526ChwgWKy&index=10'} lyric={'Eclipse'}/>
        </div>
    )
}
