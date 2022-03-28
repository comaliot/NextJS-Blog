import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import Link from 'next/link';
import Social from './Social';

export const siteTitle = 'Rokas Samuolis - front-end developer';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#603cba" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="Rokas Samuolis - front-end developer, graphic designer"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Link href="/">
              <a>
                <Image priority src="/images/R.svg" height={50} width={50} />
              </a>
            </Link>
            <Social />
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image priority src="/images/R.svg" height={50} width={50} />
              </a>
            </Link>
            <Social />
          </>
        )}
      </header>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <main>{children}</main>
    </div>
  );
}
