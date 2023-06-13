import styles from './Search.module.scss';

export default function Search() {
    return (
            <div className={styles.searchContainer}>
                <input type="text" className={`${styles.searchBar} border border-success shadow-lg`} placeholder="Choose Your Artists"></input>
                <button className={`${styles.searchButton} btn btn-success shadow`}>Begin</button>
            </div>
    )
}