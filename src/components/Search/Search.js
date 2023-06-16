import styles from './Search.module.scss';

export default function Search({handleClick, handleChange, inputValue}) {

    return (
            <div className={styles.searchContainer}>
                <input onChange={handleChange} value={inputValue} type="text" className={`${styles.searchBar} border border-success shadow-lg`} placeholder="Choose Your Artists"></input>
                <button onClick={handleClick} className={`${styles.searchButton} btn btn-success shadow`}>Begin</button>
            </div>
    )
}