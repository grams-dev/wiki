import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

import Card from '@site/src/components/Card';

import styles from './styles.module.css';

const CardList = [
  {
    title: 'Grams SDK',
    Svg: require('@site/static/img/libraries/sdk.svg').default,
    description: 'Simplify Grams integration with a powerful SDK for seamless interaction and development.',
    link: '/docs/develop/libraries/sdk'
  },
  {
    title: 'Grams Subjects',
    Svg: require('@site/static/img/libraries/subject.svg').default,
    description: 'Compose and build subjects, the first decentralized subject-oriented programming framework.',
    link: '/docs/develop/libraries/subjects'
  },
  {
    title: 'Grams dApps',
    Svg: require('@site/static/img/libraries/window.svg').default,
    description: 'Decentralized applications powered by the Grams network for secure and feature-rich user experiences.',
    link: '/docs/develop/libraries/dapps'
  },
  {
    title: 'Grams Contracts',
    Svg: require('@site/static/img/libraries/contracts.svg').default,
    description: 'Unlock the potential of smart contracts for decentralized application development on Grams.',
    link: '/docs/develop/libraries/contracts'
  },
  {
    title: 'GNS',
    Svg: require('@site/static/img/libraries/gns.svg').default,
    description: 'Grams Naming Service, a decentralized system responsible for translating human-readable names into addresses within the Grams network.',
    link: '/docs/develop/libraries/gns'
  },
];

export default function Libraries() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className={styles.header}>Core Libraries</h2>
        <div className="row">
          {CardList.map((props, idx) => (
            <Card key={idx} {...props} small />
          ))}
        </div>
      </div>
    </section>
  );
}
