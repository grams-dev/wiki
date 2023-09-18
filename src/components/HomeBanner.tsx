import React from 'react';
import Translate from '@docusaurus/Translate';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

export default function HomeBanner() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.homeBanner)}>
      <div className="container">
        <h1 className="hero__title"><Translate>Grams Wiki</Translate></h1>
        <p className="hero__subtitle"><Translate>The official documentation for Grams</Translate></p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/develop/start">
            <Translate>Start building 🚀</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}
