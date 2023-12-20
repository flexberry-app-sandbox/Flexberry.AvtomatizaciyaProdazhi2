import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количестов: DS.attr('number'),
  колКЗаказПоста: DS.attr('number'),
  сумма: DS.attr('number'),
  суммаНДС: DS.attr('number'),
  цена: DS.attr('number'),
  номенк: DS.belongsTo('i-i-s-avtomatizaciya-prodazhi2-номенк', { inverse: null, async: false }),
  отчОПрод: DS.belongsTo('i-i-s-avtomatizaciya-prodazhi2-отч-о-прод', { inverse: 'тЧТовИУс', async: false, polymorphic: true })
});

export let ValidationRules = {
  количестов: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус.validations.количестов.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  колКЗаказПоста: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус.validations.колКЗаказПоста.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  суммаНДС: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус.validations.суммаНДС.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номенк: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус.validations.номенк.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  отчОПрод: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус.validations.отчОПрод.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧТовИУсE', 'i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус', {
    номенк: belongsTo('i-i-s-avtomatizaciya-prodazhi2-номенк', 'Номенклатура', {
      номен: attr('Номенклатура', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'номен' }),
    цена: attr('Цена', { index: 2 }),
    количестов: attr('Количестов', { index: 3 }),
    колКЗаказПоста: attr('Количество к заказу поставщика', { index: 4 }),
    сумма: attr('Сумма', { index: 5 }),
    суммаНДС: attr('Сумма НДС', { index: 6 })
  });
};
