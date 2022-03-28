import Head from 'next/head';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

import { getSortedPostsData } from '../lib/posts';
import Heading from '../components/Heading';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
      </Head>
      <section className={utilStyles.headingMd}>
        <p className={utilStyles.aboutMe}>
          Hi! I'm Rokas, a <strong>front-end developer</strong> based in Oslo,
          Norway. Here I will be sharing my projects, knowledge of React,
          NextJS, Typescript and useful links/tips.
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Heading headingLevel="1" title="My writings and thoughts" />
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
              <br />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
