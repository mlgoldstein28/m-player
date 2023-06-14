import styles from './Search.module.scss';

export default function Search({setUsersArtist, usersArtist, handleClick}) {

    const handleChange = (e) => {
        let artist = e.target.value
        artist.toLowerCase().replaceAll(' ', '-')
        setUsersArtist(artist);
        console.log(usersArtist)
    }


    return (
            <div className={styles.searchContainer}>
                <input onChange={handleChange} type="text" className={`${styles.searchBar} border border-success shadow-lg`} placeholder="Choose Your Artists"></input>
                <button onClick={handleClick} className={`${styles.searchButton} btn btn-success shadow`}>Begin</button>
            </div>
    )
}