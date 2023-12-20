import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-avtomatizaciya-prodazhi2-сотруд', 'Unit | Model | i-i-s-avtomatizaciya-prodazhi2-сотруд', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-avtomatizaciya-prodazhi2-долж',
    'model:i-i-s-avtomatizaciya-prodazhi2-ед-измер',
    'model:i-i-s-avtomatizaciya-prodazhi2-зак-покуп',
    'model:i-i-s-avtomatizaciya-prodazhi2-кол-в-рез',
    'model:i-i-s-avtomatizaciya-prodazhi2-контр',
    'model:i-i-s-avtomatizaciya-prodazhi2-менедж',
    'model:i-i-s-avtomatizaciya-prodazhi2-номенк',
    'model:i-i-s-avtomatizaciya-prodazhi2-организ',
    'model:i-i-s-avtomatizaciya-prodazhi2-отч-о-прод',
    'model:i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл',
    'model:i-i-s-avtomatizaciya-prodazhi2-подраз',
    'model:i-i-s-avtomatizaciya-prodazhi2-склады',
    'model:i-i-s-avtomatizaciya-prodazhi2-сотруд',
    'model:i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
