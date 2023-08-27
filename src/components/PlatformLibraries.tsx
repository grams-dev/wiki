import React from 'react';

import Translate, {translate} from '@docusaurus/Translate';

import clsx from 'clsx';
import Link from '@docusaurus/Link';

import Card from '@site/src/components/Card';

import styles from './styles.module.css';

const CardList = [
  {
    title: translate({
      message: 'Grams for Android'
    }),
    Svg: require('@site/static/img/libraries/android.svg').default,
    description: (
      <Translate>
        Harness the full potential of Grams in your Android applications.
      </Translate>
    ),
    link: '/docs/develop/libraries/android'
  },
  {
    title: translate({
      message: 'Grams for iOS'
    }),
    Svg: require('@site/static/img/libraries/ios.svg').default,
    description: (
      <Translate>
        Unlock the power of Grams in your iOS apps.
      </Translate>
    ),
    link: '/docs/develop/libraries/ios'
  },
  {
    title: translate({
      message: 'Grams for Unity'
    }),
    Svg: require('@site/static/img/libraries/unity.svg').default,
    description: (
      <Translate>
        Create immersive Grams experiences in Unity.
      </Translate>
    ),
    link: '/docs/develop/libraries/unity'
  }
];



export default function PlatformLibraries() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className={styles.header}><Translate>Platform Libraries</Translate></h2>
        <div className="row">
          {CardList.map((props, idx) => (
            <Card key={idx} {...props} small />
          ))}
        </div>
      </div>
    </section>
  );
}
