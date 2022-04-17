import styles from './HamburgerMenu.module.css'

const HamburgerMenu = ({ toggle, handleToggle }: { toggle: boolean, handleToggle: () => void }) => {
    return (
        <div role="button" onClick={handleToggle} className={styles.nav}>
            <span className={`${styles.line} ${toggle ? '-rotate-45 translate-x-2 translate-y-3 w-12' : 'w-7'}`}></span>
            <span className={`${styles.line} ${toggle ? 'opacity-0' : ''}`}></span>
            <span className={`${styles.line} ${toggle ? 'rotate-45 translate-x-2 -translate-y-3 w-12' : 'w-7'}`}></span>
        </div>
    )
}

export default HamburgerMenu