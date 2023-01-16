import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import UI from '/imports/ui';

Meteor.startup(() => {
  render(
    <BrowserRouter>
      <UI />
    </BrowserRouter>,
    document.getElementById('react-target'));
});
