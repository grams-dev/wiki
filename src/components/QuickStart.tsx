import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

import Card from '@site/src/components/Card';

import styles from './styles.module.css';

const CardList = [
  {
    title: 'What is Grams',
    Svg: require('@site/static/img/quickstart/what_is_grams.svg').default,
    description: (
      <>
        Discover what is Grams and how to use it.
      </>
    ),
    link: '/docs/use/what-is-grams'
  },
  {
    title: 'Create a dApp',
    Svg: require('@site/static/img/quickstart/rocket_launch.svg').default,
    description: (
      <>
        Create your first decentralized application (dApp) in 5 mins.
      </>
    ),
    link: '/docs/develop/tutorials/create-a-dapp'
  },
  {
    title: 'Interact with Grams',
    Svg: require('@site/static/img/quickstart/interact_grams.svg').default,
    description: (
      <>
        Explore how to integrate Grams into your application.
      </>
    ),
    link: '/docs/develop/tutorials/interact-with-grams'
  },
];

export default function QuickStart() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className={styles.header}>Quick Start</h2>
        <div className="row">
          {CardList.map((props, idx) => (
            <Card key={idx} {...props} small={false}/>
          ))}
        </div>
      </div>
    </section>
  );
}
