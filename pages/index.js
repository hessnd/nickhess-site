import React from 'react';
import Head from 'next/head';

import Bio from '../components/Bio';
import Work from '../components/Work';

import stylesheet from 'styles/index.scss';

export default () => (
  <div>
    <Head>
      <title>Nick Hess</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=no'/>
      <link rel='icon' href='/static/favicon.icon'/>
    </Head>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }}/>
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
