import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as НоменкMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-номенк';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(НоменкMixin, Validations, {
});

defineProjections(Model);

export default Model;
