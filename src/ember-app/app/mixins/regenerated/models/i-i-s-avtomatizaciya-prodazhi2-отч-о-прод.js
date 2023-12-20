import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаНачала: DS.attr('date', { defaultValue() { return new Date(); } }),
  датаОкончания: DS.attr('date'),
  состОплат: DS.attr('i-i-s-avtomatizaciya-prodazhi2-сост-опл'),
  состОтгруз: DS.attr('i-i-s-avtomatizaciya-prodazhi2-сост-отгр'),
  сумВклНДС: DS.attr('boolean'),
  сумма: DS.attr('number'),
  контр: DS.belongsTo('i-i-s-avtomatizaciya-prodazhi2-контр', { inverse: null, async: false }),
  менедж: DS.belongsTo('i-i-s-avtomatizaciya-prodazhi2-менедж', { inverse: null, async: false }),
  организ: DS.belongsTo('i-i-s-avtomatizaciya-prodazhi2-организ', { inverse: null, async: false }),
  подраз: DS.belongsTo('i-i-s-avtomatizaciya-prodazhi2-подраз', { inverse: null, async: false }),
  склады: DS.belongsTo('i-i-s-avtomatizaciya-prodazhi2-склады', { inverse: null, async: false }),
  тЧТовИУс: DS.hasMany('i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус', { inverse: 'отчОПрод', async: false })
});

export let ValidationRules = {
  датаНачала: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-prodazhi2-отч-о-прод.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаОкончания: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-prodazhi2-отч-о-прод.validations.датаОкончания.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  состОплат: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-prodazhi2-отч-о-прод.validations.состОплат.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  состОтгруз: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-prodazhi2-отч-о-прод.validations.состОтгруз.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумВклНДС: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-prodazhi2-отч-о-прод.validations.сумВклНДС.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-prodazhi2-отч-о-прод.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  контр: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-prodazhi2-отч-о-прод.validations.контр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  менедж: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-prodazhi2-отч-о-прод.validations.менедж.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организ: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-prodazhi2-отч-о-прод.validations.организ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  подраз: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-prodazhi2-отч-о-прод.validations.подраз.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  склады: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-prodazhi2-отч-о-прод.validations.склады.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧТовИУс: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-prodazhi2-отч-о-прод.validations.тЧТовИУс.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтчОПродE', 'i-i-s-avtomatizaciya-prodazhi2-отч-о-прод', {
    датаНачала: attr('Дата Начала', { index: 1 }),
    датаОкончания: attr('Дата Окончания', { index: 2 }),
    организ: belongsTo('i-i-s-avtomatizaciya-prodazhi2-организ', 'Организация', {
      организация: attr('Организация', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'организация' }),
    склады: belongsTo('i-i-s-avtomatizaciya-prodazhi2-склады', 'Склад', {
      склад: attr('Склад', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'склад' }),
    подраз: belongsTo('i-i-s-avtomatizaciya-prodazhi2-подраз', 'Подразделение', {
      подразделение: attr('Подразделение', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'подразделение' }),
    контр: belongsTo('i-i-s-avtomatizaciya-prodazhi2-контр', 'Контрагент', {
      контрагент: attr('Контрагент', { index: 10, hidden: true })
    }, { index: 9, displayMemberPath: 'контрагент' }),
    состОплат: attr('Состояние Оплаты', { index: 11 }),
    состОтгруз: attr('Состояние Отгрузки', { index: 12 }),
    сумма: attr('Сумма', { index: 13 }),
    сумВклНДС: attr('Сумма включая НДС', { index: 14 }),
    менедж: belongsTo('i-i-s-avtomatizaciya-prodazhi2-менедж', 'Менеджер', {

    }, { index: 0 }),
    тЧТовИУс: hasMany('i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус', 'Табличная часть товаров и услуг', {
      номенк: belongsTo('i-i-s-avtomatizaciya-prodazhi2-номенк', 'Номенклатура', {
        номен: attr('Номенклатура', { index: 1, hidden: true })
      }, { index: 0, displayMemberPath: 'номен' }),
      цена: attr('Цена', { index: 2 }),
      количестов: attr('Количестов', { index: 3 }),
      колКЗаказПоста: attr('Количество к заказу поставщика', { index: 4 }),
      сумма: attr('Сумма', { index: 5 }),
      суммаНДС: attr('Сумма НДС', { index: 6 })
    })
  });

  modelClass.defineProjection('ОтчОПродL', 'i-i-s-avtomatizaciya-prodazhi2-отч-о-прод', {
    склады: belongsTo('i-i-s-avtomatizaciya-prodazhi2-склады', 'Склад', {
      склад: attr('Склад', { index: 0 })
    }, { index: -1, hidden: true }),
    организ: belongsTo('i-i-s-avtomatizaciya-prodazhi2-организ', 'Организация', {
      организация: attr('Организация', { index: 1 })
    }, { index: -1, hidden: true }),
    контр: belongsTo('i-i-s-avtomatizaciya-prodazhi2-контр', 'Контрагент', {
      контрагент: attr('Контрагент', { index: 2 })
    }, { index: -1, hidden: true }),
    подраз: belongsTo('i-i-s-avtomatizaciya-prodazhi2-подраз', 'Подразделение', {
      подразделение: attr('Подразделение', { index: 3 })
    }, { index: -1, hidden: true }),
    датаНачала: attr('', { index: 4 }),
    датаОкончания: attr('', { index: 5 }),
    состОплат: attr('', { index: 6 }),
    состОтгруз: attr('', { index: 7 }),
    сумВклНДС: attr('', { index: 8 }),
    сумма: attr('', { index: 9 })
  });
};
