import styles from './Layout.module.css'

function Layout({children}: {children: React.ReactNode}) {
  return <main className={styles.container}>{children}</main>;
}
export default Layout
