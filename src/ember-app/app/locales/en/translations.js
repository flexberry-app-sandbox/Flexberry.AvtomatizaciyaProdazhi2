import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISAvtomatizaciya_Prodazhi2ДолжLForm from './forms/i-i-s-avtomatizaciya-prodazhi2-долж-l';
import IISAvtomatizaciya_Prodazhi2ЕдИзмерLForm from './forms/i-i-s-avtomatizaciya-prodazhi2-ед-измер-l';
import IISAvtomatizaciya_Prodazhi2ЗакПокупLForm from './forms/i-i-s-avtomatizaciya-prodazhi2-зак-покуп-l';
import IISAvtomatizaciya_Prodazhi2КолВРезLForm from './forms/i-i-s-avtomatizaciya-prodazhi2-кол-в-рез-l';
import IISAvtomatizaciya_Prodazhi2КонтрLForm from './forms/i-i-s-avtomatizaciya-prodazhi2-контр-l';
import IISAvtomatizaciya_Prodazhi2МенеджLForm from './forms/i-i-s-avtomatizaciya-prodazhi2-менедж-l';
import IISAvtomatizaciya_Prodazhi2НоменкLForm from './forms/i-i-s-avtomatizaciya-prodazhi2-номенк-l';
import IISAvtomatizaciya_Prodazhi2ОрганизLForm from './forms/i-i-s-avtomatizaciya-prodazhi2-организ-l';
import IISAvtomatizaciya_Prodazhi2ОтчОПродLForm from './forms/i-i-s-avtomatizaciya-prodazhi2-отч-о-прод-l';
import IISAvtomatizaciya_Prodazhi2ОтчОстНСклLForm from './forms/i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл-l';
import IISAvtomatizaciya_Prodazhi2ПодразLForm from './forms/i-i-s-avtomatizaciya-prodazhi2-подраз-l';
import IISAvtomatizaciya_Prodazhi2СкладыLForm from './forms/i-i-s-avtomatizaciya-prodazhi2-склады-l';
import IISAvtomatizaciya_Prodazhi2СотрудLForm from './forms/i-i-s-avtomatizaciya-prodazhi2-сотруд-l';
import IISAvtomatizaciya_Prodazhi2ДолжEForm from './forms/i-i-s-avtomatizaciya-prodazhi2-долж-e';
import IISAvtomatizaciya_Prodazhi2ЕдИзмерEForm from './forms/i-i-s-avtomatizaciya-prodazhi2-ед-измер-e';
import IISAvtomatizaciya_Prodazhi2ЗакПокупEForm from './forms/i-i-s-avtomatizaciya-prodazhi2-зак-покуп-e';
import IISAvtomatizaciya_Prodazhi2КолВРезEForm from './forms/i-i-s-avtomatizaciya-prodazhi2-кол-в-рез-e';
import IISAvtomatizaciya_Prodazhi2КонтрEForm from './forms/i-i-s-avtomatizaciya-prodazhi2-контр-e';
import IISAvtomatizaciya_Prodazhi2МенеджEForm from './forms/i-i-s-avtomatizaciya-prodazhi2-менедж-e';
import IISAvtomatizaciya_Prodazhi2НоменкEForm from './forms/i-i-s-avtomatizaciya-prodazhi2-номенк-e';
import IISAvtomatizaciya_Prodazhi2ОрганизEForm from './forms/i-i-s-avtomatizaciya-prodazhi2-организ-e';
import IISAvtomatizaciya_Prodazhi2ОтчОПродEForm from './forms/i-i-s-avtomatizaciya-prodazhi2-отч-о-прод-e';
import IISAvtomatizaciya_Prodazhi2ОтчОстНСклEForm from './forms/i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл-e';
import IISAvtomatizaciya_Prodazhi2ПодразEForm from './forms/i-i-s-avtomatizaciya-prodazhi2-подраз-e';
import IISAvtomatizaciya_Prodazhi2СкладыEForm from './forms/i-i-s-avtomatizaciya-prodazhi2-склады-e';
import IISAvtomatizaciya_Prodazhi2СотрудEForm from './forms/i-i-s-avtomatizaciya-prodazhi2-сотруд-e';
import IISAvtomatizaciya_Prodazhi2ДолжModel from './models/i-i-s-avtomatizaciya-prodazhi2-долж';
import IISAvtomatizaciya_Prodazhi2ЕдИзмерModel from './models/i-i-s-avtomatizaciya-prodazhi2-ед-измер';
import IISAvtomatizaciya_Prodazhi2ЗакПокупModel from './models/i-i-s-avtomatizaciya-prodazhi2-зак-покуп';
import IISAvtomatizaciya_Prodazhi2КолВРезModel from './models/i-i-s-avtomatizaciya-prodazhi2-кол-в-рез';
import IISAvtomatizaciya_Prodazhi2КонтрModel from './models/i-i-s-avtomatizaciya-prodazhi2-контр';
import IISAvtomatizaciya_Prodazhi2МенеджModel from './models/i-i-s-avtomatizaciya-prodazhi2-менедж';
import IISAvtomatizaciya_Prodazhi2НоменкModel from './models/i-i-s-avtomatizaciya-prodazhi2-номенк';
import IISAvtomatizaciya_Prodazhi2ОрганизModel from './models/i-i-s-avtomatizaciya-prodazhi2-организ';
import IISAvtomatizaciya_Prodazhi2ОтчОПродModel from './models/i-i-s-avtomatizaciya-prodazhi2-отч-о-прод';
import IISAvtomatizaciya_Prodazhi2ОтчОстНСклModel from './models/i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл';
import IISAvtomatizaciya_Prodazhi2ПодразModel from './models/i-i-s-avtomatizaciya-prodazhi2-подраз';
import IISAvtomatizaciya_Prodazhi2СкладыModel from './models/i-i-s-avtomatizaciya-prodazhi2-склады';
import IISAvtomatizaciya_Prodazhi2СотрудModel from './models/i-i-s-avtomatizaciya-prodazhi2-сотруд';
import IISAvtomatizaciya_Prodazhi2ТЧТовИУсModel from './models/i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-avtomatizaciya-prodazhi2-долж': IISAvtomatizaciya_Prodazhi2ДолжModel,
    'i-i-s-avtomatizaciya-prodazhi2-ед-измер': IISAvtomatizaciya_Prodazhi2ЕдИзмерModel,
    'i-i-s-avtomatizaciya-prodazhi2-зак-покуп': IISAvtomatizaciya_Prodazhi2ЗакПокупModel,
    'i-i-s-avtomatizaciya-prodazhi2-кол-в-рез': IISAvtomatizaciya_Prodazhi2КолВРезModel,
    'i-i-s-avtomatizaciya-prodazhi2-контр': IISAvtomatizaciya_Prodazhi2КонтрModel,
    'i-i-s-avtomatizaciya-prodazhi2-менедж': IISAvtomatizaciya_Prodazhi2МенеджModel,
    'i-i-s-avtomatizaciya-prodazhi2-номенк': IISAvtomatizaciya_Prodazhi2НоменкModel,
    'i-i-s-avtomatizaciya-prodazhi2-организ': IISAvtomatizaciya_Prodazhi2ОрганизModel,
    'i-i-s-avtomatizaciya-prodazhi2-отч-о-прод': IISAvtomatizaciya_Prodazhi2ОтчОПродModel,
    'i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл': IISAvtomatizaciya_Prodazhi2ОтчОстНСклModel,
    'i-i-s-avtomatizaciya-prodazhi2-подраз': IISAvtomatizaciya_Prodazhi2ПодразModel,
    'i-i-s-avtomatizaciya-prodazhi2-склады': IISAvtomatizaciya_Prodazhi2СкладыModel,
    'i-i-s-avtomatizaciya-prodazhi2-сотруд': IISAvtomatizaciya_Prodazhi2СотрудModel,
    'i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус': IISAvtomatizaciya_Prodazhi2ТЧТовИУсModel
  },

  'application-name': 'Avtomatizaciya_ prodazhi2',

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
        'application-name': 'Avtomatizaciya_ prodazhi2',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Avtomatizaciya_ prodazhi2',
          title: 'Avtomatizaciya_ prodazhi2'
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
        'avtomatizaciya-prodazhi2': {
          caption: 'Avtomatizaciya_Prodazhi2',
          title: 'Avtomatizaciya_Prodazhi2',
          документы: {
            caption: 'Документы',
            title: 'Документы',
            'i-i-s-avtomatizaciya-prodazhi2-зак-покуп-l': {
              caption: 'Зак покуп',
              title: ''
            }
          },
          отчеты: {
            caption: 'Отчеты',
            title: 'Отчеты',
            'i-i-s-avtomatizaciya-prodazhi2-отч-о-прод-l': {
              caption: 'Отч о прод',
              title: ''
            },
            'i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл-l': {
              caption: 'Отч ост н скл',
              title: ''
            }
          },
          справочники: {
            caption: 'Справочники',
            title: 'Справочники',
            'i-i-s-avtomatizaciya-prodazhi2-ед-измер-l': {
              caption: 'Ед измер',
              title: ''
            },
            'i-i-s-avtomatizaciya-prodazhi2-долж-l': {
              caption: 'Долж',
              title: ''
            },
            'i-i-s-avtomatizaciya-prodazhi2-менедж-l': {
              caption: 'Менедж',
              title: ''
            },
            'i-i-s-avtomatizaciya-prodazhi2-сотруд-l': {
              caption: 'Сотруд',
              title: ''
            },
            'i-i-s-avtomatizaciya-prodazhi2-номенк-l': {
              caption: 'Номенк',
              title: ''
            },
            'i-i-s-avtomatizaciya-prodazhi2-организ-l': {
              caption: 'Организ',
              title: ''
            },
            'i-i-s-avtomatizaciya-prodazhi2-подраз-l': {
              caption: 'Подраз',
              title: ''
            },
            'i-i-s-avtomatizaciya-prodazhi2-кол-в-рез-l': {
              caption: 'Кол в рез',
              title: ''
            },
            'i-i-s-avtomatizaciya-prodazhi2-контр-l': {
              caption: 'Контр',
              title: ''
            },
            'i-i-s-avtomatizaciya-prodazhi2-склады-l': {
              caption: 'Склады',
              title: ''
            }
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
    'i-i-s-avtomatizaciya-prodazhi2-долж-l': IISAvtomatizaciya_Prodazhi2ДолжLForm,
    'i-i-s-avtomatizaciya-prodazhi2-ед-измер-l': IISAvtomatizaciya_Prodazhi2ЕдИзмерLForm,
    'i-i-s-avtomatizaciya-prodazhi2-зак-покуп-l': IISAvtomatizaciya_Prodazhi2ЗакПокупLForm,
    'i-i-s-avtomatizaciya-prodazhi2-кол-в-рез-l': IISAvtomatizaciya_Prodazhi2КолВРезLForm,
    'i-i-s-avtomatizaciya-prodazhi2-контр-l': IISAvtomatizaciya_Prodazhi2КонтрLForm,
    'i-i-s-avtomatizaciya-prodazhi2-менедж-l': IISAvtomatizaciya_Prodazhi2МенеджLForm,
    'i-i-s-avtomatizaciya-prodazhi2-номенк-l': IISAvtomatizaciya_Prodazhi2НоменкLForm,
    'i-i-s-avtomatizaciya-prodazhi2-организ-l': IISAvtomatizaciya_Prodazhi2ОрганизLForm,
    'i-i-s-avtomatizaciya-prodazhi2-отч-о-прод-l': IISAvtomatizaciya_Prodazhi2ОтчОПродLForm,
    'i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл-l': IISAvtomatizaciya_Prodazhi2ОтчОстНСклLForm,
    'i-i-s-avtomatizaciya-prodazhi2-подраз-l': IISAvtomatizaciya_Prodazhi2ПодразLForm,
    'i-i-s-avtomatizaciya-prodazhi2-склады-l': IISAvtomatizaciya_Prodazhi2СкладыLForm,
    'i-i-s-avtomatizaciya-prodazhi2-сотруд-l': IISAvtomatizaciya_Prodazhi2СотрудLForm,
    'i-i-s-avtomatizaciya-prodazhi2-долж-e': IISAvtomatizaciya_Prodazhi2ДолжEForm,
    'i-i-s-avtomatizaciya-prodazhi2-ед-измер-e': IISAvtomatizaciya_Prodazhi2ЕдИзмерEForm,
    'i-i-s-avtomatizaciya-prodazhi2-зак-покуп-e': IISAvtomatizaciya_Prodazhi2ЗакПокупEForm,
    'i-i-s-avtomatizaciya-prodazhi2-кол-в-рез-e': IISAvtomatizaciya_Prodazhi2КолВРезEForm,
    'i-i-s-avtomatizaciya-prodazhi2-контр-e': IISAvtomatizaciya_Prodazhi2КонтрEForm,
    'i-i-s-avtomatizaciya-prodazhi2-менедж-e': IISAvtomatizaciya_Prodazhi2МенеджEForm,
    'i-i-s-avtomatizaciya-prodazhi2-номенк-e': IISAvtomatizaciya_Prodazhi2НоменкEForm,
    'i-i-s-avtomatizaciya-prodazhi2-организ-e': IISAvtomatizaciya_Prodazhi2ОрганизEForm,
    'i-i-s-avtomatizaciya-prodazhi2-отч-о-прод-e': IISAvtomatizaciya_Prodazhi2ОтчОПродEForm,
    'i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл-e': IISAvtomatizaciya_Prodazhi2ОтчОстНСклEForm,
    'i-i-s-avtomatizaciya-prodazhi2-подраз-e': IISAvtomatizaciya_Prodazhi2ПодразEForm,
    'i-i-s-avtomatizaciya-prodazhi2-склады-e': IISAvtomatizaciya_Prodazhi2СкладыEForm,
    'i-i-s-avtomatizaciya-prodazhi2-сотруд-e': IISAvtomatizaciya_Prodazhi2СотрудEForm
  },

});

export default translations;
