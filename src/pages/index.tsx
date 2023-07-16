import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomeBanner from '@site/src/components/HomeBanner';
import QuickStart from '@site/src/components/QuickStart';
import Libraries from '@site/src/components/Libraries';
import PlatformLibraries from '@site/src/components/PlatformLibraries';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      description={siteConfig.tagline}>
      <HomeBanner />
      <div className="alert alert--primary" role="alert">
        The alpha release is hosting a faucet that can fund any Grams wallet for free!
      </div>
      <main>
        <QuickStart />
        <Libraries />
        <PlatformLibraries />
      </main>
    </Layout>
  );
}
