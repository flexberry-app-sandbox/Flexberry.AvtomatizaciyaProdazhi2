import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  номенк: DS.belongsTo('i-i-s-avtomatizaciya-prodazhi2-номенк', { inverse: null, async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-prodazhi2-кол-в-рез.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номенк: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-prodazhi2-кол-в-рез.validations.номенк.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КолВРезE', 'i-i-s-avtomatizaciya-prodazhi2-кол-в-рез', {
    номенк: belongsTo('i-i-s-avtomatizaciya-prodazhi2-номенк', 'Номенклатура', {
      номен: attr('Номенклатура', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'номен' }),
    количество: attr('Количество', { index: 2 })
  });

  modelClass.defineProjection('КолВРезL', 'i-i-s-avtomatizaciya-prodazhi2-кол-в-рез', {
    количество: attr('Количество', { index: 0 }),
    номенк: belongsTo('i-i-s-avtomatizaciya-prodazhi2-номенк', 'Номен', {
      номен: attr('Номен', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
