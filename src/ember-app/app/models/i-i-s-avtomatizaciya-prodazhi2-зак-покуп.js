import $ from 'jquery';
import { buildValidations } from 'ember-cp-validations';

import {
  defineBaseModel,
  defineProjections,
  ValidationRules,
  Model as ЗакПокупMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-зак-покуп';

import ОтчОПродModel from './i-i-s-avtomatizaciya-prodazhi2-отч-о-прод';
import { ValidationRules as ParentValidationRules } from '../mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-отч-о-прод';

const Validations = buildValidations($.extend({}, ParentValidationRules, ValidationRules), {
  dependentKeys: ['model.i18n.locale'],
});

let Model = ОтчОПродModel.extend(ЗакПокупMixin, Validations, {
});

defineBaseModel(Model);
defineProjections(Model);

export default Model;
