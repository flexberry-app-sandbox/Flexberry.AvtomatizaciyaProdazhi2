import {
  defineNamespace,
  defineProjections,
  Model as КолВРезMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-кол-в-рез';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КолВРезMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
