import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISEshhe_primerAnimalLForm from './forms/i-i-s-eshhe-primer-animal-l';
import IISEshhe_primerCountryLForm from './forms/i-i-s-eshhe-primer-country-l';
import IISEshhe_primerForestLForm from './forms/i-i-s-eshhe-primer-forest-l';
import IISEshhe_primerAnimalEForm from './forms/i-i-s-eshhe-primer-animal-e';
import IISEshhe_primerCountryEForm from './forms/i-i-s-eshhe-primer-country-e';
import IISEshhe_primerForestEForm from './forms/i-i-s-eshhe-primer-forest-e';
import IISEshhe_primerAnimalModel from './models/i-i-s-eshhe-primer-animal';
import IISEshhe_primerBurrowModel from './models/i-i-s-eshhe-primer-burrow';
import IISEshhe_primerCountryModel from './models/i-i-s-eshhe-primer-country';
import IISEshhe_primerForestModel from './models/i-i-s-eshhe-primer-forest';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-eshhe-primer-animal': IISEshhe_primerAnimalModel,
    'i-i-s-eshhe-primer-burrow': IISEshhe_primerBurrowModel,
    'i-i-s-eshhe-primer-country': IISEshhe_primerCountryModel,
    'i-i-s-eshhe-primer-forest': IISEshhe_primerForestModel
  },

  'application-name': 'Eshhe_primer',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Eshhe_primer',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Eshhe_primer',
          title: 'Eshhe_primer'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'eshhe-primer': {
          caption: 'Eshhe_primer',
          title: 'Eshhe_primer',
          'i-i-s-eshhe-primer-forest-l': {
            caption: 'Forest',
            title: ''
          },
          'i-i-s-eshhe-primer-animal-l': {
            caption: 'Animal',
            title: ''
          },
          'i-i-s-eshhe-primer-country-l': {
            caption: 'Country',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-eshhe-primer-animal-l': IISEshhe_primerAnimalLForm,
    'i-i-s-eshhe-primer-country-l': IISEshhe_primerCountryLForm,
    'i-i-s-eshhe-primer-forest-l': IISEshhe_primerForestLForm,
    'i-i-s-eshhe-primer-animal-e': IISEshhe_primerAnimalEForm,
    'i-i-s-eshhe-primer-country-e': IISEshhe_primerCountryEForm,
    'i-i-s-eshhe-primer-forest-e': IISEshhe_primerForestEForm
  },

});

export default translations;
