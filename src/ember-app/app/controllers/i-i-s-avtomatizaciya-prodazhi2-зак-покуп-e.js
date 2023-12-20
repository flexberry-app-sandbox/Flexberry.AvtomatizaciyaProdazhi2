import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-avtomatizaciya-prodazhi2-зак-покуп-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус+номенк':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'номен',
            required: true,
            relationName: 'номенк',
            projection: 'НоменкL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
