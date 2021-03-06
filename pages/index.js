import React from 'react';
import Head from 'next/head';

import Bio from '../components/Bio';
import Work from '../components/Work';

import stylesheet from '../styles/index.scss';

export default () => (
  <div>
    <Head>
      <title>Nick Hess</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
      <link rel='icon' href='/static/favicon.ico' type='image/x-icon'/>
    </Head>
    <div className='home'>
      <div className='left'>
        <Bio />
      </div>
      <div className='right'>
        <Work />
      </div>
    </div>
  </div>
)
