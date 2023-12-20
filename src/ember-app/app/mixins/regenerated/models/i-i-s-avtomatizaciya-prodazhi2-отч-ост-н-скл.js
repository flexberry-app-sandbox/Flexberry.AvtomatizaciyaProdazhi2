import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  колл: DS.attr('number'),
  колВРез: DS.belongsTo('i-i-s-avtomatizaciya-prodazhi2-кол-в-рез', { inverse: null, async: false }),
  номенк: DS.belongsTo('i-i-s-avtomatizaciya-prodazhi2-номенк', { inverse: null, async: false }),
  склады: DS.belongsTo('i-i-s-avtomatizaciya-prodazhi2-склады', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  колл: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл.validations.колл.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  колВРез: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл.validations.колВРез.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  номенк: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл.validations.номенк.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  склады: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл.validations.склады.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтчОстНСклE', 'i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл', {
    дата: attr('Дата', { index: 0 }),
    склады: belongsTo('i-i-s-avtomatizaciya-prodazhi2-склады', 'Склад', {
      склад: attr('Склад', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'склад' }),
    номенк: belongsTo('i-i-s-avtomatizaciya-prodazhi2-номенк', 'Номенклатура', {
      номен: attr('Номенклатура', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'номен' }),
    колл: attr('Количество', { index: 5 }),
    колВРез: belongsTo('i-i-s-avtomatizaciya-prodazhi2-кол-в-рез', 'Количество в резерве', {
      количество: attr('Количество', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'количество' })
  });

  modelClass.defineProjection('ОтчОстНСклL', 'i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл', {
    дата: attr('Дата', { index: 0 }),
    колл: attr('Колл', { index: 1 }),
    склады: belongsTo('i-i-s-avtomatizaciya-prodazhi2-склады', 'Склад', {
      склад: attr('Склад', { index: 2 })
    }, { index: -1, hidden: true }),
    колВРез: belongsTo('i-i-s-avtomatizaciya-prodazhi2-кол-в-рез', 'Количество', {
      количество: attr('Количество', { index: 3 })
    }, { index: -1, hidden: true }),
    номенк: belongsTo('i-i-s-avtomatizaciya-prodazhi2-номенк', 'Номен', {
      номен: attr('Номен', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
