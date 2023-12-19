import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-eshhe-primer-forest', 'Unit | Serializer | i-i-s-eshhe-primer-forest', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-eshhe-primer-forest',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-eshhe-primer-animal',
    'model:i-i-s-eshhe-primer-burrow',
    'model:i-i-s-eshhe-primer-country',
    'model:i-i-s-eshhe-primer-forest',
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
