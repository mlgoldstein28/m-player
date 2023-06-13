import styles from './Navbar.module.scss';

export default function Navbar() {
    return (
    <div>
        <div className={`${styles.nav} shadow`}>
            <h1 className="fw-bold ms-3">MiscTape</h1>
        </div>
    </div>
    )
}