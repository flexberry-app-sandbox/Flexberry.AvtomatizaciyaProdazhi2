'use strict';

define('ember-app/tests/acceptance/flexberry/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s avtomatizaciya prodazhi2 долж l');

  (0, _qunit.test)('testing i-i-s-avtomatizaciya-prodazhi2-долж-l', function (assert) {
    var _this = this;

    visit('/i-i-s-avtomatizaciya-prodazhi2-долж-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s avtomatizaciya prodazhi2 ед измер l');

  (0, _qunit.test)('testing i-i-s-avtomatizaciya-prodazhi2-ед-измер-l', function (assert) {
    var _this = this;

    visit('/i-i-s-avtomatizaciya-prodazhi2-ед-измер-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s avtomatizaciya prodazhi2 зак покуп l');

  (0, _qunit.test)('testing i-i-s-avtomatizaciya-prodazhi2-зак-покуп-l', function (assert) {
    var _this = this;

    visit('/i-i-s-avtomatizaciya-prodazhi2-зак-покуп-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s avtomatizaciya prodazhi2 кол в рез l');

  (0, _qunit.test)('testing i-i-s-avtomatizaciya-prodazhi2-кол-в-рез-l', function (assert) {
    var _this = this;

    visit('/i-i-s-avtomatizaciya-prodazhi2-кол-в-рез-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s avtomatizaciya prodazhi2 контр l');

  (0, _qunit.test)('testing i-i-s-avtomatizaciya-prodazhi2-контр-l', function (assert) {
    var _this = this;

    visit('/i-i-s-avtomatizaciya-prodazhi2-контр-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s avtomatizaciya prodazhi2 менедж l');

  (0, _qunit.test)('testing i-i-s-avtomatizaciya-prodazhi2-менедж-l', function (assert) {
    var _this = this;

    visit('/i-i-s-avtomatizaciya-prodazhi2-менедж-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s avtomatizaciya prodazhi2 номенк l');

  (0, _qunit.test)('testing i-i-s-avtomatizaciya-prodazhi2-номенк-l', function (assert) {
    var _this = this;

    visit('/i-i-s-avtomatizaciya-prodazhi2-номенк-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s avtomatizaciya prodazhi2 организ l');

  (0, _qunit.test)('testing i-i-s-avtomatizaciya-prodazhi2-организ-l', function (assert) {
    var _this = this;

    visit('/i-i-s-avtomatizaciya-prodazhi2-организ-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s avtomatizaciya prodazhi2 отч о прод l');

  (0, _qunit.test)('testing i-i-s-avtomatizaciya-prodazhi2-отч-о-прод-l', function (assert) {
    var _this = this;

    visit('/i-i-s-avtomatizaciya-prodazhi2-отч-о-прод-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s avtomatizaciya prodazhi2 отч ост н скл l');

  (0, _qunit.test)('testing i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл-l', function (assert) {
    var _this = this;

    visit('/i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s avtomatizaciya prodazhi2 подраз l');

  (0, _qunit.test)('testing i-i-s-avtomatizaciya-prodazhi2-подраз-l', function (assert) {
    var _this = this;

    visit('/i-i-s-avtomatizaciya-prodazhi2-подраз-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s avtomatizaciya prodazhi2 склады l');

  (0, _qunit.test)('testing i-i-s-avtomatizaciya-prodazhi2-склады-l', function (assert) {
    var _this = this;

    visit('/i-i-s-avtomatizaciya-prodazhi2-склады-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s avtomatizaciya prodazhi2 сотруд l');

  (0, _qunit.test)('testing i-i-s-avtomatizaciya-prodazhi2-сотруд-l', function (assert) {
    var _this = this;

    visit('/i-i-s-avtomatizaciya-prodazhi2-сотруд-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application-offline.js should pass ESLint\n\n');
  });

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass ESLint\n\n');
  });

  QUnit.test('enums/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0441\u0442-\u043E\u043F\u043B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'enums/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0441\u0442-\u043E\u043F\u043B.js should pass ESLint\n\n');
  });

  QUnit.test('enums/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0441\u0442-\u043E\u0442\u0433\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'enums/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0441\u0442-\u043E\u0442\u0433\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-avtomatizaciya-prodazhi2-\u0442-\u0447-\u0442\u043E\u0432-\u0438-\u0443\u0441.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-avtomatizaciya-prodazhi2-\u0442-\u0447-\u0442\u043E\u0432-\u0438-\u0443\u0441.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/translations.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-avtomatizaciya-prodazhi2-\u0442-\u0447-\u0442\u043E\u0432-\u0438-\u0443\u0441.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-avtomatizaciya-prodazhi2-\u0442-\u0447-\u0442\u043E\u0432-\u0438-\u0443\u0441.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/translations.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-\u0442-\u0447-\u0442\u043E\u0432-\u0438-\u0443\u0441.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-\u0442-\u0447-\u0442\u043E\u0432-\u0438-\u0443\u0441.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u0442-\u0447-\u0442\u043E\u0432-\u0438-\u0443\u0441-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u0442-\u0447-\u0442\u043E\u0432-\u0438-\u0443\u0441-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u0442-\u0447-\u0442\u043E\u0432-\u0438-\u0443\u0441.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-\u0442-\u0447-\u0442\u043E\u0432-\u0438-\u0443\u0441.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-avtomatizaciya-prodazhi2-\u0442-\u0447-\u0442\u043E\u0432-\u0438-\u0443\u0441.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-avtomatizaciya-prodazhi2-\u0442-\u0447-\u0442\u043E\u0432-\u0438-\u0443\u0441.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-l.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-avtomatizaciya-prodazhi2-\u0442-\u0447-\u0442\u043E\u0432-\u0438-\u0443\u0441-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-avtomatizaciya-prodazhi2-\u0442-\u0447-\u0442\u043E\u0432-\u0438-\u0443\u0441-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-avtomatizaciya-prodazhi2-\u0442-\u0447-\u0442\u043E\u0432-\u0438-\u0443\u0441.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-avtomatizaciya-prodazhi2-\u0442-\u0447-\u0442\u043E\u0432-\u0438-\u0443\u0441.js should pass ESLint\n\n');
  });

  QUnit.test('services/offline-globals.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/offline-globals.js should pass ESLint\n\n');
  });

  QUnit.test('services/store.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/store.js should pass ESLint\n\n');
  });

  QUnit.test('transforms/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0441\u0442-\u043E\u043F\u043B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0441\u0442-\u043E\u043F\u043B.js should pass ESLint\n\n');
  });

  QUnit.test('transforms/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0441\u0442-\u043E\u0442\u0433\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0441\u0442-\u043E\u0442\u0433\u0440.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('ember-app/tests/helpers/ember-i18n/test-helpers', ['ember-i18n/test-support/-private/t', 'ember-i18n/test-support/-private/assert-translation'], function (_t2, _assertTranslation2) {
  'use strict';

  // example usage: find(`.header:contains(${t('welcome_message')})`)
  Ember.Test.registerHelper('t', function (app, key, interpolations) {
    return (0, _t2.default)(app.__container__, key, interpolations);
  });

  // example usage: expectTranslation('.header', 'welcome_message');
  Ember.Test.registerHelper('expectTranslation', function (app, element, key, interpolations) {
    var text = (0, _t2.default)(app.__container__, key, interpolations);

    (0, _assertTranslation2.default)(element, key, text);
  });
});
define('ember-app/tests/helpers/ember-prop-types', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.createComponent = createComponent;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var VERSION = Ember.VERSION;


  /**
   * Determine if we are on a version of Ember that includes Glimmer 2
   * @returns {Boolean} whether or not we are on Glimmer 2
   */
  function isGlimmer2() {
    var _VERSION$split = VERSION.split('.'),
        _VERSION$split2 = _slicedToArray(_VERSION$split, 2),
        major = _VERSION$split2[0],
        minor = _VERSION$split2[1];

    return parseInt(major) > 1 && parseInt(minor) > 9;
  }

  /**
   * Programitcally instantiate instance of component class
   * @param {Ember.Component} component - component class to instantiate
   * @returns {Ember.Component} instance of component class
   */
  function createComponent(component) {
    if (isGlimmer2()) {
      return component.create({ renderer: {} });
    }

    return component.create();
  }
});
define('ember-app/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember-app/tests/helpers/start-app', 'ember-app/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
});
define('ember-app/tests/helpers/start-app', ['exports', 'ember-app/app', 'ember-app/config/environment', 'ember-flexberry/test-support'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes.autoboot = true;
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('ember-app/tests/test-helper', ['ember-app/app', 'ember-app/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('ember-app/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('acceptance/flexberry/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-avtomatizaciya-prodazhi2-\u0442-\u0447-\u0442\u043E\u0432-\u0438-\u0443\u0441-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-avtomatizaciya-prodazhi2-\u0442-\u0447-\u0442\u043E\u0432-\u0438-\u0443\u0441-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-avtomatizaciya-prodazhi2-\u0442-\u0447-\u0442\u043E\u0432-\u0438-\u0443\u0441-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-avtomatizaciya-prodazhi2-\u0442-\u0447-\u0442\u043E\u0432-\u0438-\u0443\u0441-test.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-avtomatizaciya-prodazhi2-долж-e', 'Unit | Controller | i-i-s-avtomatizaciya-prodazhi2-долж-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-avtomatizaciya-prodazhi2-долж-l', 'Unit | Controller | i-i-s-avtomatizaciya-prodazhi2-долж-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-avtomatizaciya-prodazhi2-ед-измер-e', 'Unit | Controller | i-i-s-avtomatizaciya-prodazhi2-ед-измер-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-avtomatizaciya-prodazhi2-ед-измер-l', 'Unit | Controller | i-i-s-avtomatizaciya-prodazhi2-ед-измер-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-avtomatizaciya-prodazhi2-зак-покуп-e', 'Unit | Controller | i-i-s-avtomatizaciya-prodazhi2-зак-покуп-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-avtomatizaciya-prodazhi2-зак-покуп-l', 'Unit | Controller | i-i-s-avtomatizaciya-prodazhi2-зак-покуп-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-avtomatizaciya-prodazhi2-кол-в-рез-e', 'Unit | Controller | i-i-s-avtomatizaciya-prodazhi2-кол-в-рез-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-avtomatizaciya-prodazhi2-кол-в-рез-l', 'Unit | Controller | i-i-s-avtomatizaciya-prodazhi2-кол-в-рез-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-avtomatizaciya-prodazhi2-контр-e', 'Unit | Controller | i-i-s-avtomatizaciya-prodazhi2-контр-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-avtomatizaciya-prodazhi2-контр-l', 'Unit | Controller | i-i-s-avtomatizaciya-prodazhi2-контр-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-avtomatizaciya-prodazhi2-менедж-e', 'Unit | Controller | i-i-s-avtomatizaciya-prodazhi2-менедж-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-avtomatizaciya-prodazhi2-менедж-l', 'Unit | Controller | i-i-s-avtomatizaciya-prodazhi2-менедж-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-avtomatizaciya-prodazhi2-номенк-e', 'Unit | Controller | i-i-s-avtomatizaciya-prodazhi2-номенк-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-avtomatizaciya-prodazhi2-номенк-l', 'Unit | Controller | i-i-s-avtomatizaciya-prodazhi2-номенк-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-avtomatizaciya-prodazhi2-организ-e', 'Unit | Controller | i-i-s-avtomatizaciya-prodazhi2-организ-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-avtomatizaciya-prodazhi2-организ-l', 'Unit | Controller | i-i-s-avtomatizaciya-prodazhi2-организ-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-avtomatizaciya-prodazhi2-отч-о-прод-e', 'Unit | Controller | i-i-s-avtomatizaciya-prodazhi2-отч-о-прод-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-avtomatizaciya-prodazhi2-отч-о-прод-l', 'Unit | Controller | i-i-s-avtomatizaciya-prodazhi2-отч-о-прод-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл-e', 'Unit | Controller | i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл-l', 'Unit | Controller | i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-avtomatizaciya-prodazhi2-подраз-e', 'Unit | Controller | i-i-s-avtomatizaciya-prodazhi2-подраз-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-avtomatizaciya-prodazhi2-подраз-l', 'Unit | Controller | i-i-s-avtomatizaciya-prodazhi2-подраз-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-avtomatizaciya-prodazhi2-склады-e', 'Unit | Controller | i-i-s-avtomatizaciya-prodazhi2-склады-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-avtomatizaciya-prodazhi2-склады-l', 'Unit | Controller | i-i-s-avtomatizaciya-prodazhi2-склады-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-avtomatizaciya-prodazhi2-сотруд-e', 'Unit | Controller | i-i-s-avtomatizaciya-prodazhi2-сотруд-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-avtomatizaciya-prodazhi2-сотруд-l', 'Unit | Controller | i-i-s-avtomatizaciya-prodazhi2-сотруд-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/models/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-avtomatizaciya-prodazhi2-долж', 'Unit | Model | i-i-s-avtomatizaciya-prodazhi2-долж', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-avtomatizaciya-prodazhi2-долж', 'model:i-i-s-avtomatizaciya-prodazhi2-ед-измер', 'model:i-i-s-avtomatizaciya-prodazhi2-зак-покуп', 'model:i-i-s-avtomatizaciya-prodazhi2-кол-в-рез', 'model:i-i-s-avtomatizaciya-prodazhi2-контр', 'model:i-i-s-avtomatizaciya-prodazhi2-менедж', 'model:i-i-s-avtomatizaciya-prodazhi2-номенк', 'model:i-i-s-avtomatizaciya-prodazhi2-организ', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-о-прод', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл', 'model:i-i-s-avtomatizaciya-prodazhi2-подраз', 'model:i-i-s-avtomatizaciya-prodazhi2-склады', 'model:i-i-s-avtomatizaciya-prodazhi2-сотруд', 'model:i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-avtomatizaciya-prodazhi2-ед-измер', 'Unit | Model | i-i-s-avtomatizaciya-prodazhi2-ед-измер', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-avtomatizaciya-prodazhi2-долж', 'model:i-i-s-avtomatizaciya-prodazhi2-ед-измер', 'model:i-i-s-avtomatizaciya-prodazhi2-зак-покуп', 'model:i-i-s-avtomatizaciya-prodazhi2-кол-в-рез', 'model:i-i-s-avtomatizaciya-prodazhi2-контр', 'model:i-i-s-avtomatizaciya-prodazhi2-менедж', 'model:i-i-s-avtomatizaciya-prodazhi2-номенк', 'model:i-i-s-avtomatizaciya-prodazhi2-организ', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-о-прод', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл', 'model:i-i-s-avtomatizaciya-prodazhi2-подраз', 'model:i-i-s-avtomatizaciya-prodazhi2-склады', 'model:i-i-s-avtomatizaciya-prodazhi2-сотруд', 'model:i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-avtomatizaciya-prodazhi2-зак-покуп', 'Unit | Model | i-i-s-avtomatizaciya-prodazhi2-зак-покуп', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-avtomatizaciya-prodazhi2-долж', 'model:i-i-s-avtomatizaciya-prodazhi2-ед-измер', 'model:i-i-s-avtomatizaciya-prodazhi2-зак-покуп', 'model:i-i-s-avtomatizaciya-prodazhi2-кол-в-рез', 'model:i-i-s-avtomatizaciya-prodazhi2-контр', 'model:i-i-s-avtomatizaciya-prodazhi2-менедж', 'model:i-i-s-avtomatizaciya-prodazhi2-номенк', 'model:i-i-s-avtomatizaciya-prodazhi2-организ', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-о-прод', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл', 'model:i-i-s-avtomatizaciya-prodazhi2-подраз', 'model:i-i-s-avtomatizaciya-prodazhi2-склады', 'model:i-i-s-avtomatizaciya-prodazhi2-сотруд', 'model:i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-avtomatizaciya-prodazhi2-кол-в-рез', 'Unit | Model | i-i-s-avtomatizaciya-prodazhi2-кол-в-рез', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-avtomatizaciya-prodazhi2-долж', 'model:i-i-s-avtomatizaciya-prodazhi2-ед-измер', 'model:i-i-s-avtomatizaciya-prodazhi2-зак-покуп', 'model:i-i-s-avtomatizaciya-prodazhi2-кол-в-рез', 'model:i-i-s-avtomatizaciya-prodazhi2-контр', 'model:i-i-s-avtomatizaciya-prodazhi2-менедж', 'model:i-i-s-avtomatizaciya-prodazhi2-номенк', 'model:i-i-s-avtomatizaciya-prodazhi2-организ', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-о-прод', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл', 'model:i-i-s-avtomatizaciya-prodazhi2-подраз', 'model:i-i-s-avtomatizaciya-prodazhi2-склады', 'model:i-i-s-avtomatizaciya-prodazhi2-сотруд', 'model:i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-avtomatizaciya-prodazhi2-контр', 'Unit | Model | i-i-s-avtomatizaciya-prodazhi2-контр', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-avtomatizaciya-prodazhi2-долж', 'model:i-i-s-avtomatizaciya-prodazhi2-ед-измер', 'model:i-i-s-avtomatizaciya-prodazhi2-зак-покуп', 'model:i-i-s-avtomatizaciya-prodazhi2-кол-в-рез', 'model:i-i-s-avtomatizaciya-prodazhi2-контр', 'model:i-i-s-avtomatizaciya-prodazhi2-менедж', 'model:i-i-s-avtomatizaciya-prodazhi2-номенк', 'model:i-i-s-avtomatizaciya-prodazhi2-организ', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-о-прод', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл', 'model:i-i-s-avtomatizaciya-prodazhi2-подраз', 'model:i-i-s-avtomatizaciya-prodazhi2-склады', 'model:i-i-s-avtomatizaciya-prodazhi2-сотруд', 'model:i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-avtomatizaciya-prodazhi2-менедж', 'Unit | Model | i-i-s-avtomatizaciya-prodazhi2-менедж', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-avtomatizaciya-prodazhi2-долж', 'model:i-i-s-avtomatizaciya-prodazhi2-ед-измер', 'model:i-i-s-avtomatizaciya-prodazhi2-зак-покуп', 'model:i-i-s-avtomatizaciya-prodazhi2-кол-в-рез', 'model:i-i-s-avtomatizaciya-prodazhi2-контр', 'model:i-i-s-avtomatizaciya-prodazhi2-менедж', 'model:i-i-s-avtomatizaciya-prodazhi2-номенк', 'model:i-i-s-avtomatizaciya-prodazhi2-организ', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-о-прод', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл', 'model:i-i-s-avtomatizaciya-prodazhi2-подраз', 'model:i-i-s-avtomatizaciya-prodazhi2-склады', 'model:i-i-s-avtomatizaciya-prodazhi2-сотруд', 'model:i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-avtomatizaciya-prodazhi2-номенк', 'Unit | Model | i-i-s-avtomatizaciya-prodazhi2-номенк', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-avtomatizaciya-prodazhi2-долж', 'model:i-i-s-avtomatizaciya-prodazhi2-ед-измер', 'model:i-i-s-avtomatizaciya-prodazhi2-зак-покуп', 'model:i-i-s-avtomatizaciya-prodazhi2-кол-в-рез', 'model:i-i-s-avtomatizaciya-prodazhi2-контр', 'model:i-i-s-avtomatizaciya-prodazhi2-менедж', 'model:i-i-s-avtomatizaciya-prodazhi2-номенк', 'model:i-i-s-avtomatizaciya-prodazhi2-организ', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-о-прод', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл', 'model:i-i-s-avtomatizaciya-prodazhi2-подраз', 'model:i-i-s-avtomatizaciya-prodazhi2-склады', 'model:i-i-s-avtomatizaciya-prodazhi2-сотруд', 'model:i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-avtomatizaciya-prodazhi2-организ', 'Unit | Model | i-i-s-avtomatizaciya-prodazhi2-организ', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-avtomatizaciya-prodazhi2-долж', 'model:i-i-s-avtomatizaciya-prodazhi2-ед-измер', 'model:i-i-s-avtomatizaciya-prodazhi2-зак-покуп', 'model:i-i-s-avtomatizaciya-prodazhi2-кол-в-рез', 'model:i-i-s-avtomatizaciya-prodazhi2-контр', 'model:i-i-s-avtomatizaciya-prodazhi2-менедж', 'model:i-i-s-avtomatizaciya-prodazhi2-номенк', 'model:i-i-s-avtomatizaciya-prodazhi2-организ', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-о-прод', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл', 'model:i-i-s-avtomatizaciya-prodazhi2-подраз', 'model:i-i-s-avtomatizaciya-prodazhi2-склады', 'model:i-i-s-avtomatizaciya-prodazhi2-сотруд', 'model:i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-avtomatizaciya-prodazhi2-отч-о-прод', 'Unit | Model | i-i-s-avtomatizaciya-prodazhi2-отч-о-прод', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-avtomatizaciya-prodazhi2-долж', 'model:i-i-s-avtomatizaciya-prodazhi2-ед-измер', 'model:i-i-s-avtomatizaciya-prodazhi2-зак-покуп', 'model:i-i-s-avtomatizaciya-prodazhi2-кол-в-рез', 'model:i-i-s-avtomatizaciya-prodazhi2-контр', 'model:i-i-s-avtomatizaciya-prodazhi2-менедж', 'model:i-i-s-avtomatizaciya-prodazhi2-номенк', 'model:i-i-s-avtomatizaciya-prodazhi2-организ', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-о-прод', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл', 'model:i-i-s-avtomatizaciya-prodazhi2-подраз', 'model:i-i-s-avtomatizaciya-prodazhi2-склады', 'model:i-i-s-avtomatizaciya-prodazhi2-сотруд', 'model:i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл', 'Unit | Model | i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-avtomatizaciya-prodazhi2-долж', 'model:i-i-s-avtomatizaciya-prodazhi2-ед-измер', 'model:i-i-s-avtomatizaciya-prodazhi2-зак-покуп', 'model:i-i-s-avtomatizaciya-prodazhi2-кол-в-рез', 'model:i-i-s-avtomatizaciya-prodazhi2-контр', 'model:i-i-s-avtomatizaciya-prodazhi2-менедж', 'model:i-i-s-avtomatizaciya-prodazhi2-номенк', 'model:i-i-s-avtomatizaciya-prodazhi2-организ', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-о-прод', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл', 'model:i-i-s-avtomatizaciya-prodazhi2-подраз', 'model:i-i-s-avtomatizaciya-prodazhi2-склады', 'model:i-i-s-avtomatizaciya-prodazhi2-сотруд', 'model:i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-avtomatizaciya-prodazhi2-подраз', 'Unit | Model | i-i-s-avtomatizaciya-prodazhi2-подраз', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-avtomatizaciya-prodazhi2-долж', 'model:i-i-s-avtomatizaciya-prodazhi2-ед-измер', 'model:i-i-s-avtomatizaciya-prodazhi2-зак-покуп', 'model:i-i-s-avtomatizaciya-prodazhi2-кол-в-рез', 'model:i-i-s-avtomatizaciya-prodazhi2-контр', 'model:i-i-s-avtomatizaciya-prodazhi2-менедж', 'model:i-i-s-avtomatizaciya-prodazhi2-номенк', 'model:i-i-s-avtomatizaciya-prodazhi2-организ', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-о-прод', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл', 'model:i-i-s-avtomatizaciya-prodazhi2-подраз', 'model:i-i-s-avtomatizaciya-prodazhi2-склады', 'model:i-i-s-avtomatizaciya-prodazhi2-сотруд', 'model:i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-avtomatizaciya-prodazhi2-склады', 'Unit | Model | i-i-s-avtomatizaciya-prodazhi2-склады', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-avtomatizaciya-prodazhi2-долж', 'model:i-i-s-avtomatizaciya-prodazhi2-ед-измер', 'model:i-i-s-avtomatizaciya-prodazhi2-зак-покуп', 'model:i-i-s-avtomatizaciya-prodazhi2-кол-в-рез', 'model:i-i-s-avtomatizaciya-prodazhi2-контр', 'model:i-i-s-avtomatizaciya-prodazhi2-менедж', 'model:i-i-s-avtomatizaciya-prodazhi2-номенк', 'model:i-i-s-avtomatizaciya-prodazhi2-организ', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-о-прод', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл', 'model:i-i-s-avtomatizaciya-prodazhi2-подраз', 'model:i-i-s-avtomatizaciya-prodazhi2-склады', 'model:i-i-s-avtomatizaciya-prodazhi2-сотруд', 'model:i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-avtomatizaciya-prodazhi2-сотруд', 'Unit | Model | i-i-s-avtomatizaciya-prodazhi2-сотруд', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-avtomatizaciya-prodazhi2-долж', 'model:i-i-s-avtomatizaciya-prodazhi2-ед-измер', 'model:i-i-s-avtomatizaciya-prodazhi2-зак-покуп', 'model:i-i-s-avtomatizaciya-prodazhi2-кол-в-рез', 'model:i-i-s-avtomatizaciya-prodazhi2-контр', 'model:i-i-s-avtomatizaciya-prodazhi2-менедж', 'model:i-i-s-avtomatizaciya-prodazhi2-номенк', 'model:i-i-s-avtomatizaciya-prodazhi2-организ', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-о-прод', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл', 'model:i-i-s-avtomatizaciya-prodazhi2-подраз', 'model:i-i-s-avtomatizaciya-prodazhi2-склады', 'model:i-i-s-avtomatizaciya-prodazhi2-сотруд', 'model:i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-avtomatizaciya-prodazhi2-\u0442-\u0447-\u0442\u043E\u0432-\u0438-\u0443\u0441-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус', 'Unit | Model | i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-avtomatizaciya-prodazhi2-долж', 'model:i-i-s-avtomatizaciya-prodazhi2-ед-измер', 'model:i-i-s-avtomatizaciya-prodazhi2-зак-покуп', 'model:i-i-s-avtomatizaciya-prodazhi2-кол-в-рез', 'model:i-i-s-avtomatizaciya-prodazhi2-контр', 'model:i-i-s-avtomatizaciya-prodazhi2-менедж', 'model:i-i-s-avtomatizaciya-prodazhi2-номенк', 'model:i-i-s-avtomatizaciya-prodazhi2-организ', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-о-прод', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл', 'model:i-i-s-avtomatizaciya-prodazhi2-подраз', 'model:i-i-s-avtomatizaciya-prodazhi2-склады', 'model:i-i-s-avtomatizaciya-prodazhi2-сотруд', 'model:i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-avtomatizaciya-prodazhi2-долж-e', 'Unit | Route | i-i-s-avtomatizaciya-prodazhi2-долж-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-avtomatizaciya-prodazhi2-долж-l', 'Unit | Route | i-i-s-avtomatizaciya-prodazhi2-долж-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-avtomatizaciya-prodazhi2-ед-измер-e', 'Unit | Route | i-i-s-avtomatizaciya-prodazhi2-ед-измер-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-avtomatizaciya-prodazhi2-ед-измер-l', 'Unit | Route | i-i-s-avtomatizaciya-prodazhi2-ед-измер-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-avtomatizaciya-prodazhi2-зак-покуп-e', 'Unit | Route | i-i-s-avtomatizaciya-prodazhi2-зак-покуп-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-avtomatizaciya-prodazhi2-зак-покуп-l', 'Unit | Route | i-i-s-avtomatizaciya-prodazhi2-зак-покуп-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-avtomatizaciya-prodazhi2-кол-в-рез-e', 'Unit | Route | i-i-s-avtomatizaciya-prodazhi2-кол-в-рез-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-avtomatizaciya-prodazhi2-кол-в-рез-l', 'Unit | Route | i-i-s-avtomatizaciya-prodazhi2-кол-в-рез-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-avtomatizaciya-prodazhi2-контр-e', 'Unit | Route | i-i-s-avtomatizaciya-prodazhi2-контр-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-avtomatizaciya-prodazhi2-контр-l', 'Unit | Route | i-i-s-avtomatizaciya-prodazhi2-контр-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-avtomatizaciya-prodazhi2-менедж-e', 'Unit | Route | i-i-s-avtomatizaciya-prodazhi2-менедж-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-avtomatizaciya-prodazhi2-менедж-l', 'Unit | Route | i-i-s-avtomatizaciya-prodazhi2-менедж-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-avtomatizaciya-prodazhi2-номенк-e', 'Unit | Route | i-i-s-avtomatizaciya-prodazhi2-номенк-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-avtomatizaciya-prodazhi2-номенк-l', 'Unit | Route | i-i-s-avtomatizaciya-prodazhi2-номенк-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-avtomatizaciya-prodazhi2-организ-e', 'Unit | Route | i-i-s-avtomatizaciya-prodazhi2-организ-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-avtomatizaciya-prodazhi2-организ-l', 'Unit | Route | i-i-s-avtomatizaciya-prodazhi2-организ-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-avtomatizaciya-prodazhi2-отч-о-прод-e', 'Unit | Route | i-i-s-avtomatizaciya-prodazhi2-отч-о-прод-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-avtomatizaciya-prodazhi2-отч-о-прод-l', 'Unit | Route | i-i-s-avtomatizaciya-prodazhi2-отч-о-прод-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл-e', 'Unit | Route | i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл-l', 'Unit | Route | i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-avtomatizaciya-prodazhi2-подраз-e', 'Unit | Route | i-i-s-avtomatizaciya-prodazhi2-подраз-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-avtomatizaciya-prodazhi2-подраз-l', 'Unit | Route | i-i-s-avtomatizaciya-prodazhi2-подраз-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-avtomatizaciya-prodazhi2-склады-e', 'Unit | Route | i-i-s-avtomatizaciya-prodazhi2-склады-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-avtomatizaciya-prodazhi2-склады-l', 'Unit | Route | i-i-s-avtomatizaciya-prodazhi2-склады-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-avtomatizaciya-prodazhi2-сотруд-e', 'Unit | Route | i-i-s-avtomatizaciya-prodazhi2-сотруд-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-avtomatizaciya-prodazhi2-сотруд-l', 'Unit | Route | i-i-s-avtomatizaciya-prodazhi2-сотруд-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-avtomatizaciya-prodazhi2-\u0434\u043E\u043B\u0436-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-avtomatizaciya-prodazhi2-долж', 'Unit | Serializer | i-i-s-avtomatizaciya-prodazhi2-долж', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-avtomatizaciya-prodazhi2-долж', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-avtomatizaciya-prodazhi2-сост-опл', 'transform:i-i-s-avtomatizaciya-prodazhi2-сост-отгр', 'model:i-i-s-avtomatizaciya-prodazhi2-долж', 'model:i-i-s-avtomatizaciya-prodazhi2-ед-измер', 'model:i-i-s-avtomatizaciya-prodazhi2-зак-покуп', 'model:i-i-s-avtomatizaciya-prodazhi2-кол-в-рез', 'model:i-i-s-avtomatizaciya-prodazhi2-контр', 'model:i-i-s-avtomatizaciya-prodazhi2-менедж', 'model:i-i-s-avtomatizaciya-prodazhi2-номенк', 'model:i-i-s-avtomatizaciya-prodazhi2-организ', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-о-прод', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл', 'model:i-i-s-avtomatizaciya-prodazhi2-подраз', 'model:i-i-s-avtomatizaciya-prodazhi2-склады', 'model:i-i-s-avtomatizaciya-prodazhi2-сотруд', 'model:i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-avtomatizaciya-prodazhi2-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-avtomatizaciya-prodazhi2-ед-измер', 'Unit | Serializer | i-i-s-avtomatizaciya-prodazhi2-ед-измер', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-avtomatizaciya-prodazhi2-ед-измер', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-avtomatizaciya-prodazhi2-сост-опл', 'transform:i-i-s-avtomatizaciya-prodazhi2-сост-отгр', 'model:i-i-s-avtomatizaciya-prodazhi2-долж', 'model:i-i-s-avtomatizaciya-prodazhi2-ед-измер', 'model:i-i-s-avtomatizaciya-prodazhi2-зак-покуп', 'model:i-i-s-avtomatizaciya-prodazhi2-кол-в-рез', 'model:i-i-s-avtomatizaciya-prodazhi2-контр', 'model:i-i-s-avtomatizaciya-prodazhi2-менедж', 'model:i-i-s-avtomatizaciya-prodazhi2-номенк', 'model:i-i-s-avtomatizaciya-prodazhi2-организ', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-о-прод', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл', 'model:i-i-s-avtomatizaciya-prodazhi2-подраз', 'model:i-i-s-avtomatizaciya-prodazhi2-склады', 'model:i-i-s-avtomatizaciya-prodazhi2-сотруд', 'model:i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-avtomatizaciya-prodazhi2-\u0437\u0430\u043A-\u043F\u043E\u043A\u0443\u043F-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-avtomatizaciya-prodazhi2-зак-покуп', 'Unit | Serializer | i-i-s-avtomatizaciya-prodazhi2-зак-покуп', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-avtomatizaciya-prodazhi2-зак-покуп', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-avtomatizaciya-prodazhi2-сост-опл', 'transform:i-i-s-avtomatizaciya-prodazhi2-сост-отгр', 'model:i-i-s-avtomatizaciya-prodazhi2-долж', 'model:i-i-s-avtomatizaciya-prodazhi2-ед-измер', 'model:i-i-s-avtomatizaciya-prodazhi2-зак-покуп', 'model:i-i-s-avtomatizaciya-prodazhi2-кол-в-рез', 'model:i-i-s-avtomatizaciya-prodazhi2-контр', 'model:i-i-s-avtomatizaciya-prodazhi2-менедж', 'model:i-i-s-avtomatizaciya-prodazhi2-номенк', 'model:i-i-s-avtomatizaciya-prodazhi2-организ', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-о-прод', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл', 'model:i-i-s-avtomatizaciya-prodazhi2-подраз', 'model:i-i-s-avtomatizaciya-prodazhi2-склады', 'model:i-i-s-avtomatizaciya-prodazhi2-сотруд', 'model:i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043B-\u0432-\u0440\u0435\u0437-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-avtomatizaciya-prodazhi2-кол-в-рез', 'Unit | Serializer | i-i-s-avtomatizaciya-prodazhi2-кол-в-рез', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-avtomatizaciya-prodazhi2-кол-в-рез', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-avtomatizaciya-prodazhi2-сост-опл', 'transform:i-i-s-avtomatizaciya-prodazhi2-сост-отгр', 'model:i-i-s-avtomatizaciya-prodazhi2-долж', 'model:i-i-s-avtomatizaciya-prodazhi2-ед-измер', 'model:i-i-s-avtomatizaciya-prodazhi2-зак-покуп', 'model:i-i-s-avtomatizaciya-prodazhi2-кол-в-рез', 'model:i-i-s-avtomatizaciya-prodazhi2-контр', 'model:i-i-s-avtomatizaciya-prodazhi2-менедж', 'model:i-i-s-avtomatizaciya-prodazhi2-номенк', 'model:i-i-s-avtomatizaciya-prodazhi2-организ', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-о-прод', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл', 'model:i-i-s-avtomatizaciya-prodazhi2-подраз', 'model:i-i-s-avtomatizaciya-prodazhi2-склады', 'model:i-i-s-avtomatizaciya-prodazhi2-сотруд', 'model:i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043A\u043E\u043D\u0442\u0440-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-avtomatizaciya-prodazhi2-контр', 'Unit | Serializer | i-i-s-avtomatizaciya-prodazhi2-контр', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-avtomatizaciya-prodazhi2-контр', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-avtomatizaciya-prodazhi2-сост-опл', 'transform:i-i-s-avtomatizaciya-prodazhi2-сост-отгр', 'model:i-i-s-avtomatizaciya-prodazhi2-долж', 'model:i-i-s-avtomatizaciya-prodazhi2-ед-измер', 'model:i-i-s-avtomatizaciya-prodazhi2-зак-покуп', 'model:i-i-s-avtomatizaciya-prodazhi2-кол-в-рез', 'model:i-i-s-avtomatizaciya-prodazhi2-контр', 'model:i-i-s-avtomatizaciya-prodazhi2-менедж', 'model:i-i-s-avtomatizaciya-prodazhi2-номенк', 'model:i-i-s-avtomatizaciya-prodazhi2-организ', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-о-прод', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл', 'model:i-i-s-avtomatizaciya-prodazhi2-подраз', 'model:i-i-s-avtomatizaciya-prodazhi2-склады', 'model:i-i-s-avtomatizaciya-prodazhi2-сотруд', 'model:i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043C\u0435\u043D\u0435\u0434\u0436-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-avtomatizaciya-prodazhi2-менедж', 'Unit | Serializer | i-i-s-avtomatizaciya-prodazhi2-менедж', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-avtomatizaciya-prodazhi2-менедж', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-avtomatizaciya-prodazhi2-сост-опл', 'transform:i-i-s-avtomatizaciya-prodazhi2-сост-отгр', 'model:i-i-s-avtomatizaciya-prodazhi2-долж', 'model:i-i-s-avtomatizaciya-prodazhi2-ед-измер', 'model:i-i-s-avtomatizaciya-prodazhi2-зак-покуп', 'model:i-i-s-avtomatizaciya-prodazhi2-кол-в-рез', 'model:i-i-s-avtomatizaciya-prodazhi2-контр', 'model:i-i-s-avtomatizaciya-prodazhi2-менедж', 'model:i-i-s-avtomatizaciya-prodazhi2-номенк', 'model:i-i-s-avtomatizaciya-prodazhi2-организ', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-о-прод', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл', 'model:i-i-s-avtomatizaciya-prodazhi2-подраз', 'model:i-i-s-avtomatizaciya-prodazhi2-склады', 'model:i-i-s-avtomatizaciya-prodazhi2-сотруд', 'model:i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043D\u043E\u043C\u0435\u043D\u043A-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-avtomatizaciya-prodazhi2-номенк', 'Unit | Serializer | i-i-s-avtomatizaciya-prodazhi2-номенк', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-avtomatizaciya-prodazhi2-номенк', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-avtomatizaciya-prodazhi2-сост-опл', 'transform:i-i-s-avtomatizaciya-prodazhi2-сост-отгр', 'model:i-i-s-avtomatizaciya-prodazhi2-долж', 'model:i-i-s-avtomatizaciya-prodazhi2-ед-измер', 'model:i-i-s-avtomatizaciya-prodazhi2-зак-покуп', 'model:i-i-s-avtomatizaciya-prodazhi2-кол-в-рез', 'model:i-i-s-avtomatizaciya-prodazhi2-контр', 'model:i-i-s-avtomatizaciya-prodazhi2-менедж', 'model:i-i-s-avtomatizaciya-prodazhi2-номенк', 'model:i-i-s-avtomatizaciya-prodazhi2-организ', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-о-прод', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл', 'model:i-i-s-avtomatizaciya-prodazhi2-подраз', 'model:i-i-s-avtomatizaciya-prodazhi2-склады', 'model:i-i-s-avtomatizaciya-prodazhi2-сотруд', 'model:i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-avtomatizaciya-prodazhi2-организ', 'Unit | Serializer | i-i-s-avtomatizaciya-prodazhi2-организ', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-avtomatizaciya-prodazhi2-организ', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-avtomatizaciya-prodazhi2-сост-опл', 'transform:i-i-s-avtomatizaciya-prodazhi2-сост-отгр', 'model:i-i-s-avtomatizaciya-prodazhi2-долж', 'model:i-i-s-avtomatizaciya-prodazhi2-ед-измер', 'model:i-i-s-avtomatizaciya-prodazhi2-зак-покуп', 'model:i-i-s-avtomatizaciya-prodazhi2-кол-в-рез', 'model:i-i-s-avtomatizaciya-prodazhi2-контр', 'model:i-i-s-avtomatizaciya-prodazhi2-менедж', 'model:i-i-s-avtomatizaciya-prodazhi2-номенк', 'model:i-i-s-avtomatizaciya-prodazhi2-организ', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-о-прод', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл', 'model:i-i-s-avtomatizaciya-prodazhi2-подраз', 'model:i-i-s-avtomatizaciya-prodazhi2-склады', 'model:i-i-s-avtomatizaciya-prodazhi2-сотруд', 'model:i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E-\u043F\u0440\u043E\u0434-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-avtomatizaciya-prodazhi2-отч-о-прод', 'Unit | Serializer | i-i-s-avtomatizaciya-prodazhi2-отч-о-прод', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-avtomatizaciya-prodazhi2-отч-о-прод', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-avtomatizaciya-prodazhi2-сост-опл', 'transform:i-i-s-avtomatizaciya-prodazhi2-сост-отгр', 'model:i-i-s-avtomatizaciya-prodazhi2-долж', 'model:i-i-s-avtomatizaciya-prodazhi2-ед-измер', 'model:i-i-s-avtomatizaciya-prodazhi2-зак-покуп', 'model:i-i-s-avtomatizaciya-prodazhi2-кол-в-рез', 'model:i-i-s-avtomatizaciya-prodazhi2-контр', 'model:i-i-s-avtomatizaciya-prodazhi2-менедж', 'model:i-i-s-avtomatizaciya-prodazhi2-номенк', 'model:i-i-s-avtomatizaciya-prodazhi2-организ', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-о-прод', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл', 'model:i-i-s-avtomatizaciya-prodazhi2-подраз', 'model:i-i-s-avtomatizaciya-prodazhi2-склады', 'model:i-i-s-avtomatizaciya-prodazhi2-сотруд', 'model:i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043E\u0442\u0447-\u043E\u0441\u0442-\u043D-\u0441\u043A\u043B-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл', 'Unit | Serializer | i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-avtomatizaciya-prodazhi2-сост-опл', 'transform:i-i-s-avtomatizaciya-prodazhi2-сост-отгр', 'model:i-i-s-avtomatizaciya-prodazhi2-долж', 'model:i-i-s-avtomatizaciya-prodazhi2-ед-измер', 'model:i-i-s-avtomatizaciya-prodazhi2-зак-покуп', 'model:i-i-s-avtomatizaciya-prodazhi2-кол-в-рез', 'model:i-i-s-avtomatizaciya-prodazhi2-контр', 'model:i-i-s-avtomatizaciya-prodazhi2-менедж', 'model:i-i-s-avtomatizaciya-prodazhi2-номенк', 'model:i-i-s-avtomatizaciya-prodazhi2-организ', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-о-прод', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл', 'model:i-i-s-avtomatizaciya-prodazhi2-подраз', 'model:i-i-s-avtomatizaciya-prodazhi2-склады', 'model:i-i-s-avtomatizaciya-prodazhi2-сотруд', 'model:i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-avtomatizaciya-prodazhi2-\u043F\u043E\u0434\u0440\u0430\u0437-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-avtomatizaciya-prodazhi2-подраз', 'Unit | Serializer | i-i-s-avtomatizaciya-prodazhi2-подраз', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-avtomatizaciya-prodazhi2-подраз', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-avtomatizaciya-prodazhi2-сост-опл', 'transform:i-i-s-avtomatizaciya-prodazhi2-сост-отгр', 'model:i-i-s-avtomatizaciya-prodazhi2-долж', 'model:i-i-s-avtomatizaciya-prodazhi2-ед-измер', 'model:i-i-s-avtomatizaciya-prodazhi2-зак-покуп', 'model:i-i-s-avtomatizaciya-prodazhi2-кол-в-рез', 'model:i-i-s-avtomatizaciya-prodazhi2-контр', 'model:i-i-s-avtomatizaciya-prodazhi2-менедж', 'model:i-i-s-avtomatizaciya-prodazhi2-номенк', 'model:i-i-s-avtomatizaciya-prodazhi2-организ', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-о-прод', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл', 'model:i-i-s-avtomatizaciya-prodazhi2-подраз', 'model:i-i-s-avtomatizaciya-prodazhi2-склады', 'model:i-i-s-avtomatizaciya-prodazhi2-сотруд', 'model:i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043A\u043B\u0430\u0434\u044B-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-avtomatizaciya-prodazhi2-склады', 'Unit | Serializer | i-i-s-avtomatizaciya-prodazhi2-склады', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-avtomatizaciya-prodazhi2-склады', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-avtomatizaciya-prodazhi2-сост-опл', 'transform:i-i-s-avtomatizaciya-prodazhi2-сост-отгр', 'model:i-i-s-avtomatizaciya-prodazhi2-долж', 'model:i-i-s-avtomatizaciya-prodazhi2-ед-измер', 'model:i-i-s-avtomatizaciya-prodazhi2-зак-покуп', 'model:i-i-s-avtomatizaciya-prodazhi2-кол-в-рез', 'model:i-i-s-avtomatizaciya-prodazhi2-контр', 'model:i-i-s-avtomatizaciya-prodazhi2-менедж', 'model:i-i-s-avtomatizaciya-prodazhi2-номенк', 'model:i-i-s-avtomatizaciya-prodazhi2-организ', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-о-прод', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл', 'model:i-i-s-avtomatizaciya-prodazhi2-подраз', 'model:i-i-s-avtomatizaciya-prodazhi2-склады', 'model:i-i-s-avtomatizaciya-prodazhi2-сотруд', 'model:i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-avtomatizaciya-prodazhi2-\u0441\u043E\u0442\u0440\u0443\u0434-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-avtomatizaciya-prodazhi2-сотруд', 'Unit | Serializer | i-i-s-avtomatizaciya-prodazhi2-сотруд', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-avtomatizaciya-prodazhi2-сотруд', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-avtomatizaciya-prodazhi2-сост-опл', 'transform:i-i-s-avtomatizaciya-prodazhi2-сост-отгр', 'model:i-i-s-avtomatizaciya-prodazhi2-долж', 'model:i-i-s-avtomatizaciya-prodazhi2-ед-измер', 'model:i-i-s-avtomatizaciya-prodazhi2-зак-покуп', 'model:i-i-s-avtomatizaciya-prodazhi2-кол-в-рез', 'model:i-i-s-avtomatizaciya-prodazhi2-контр', 'model:i-i-s-avtomatizaciya-prodazhi2-менедж', 'model:i-i-s-avtomatizaciya-prodazhi2-номенк', 'model:i-i-s-avtomatizaciya-prodazhi2-организ', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-о-прод', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл', 'model:i-i-s-avtomatizaciya-prodazhi2-подраз', 'model:i-i-s-avtomatizaciya-prodazhi2-склады', 'model:i-i-s-avtomatizaciya-prodazhi2-сотруд', 'model:i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-avtomatizaciya-prodazhi2-\u0442-\u0447-\u0442\u043E\u0432-\u0438-\u0443\u0441-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус', 'Unit | Serializer | i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-avtomatizaciya-prodazhi2-сост-опл', 'transform:i-i-s-avtomatizaciya-prodazhi2-сост-отгр', 'model:i-i-s-avtomatizaciya-prodazhi2-долж', 'model:i-i-s-avtomatizaciya-prodazhi2-ед-измер', 'model:i-i-s-avtomatizaciya-prodazhi2-зак-покуп', 'model:i-i-s-avtomatizaciya-prodazhi2-кол-в-рез', 'model:i-i-s-avtomatizaciya-prodazhi2-контр', 'model:i-i-s-avtomatizaciya-prodazhi2-менедж', 'model:i-i-s-avtomatizaciya-prodazhi2-номенк', 'model:i-i-s-avtomatizaciya-prodazhi2-организ', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-о-прод', 'model:i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл', 'model:i-i-s-avtomatizaciya-prodazhi2-подраз', 'model:i-i-s-avtomatizaciya-prodazhi2-склады', 'model:i-i-s-avtomatizaciya-prodazhi2-сотруд', 'model:i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/config/environment', [], function() {
  var prefix = 'ember-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ember-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
