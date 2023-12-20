import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-avtomatizaciya-prodazhi2-подраз', 'Unit | Serializer | i-i-s-avtomatizaciya-prodazhi2-подраз', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-avtomatizaciya-prodazhi2-подраз',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-avtomatizaciya-prodazhi2-сост-опл',
    'transform:i-i-s-avtomatizaciya-prodazhi2-сост-отгр',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
