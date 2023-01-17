// import React from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';

import './en/App.en.i18n.yml'
import './en/Users.en.i18n.yml'

i18n.setOptions({
  open: '${',
  hostUrl: Meteor.absoluteUrl('/'),
  defaultLocale: 'en',
  hideMissing: true,
});

i18n.setLocale('en-US');

export default i18n;
