import styles from './AlbumDisplay.module.scss'

const AlbumDisplay = ({playlist}) => {
    let albumCover;
    if (playlist[0]) {
        albumCover = playlist[0].album.cover
}
    return (
        <div className="d-flex justify-content-center mt-5">
            <div className={`${styles.albumContainer} shadow`}>
                <img className={styles.album} src={albumCover} />
            </div>
            <div className={`${styles.albumContainer} shadow`}>
        
            </div>
            <div className={`${styles.albumContainer} shadow`}>
        
            </div>
            <div className={`${styles.albumContainer} shadow`}>
        
            </div>
        </div>
    )
}

export default AlbumDisplay;