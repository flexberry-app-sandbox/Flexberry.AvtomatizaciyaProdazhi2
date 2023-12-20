import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  подразделение: DS.attr('string')
});

export let ValidationRules = {
  подразделение: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-prodazhi2-подраз.validations.подразделение.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПодразE', 'i-i-s-avtomatizaciya-prodazhi2-подраз', {
    подразделение: attr('Подразделение', { index: 0 })
  });

  modelClass.defineProjection('ПодразL', 'i-i-s-avtomatizaciya-prodazhi2-подраз', {
    подразделение: attr('Подразделение', { index: 0 })
  });
};
