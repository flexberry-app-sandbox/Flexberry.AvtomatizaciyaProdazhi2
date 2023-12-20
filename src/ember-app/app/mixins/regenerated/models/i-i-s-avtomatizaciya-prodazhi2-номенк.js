import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номен: DS.attr('string'),
  едИзмер: DS.belongsTo('i-i-s-avtomatizaciya-prodazhi2-ед-измер', { inverse: null, async: false })
});

export let ValidationRules = {
  номен: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-prodazhi2-номенк.validations.номен.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  едИзмер: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-prodazhi2-номенк.validations.едИзмер.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('НоменкE', 'i-i-s-avtomatizaciya-prodazhi2-номенк', {
    номен: attr('Номенклатура', { index: 0 }),
    едИзмер: belongsTo('i-i-s-avtomatizaciya-prodazhi2-ед-измер', 'Единицы измерения', {
      едИзм: attr('Единицы измерения', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'едИзм' })
  });

  modelClass.defineProjection('НоменкL', 'i-i-s-avtomatizaciya-prodazhi2-номенк', {
    номен: attr('Номен', { index: 0 }),
    едИзмер: belongsTo('i-i-s-avtomatizaciya-prodazhi2-ед-измер', 'Ед изм', {
      едИзм: attr('Ед изм', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
