import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  сотруд: DS.belongsTo('i-i-s-avtomatizaciya-prodazhi2-сотруд', { inverse: null, async: false })
});

export let ValidationRules = {
  сотруд: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-prodazhi2-менедж.validations.сотруд.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('МенеджE', 'i-i-s-avtomatizaciya-prodazhi2-менедж', {
    сотруд: belongsTo('i-i-s-avtomatizaciya-prodazhi2-сотруд', 'ФИО', {
      фИО: attr('ФИО', { index: 0, hidden: true })
    }, { index: 1, hidden: true })
  });

  modelClass.defineProjection('МенеджL', 'i-i-s-avtomatizaciya-prodazhi2-менедж', {
    сотруд: belongsTo('i-i-s-avtomatizaciya-prodazhi2-сотруд', 'ФИО', {
      фИО: attr('ФИО', { index: 0 })
    }, { index: -1, hidden: true })
  });
};
