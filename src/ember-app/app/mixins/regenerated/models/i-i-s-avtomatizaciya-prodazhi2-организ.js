import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  организация: DS.attr('string')
});

export let ValidationRules = {
  организация: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-prodazhi2-организ.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОрганизE', 'i-i-s-avtomatizaciya-prodazhi2-организ', {
    организация: attr('Организация', { index: 0 })
  });

  modelClass.defineProjection('ОрганизL', 'i-i-s-avtomatizaciya-prodazhi2-организ', {
    организация: attr('Организация', { index: 0 })
  });
};
