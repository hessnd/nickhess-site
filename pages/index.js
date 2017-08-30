import React from 'react';

import stylesheet from 'styles/index.scss';

export default () => (
  <div>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }}/>
    <h1>My Site</h1>
  </div>
)
