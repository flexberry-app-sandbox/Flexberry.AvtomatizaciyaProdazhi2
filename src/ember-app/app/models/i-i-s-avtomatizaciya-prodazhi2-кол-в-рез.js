import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as КолВРезMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-кол-в-рез';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(КолВРезMixin, Validations, {
});

defineProjections(Model);

export default Model;
