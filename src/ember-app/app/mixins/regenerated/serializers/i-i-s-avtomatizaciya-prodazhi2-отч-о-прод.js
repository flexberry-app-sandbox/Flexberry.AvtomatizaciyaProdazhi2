import Mixin from '@ember/object/mixin';
import $ from 'jquery';

export let Serializer = Mixin.create({
  getAttrs: function () {
    let parentAttrs = this._super();
    let attrs = {
      контр: { serialize: 'odata-id', deserialize: 'records' },
      менедж: { serialize: 'odata-id', deserialize: 'records' },
      организ: { serialize: 'odata-id', deserialize: 'records' },
      подраз: { serialize: 'odata-id', deserialize: 'records' },
      склады: { serialize: 'odata-id', deserialize: 'records' },
      тЧТовИУс: { serialize: false, deserialize: 'records' }
    };

    return $.extend(true, {}, parentAttrs, attrs);
  },
  init: function () {
    this.set('attrs', this.getAttrs());
    this._super(...arguments);
  }
});
