import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function Card({ Svg, title, description, link, small }) {

  const handleClick = (e) => {
    e.preventDefault();
    console.log(link);
  };

  return (
    <div onClick={handleClick} className={clsx('col col--4')}>
      <Link to={link}>
        <div className="text--center">
          <Svg className={small ? styles.itemSvg : styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}