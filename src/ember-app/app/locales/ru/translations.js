import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Eshhe_primer',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Eshhe_primer',
          title: 'Eshhe_primer'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
