import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({});

export let ValidationRules = {};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-avtomatizaciya-prodazhi2-отч-о-прод'
  });
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗакПокупE', 'i-i-s-avtomatizaciya-prodazhi2-зак-покуп', {
    датаНачала: attr('Дата начала', { index: 1 }),
    датаОкончания: attr('Дата окончания', { index: 2 }),
    организ: belongsTo('i-i-s-avtomatizaciya-prodazhi2-организ', 'Организация', {
      организация: attr('Организация', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'организация' }),
    подраз: belongsTo('i-i-s-avtomatizaciya-prodazhi2-подраз', 'Подразделение', {
      подразделение: attr('Подразделение', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'подразделение' }),
    склады: belongsTo('i-i-s-avtomatizaciya-prodazhi2-склады', 'Склад', {
      склад: attr('Склад', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'склад' }),
    контр: belongsTo('i-i-s-avtomatizaciya-prodazhi2-контр', 'Контрагент', {
      контрагент: attr('Контрагент', { index: 10, hidden: true })
    }, { index: 9, displayMemberPath: 'контрагент' }),
    состОплат: attr('Состояние оплаты', { index: 11 }),
    состОтгруз: attr('Состояние отгрузки', { index: 12 }),
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

  modelClass.defineProjection('ЗакПокупL', 'i-i-s-avtomatizaciya-prodazhi2-зак-покуп', {
    датаОкончания: attr('Дата окончания', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    сумВклНДС: attr('Сум вкл НДС', { index: 2 }),
    состОтгруз: attr('Сост отгруз', { index: 3 }),
    состОплат: attr('Сост оплат', { index: 4 }),
    сумма: attr('Сумма', { index: 5 }),
    склады: belongsTo('i-i-s-avtomatizaciya-prodazhi2-склады', 'Склад', {
      склад: attr('Склад', { index: 6 })
    }, { index: -1, hidden: true }),
    организ: belongsTo('i-i-s-avtomatizaciya-prodazhi2-организ', 'Организация', {
      организация: attr('Организация', { index: 7 })
    }, { index: -1, hidden: true }),
    контр: belongsTo('i-i-s-avtomatizaciya-prodazhi2-контр', 'Контрагент', {
      контрагент: attr('Контрагент', { index: 8 })
    }, { index: -1, hidden: true }),
    подраз: belongsTo('i-i-s-avtomatizaciya-prodazhi2-подраз', 'Подразделение', {
      подразделение: attr('Подразделение', { index: 9 })
    }, { index: -1, hidden: true })
  });
};
