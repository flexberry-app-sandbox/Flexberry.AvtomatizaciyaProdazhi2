import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  едИзм: DS.attr('string')
});

export let ValidationRules = {
  едИзм: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-prodazhi2-ед-измер.validations.едИзм.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЕдИзмерE', 'i-i-s-avtomatizaciya-prodazhi2-ед-измер', {
    едИзм: attr('Единицы измерения', { index: 0 })
  });

  modelClass.defineProjection('ЕдИзмерL', 'i-i-s-avtomatizaciya-prodazhi2-ед-измер', {
    едИзм: attr('Ед изм', { index: 0 })
  });
};
