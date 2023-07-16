import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

import Card from '@site/src/components/Card';

import styles from './styles.module.css';

const CardList = [
  {
    title: 'Grams for Android',
    Svg: require('@site/static/img/libraries/android.svg').default,
    description: 'Harness the full potential of Grams in your Android applications.',
    link: '/docs/develop/libraries/grams-android'
  },
  {
    title: 'Grams for iOS',
    Svg: require('@site/static/img/libraries/ios.svg').default,
    description: 'Unlock the power of Grams in your iOS apps.',
    link: '/docs/develop/libraries/grams-ios'
  },
  {
    title: 'Grams for Unity',
    Svg: require('@site/static/img/libraries/unity.svg').default,
    description: 'Create immersive Grams experiences in Unity.',
    link: '/docs/develop/libraries/grams-unity'
  },
];



export default function PlatformLibraries() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className={styles.header}>Platform Libraries</h2>
        <div className="row">
          {CardList.map((props, idx) => (
            <Card key={idx} {...props} small />
          ))}
        </div>
      </div>
    </section>
  );
}
