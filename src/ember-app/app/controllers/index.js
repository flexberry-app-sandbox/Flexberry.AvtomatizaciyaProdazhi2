import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.caption'),
          title: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.title'),
          children: [{
            link: null,
            caption: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.документы.caption'),
            title: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.документы.title'),
            children: [{
              link: 'i-i-s-avtomatizaciya-prodazhi2-зак-покуп-l',
              caption: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.документы.i-i-s-avtomatizaciya-prodazhi2-зак-покуп-l.caption'),
              title: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.документы.i-i-s-avtomatizaciya-prodazhi2-зак-покуп-l.title'),
              icon: 'chart bar',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.отчеты.caption'),
            title: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.отчеты.title'),
            children: [{
              link: 'i-i-s-avtomatizaciya-prodazhi2-отч-о-прод-l',
              caption: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.отчеты.i-i-s-avtomatizaciya-prodazhi2-отч-о-прод-l.caption'),
              title: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.отчеты.i-i-s-avtomatizaciya-prodazhi2-отч-о-прод-l.title'),
              icon: 'tags',
              children: null
            }, {
              link: 'i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл-l',
              caption: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.отчеты.i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл-l.caption'),
              title: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.отчеты.i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл-l.title'),
              icon: 'paperclip',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.справочники.caption'),
            title: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.справочники.title'),
            children: [{
              link: 'i-i-s-avtomatizaciya-prodazhi2-ед-измер-l',
              caption: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.справочники.i-i-s-avtomatizaciya-prodazhi2-ед-измер-l.caption'),
              title: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.справочники.i-i-s-avtomatizaciya-prodazhi2-ед-измер-l.title'),
              icon: 'building',
              children: null
            }, {
              link: 'i-i-s-avtomatizaciya-prodazhi2-долж-l',
              caption: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.справочники.i-i-s-avtomatizaciya-prodazhi2-долж-l.caption'),
              title: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.справочники.i-i-s-avtomatizaciya-prodazhi2-долж-l.title'),
              icon: 'briefcase',
              children: null
            }, {
              link: 'i-i-s-avtomatizaciya-prodazhi2-менедж-l',
              caption: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.справочники.i-i-s-avtomatizaciya-prodazhi2-менедж-l.caption'),
              title: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.справочники.i-i-s-avtomatizaciya-prodazhi2-менедж-l.title'),
              icon: 'paperclip',
              children: null
            }, {
              link: 'i-i-s-avtomatizaciya-prodazhi2-сотруд-l',
              caption: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.справочники.i-i-s-avtomatizaciya-prodazhi2-сотруд-l.caption'),
              title: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.справочники.i-i-s-avtomatizaciya-prodazhi2-сотруд-l.title'),
              children: null
            }, {
              link: 'i-i-s-avtomatizaciya-prodazhi2-номенк-l',
              caption: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.справочники.i-i-s-avtomatizaciya-prodazhi2-номенк-l.caption'),
              title: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.справочники.i-i-s-avtomatizaciya-prodazhi2-номенк-l.title'),
              icon: 'book',
              children: null
            }, {
              link: 'i-i-s-avtomatizaciya-prodazhi2-организ-l',
              caption: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.справочники.i-i-s-avtomatizaciya-prodazhi2-организ-l.caption'),
              title: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.справочники.i-i-s-avtomatizaciya-prodazhi2-организ-l.title'),
              icon: 'file',
              children: null
            }, {
              link: 'i-i-s-avtomatizaciya-prodazhi2-подраз-l',
              caption: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.справочники.i-i-s-avtomatizaciya-prodazhi2-подраз-l.caption'),
              title: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.справочники.i-i-s-avtomatizaciya-prodazhi2-подраз-l.title'),
              icon: 'building',
              children: null
            }, {
              link: 'i-i-s-avtomatizaciya-prodazhi2-кол-в-рез-l',
              caption: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.справочники.i-i-s-avtomatizaciya-prodazhi2-кол-в-рез-l.caption'),
              title: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.справочники.i-i-s-avtomatizaciya-prodazhi2-кол-в-рез-l.title'),
              icon: 'calendar',
              children: null
            }, {
              link: 'i-i-s-avtomatizaciya-prodazhi2-контр-l',
              caption: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.справочники.i-i-s-avtomatizaciya-prodazhi2-контр-l.caption'),
              title: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.справочники.i-i-s-avtomatizaciya-prodazhi2-контр-l.title'),
              icon: 'folder',
              children: null
            }, {
              link: 'i-i-s-avtomatizaciya-prodazhi2-склады-l',
              caption: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.справочники.i-i-s-avtomatizaciya-prodazhi2-склады-l.caption'),
              title: i18n.t('forms.application.sitemap.avtomatizaciya-prodazhi2.справочники.i-i-s-avtomatizaciya-prodazhi2-склады-l.title'),
              icon: 'building',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})