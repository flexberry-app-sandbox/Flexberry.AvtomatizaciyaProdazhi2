import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОрганизMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-организ';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОрганизMixin, Validations, {
});

defineProjections(Model);

export default Model;
