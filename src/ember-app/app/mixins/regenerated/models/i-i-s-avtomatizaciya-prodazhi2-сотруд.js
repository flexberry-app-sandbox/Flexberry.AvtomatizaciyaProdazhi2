import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фИО: DS.attr('string'),
  долж: DS.belongsTo('i-i-s-avtomatizaciya-prodazhi2-долж', { inverse: null, async: false })
});

export let ValidationRules = {
  фИО: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-prodazhi2-сотруд.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  долж: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-prodazhi2-сотруд.validations.долж.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудE', 'i-i-s-avtomatizaciya-prodazhi2-сотруд', {
    фИО: attr('ФИО', { index: 0 }),
    долж: belongsTo('i-i-s-avtomatizaciya-prodazhi2-долж', 'Должность', {
      должность: attr('Должность', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'должность' })
  });

  modelClass.defineProjection('СотрудL', 'i-i-s-avtomatizaciya-prodazhi2-сотруд', {
    фИО: attr('ФИО', { index: 0 }),
    долж: belongsTo('i-i-s-avtomatizaciya-prodazhi2-долж', 'Должность', {
      должность: attr('Должность', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
