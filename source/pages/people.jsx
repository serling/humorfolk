import React from 'react';

import Page from '../components/page';
import Heading from '../components/heading';
import Text from '../components/text';
import Row from '../components/row';

const People = () => (
  <Page>
    <Row>
      <Row.Content column={Row.columns.two}>
        <div>
          <Heading>Us, the people</Heading>
          <Text>lots of experience, blah blah</Text>
        </div>
      </Row.Content>
    </Row>
  </Page>
);

export default People;
