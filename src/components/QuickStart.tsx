import React from 'react';

import Translate, {translate} from '@docusaurus/Translate';

import Card from '@site/src/components/Card';

import styles from './styles.module.css';

const CardList = [
  {
    title: translate({
      message: 'What is Grams'
    }),
    Svg: require('@site/static/img/quickstart/what_is_grams.svg').default,
    description: (
      <Translate>
        Discover what is Grams and how to use it.
      </Translate>
    ),
    link: '/docs/use/what-is-grams'
  },
  {
    title: translate({
      message: 'Create a dApp'
    }),
    Svg: require('@site/static/img/quickstart/rocket_launch.svg').default,
    description: (
      <Translate>
        Create your first decentralized application (dApp) in 5 mins.
      </Translate>
    ),
    link: '/docs/develop/get-started/create-dapp'
  },
  {
    title: translate({
      message: 'Interact with Grams'
    }),
    Svg: require('@site/static/img/quickstart/interact_grams.svg').default,
    description: (
      <Translate>
        Explore how to integrate Grams into your application.
      </Translate>
    ),
    link: '/docs/playground'
  },
];

export default function QuickStart() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className={styles.header}><Translate>Quick Start</Translate></h2>
        <div className="row">
          {CardList.map((props, idx) => (
            <Card key={idx} {...props} small={false}/>
          ))}
        </div>
      </div>
    </section>
  );
}
