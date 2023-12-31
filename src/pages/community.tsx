import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.homeBanner)}>
      <div className="container">
        <h1 className="hero__title">
          <Translate>
            Support Grams
          </Translate>
        </h1>
        <p className="hero__subtitle">
          <Translate>
            Join different communities and interact with other Grams members
          </Translate>
        </p>
        <div>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            <Translate>Join Grams Foundation</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageContent() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2>Connect with us</h2>
        <h2>Share the vision</h2>
        <h2>Join our organizations</h2>
      </div>
    </section>
  );
}

export default function Community() {
  return (
    <Layout
      title={`Community`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageContent />
      </main>
    </Layout>
  );
}
