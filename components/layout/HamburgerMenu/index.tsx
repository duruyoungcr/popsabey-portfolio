import styles from './HamburgerMenu.module.css'

const HamburgerMenu = ({ toggle, handleToggle }: { toggle: boolean, handleToggle: () => void }) => {
    return (
        <div role="button" onClick={handleToggle} className={styles.nav}>
            <span className={`${styles.line} ${toggle ? '-rotate-45 translate-y-2.5 w-8' : 'w-6'}`}></span>
            <span className={`${styles.line} ${toggle ? 'opacity-0' : ''}`}></span>
            <span className={`${styles.line} ${toggle ? 'rotate-45  -translate-y-2.5 w-8' : 'w-6'}`}></span>
        </div>
    )
}

export default HamburgerMenu