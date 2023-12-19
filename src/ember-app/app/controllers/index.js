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
          caption: i18n.t('forms.application.sitemap.eshhe-primer.caption'),
          title: i18n.t('forms.application.sitemap.eshhe-primer.title'),
          children: [{
            link: 'i-i-s-eshhe-primer-forest-l',
            caption: i18n.t('forms.application.sitemap.eshhe-primer.i-i-s-eshhe-primer-forest-l.caption'),
            title: i18n.t('forms.application.sitemap.eshhe-primer.i-i-s-eshhe-primer-forest-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-eshhe-primer-animal-l',
            caption: i18n.t('forms.application.sitemap.eshhe-primer.i-i-s-eshhe-primer-animal-l.caption'),
            title: i18n.t('forms.application.sitemap.eshhe-primer.i-i-s-eshhe-primer-animal-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-eshhe-primer-country-l',
            caption: i18n.t('forms.application.sitemap.eshhe-primer.i-i-s-eshhe-primer-country-l.caption'),
            title: i18n.t('forms.application.sitemap.eshhe-primer.i-i-s-eshhe-primer-country-l.title'),
            icon: 'list',
            children: null
          }]
        }
      ]
    };
  }),
})