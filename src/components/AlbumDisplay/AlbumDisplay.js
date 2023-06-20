import styles from './AlbumDisplay.module.scss'

const AlbumDisplay = ({playlist}) => {
    let display;
    if (playlist[0]) {
        display = playlist.map((x) => {
           let { album } = x
           console.log(album.cover)

    return (
        <div key={album.id} className="d-flex justify-content-center mt-5">
            <div className={`${styles.albumContainer} shadow-lg`}>
                <img className={styles.album} src={album.cover} />
            </div>
        </div>
    )
}
)
    }
    return <>{display}</>
}

export default AlbumDisplay;