import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as МенеджMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-менедж';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(МенеджMixin, Validations, {
});

defineProjections(Model);

export default Model;
