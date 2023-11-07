import styles from './layout.module.css';

export const metadata = {
    title: 'Recipp',
    description: 'Created by',
};

export default function RootLayout({ children }) {
    return (
        <html lang="pl-PL" className={styles.html}>
            <body className={styles.recipp_website}>{children}</body>
        </html>
    );
}
