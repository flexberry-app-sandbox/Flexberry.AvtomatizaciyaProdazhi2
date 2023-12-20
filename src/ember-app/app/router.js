import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-avtomatizaciya-prodazhi2-долж-l');
  this.route('i-i-s-avtomatizaciya-prodazhi2-долж-e',
  { path: 'i-i-s-avtomatizaciya-prodazhi2-долж-e/:id' });
  this.route('i-i-s-avtomatizaciya-prodazhi2-долж-e.new',
  { path: 'i-i-s-avtomatizaciya-prodazhi2-долж-e/new' });
  this.route('i-i-s-avtomatizaciya-prodazhi2-ед-измер-l');
  this.route('i-i-s-avtomatizaciya-prodazhi2-ед-измер-e',
  { path: 'i-i-s-avtomatizaciya-prodazhi2-ед-измер-e/:id' });
  this.route('i-i-s-avtomatizaciya-prodazhi2-ед-измер-e.new',
  { path: 'i-i-s-avtomatizaciya-prodazhi2-ед-измер-e/new' });
  this.route('i-i-s-avtomatizaciya-prodazhi2-зак-покуп-l');
  this.route('i-i-s-avtomatizaciya-prodazhi2-зак-покуп-e',
  { path: 'i-i-s-avtomatizaciya-prodazhi2-зак-покуп-e/:id' });
  this.route('i-i-s-avtomatizaciya-prodazhi2-зак-покуп-e.new',
  { path: 'i-i-s-avtomatizaciya-prodazhi2-зак-покуп-e/new' });
  this.route('i-i-s-avtomatizaciya-prodazhi2-кол-в-рез-l');
  this.route('i-i-s-avtomatizaciya-prodazhi2-кол-в-рез-e',
  { path: 'i-i-s-avtomatizaciya-prodazhi2-кол-в-рез-e/:id' });
  this.route('i-i-s-avtomatizaciya-prodazhi2-кол-в-рез-e.new',
  { path: 'i-i-s-avtomatizaciya-prodazhi2-кол-в-рез-e/new' });
  this.route('i-i-s-avtomatizaciya-prodazhi2-контр-l');
  this.route('i-i-s-avtomatizaciya-prodazhi2-контр-e',
  { path: 'i-i-s-avtomatizaciya-prodazhi2-контр-e/:id' });
  this.route('i-i-s-avtomatizaciya-prodazhi2-контр-e.new',
  { path: 'i-i-s-avtomatizaciya-prodazhi2-контр-e/new' });
  this.route('i-i-s-avtomatizaciya-prodazhi2-менедж-l');
  this.route('i-i-s-avtomatizaciya-prodazhi2-менедж-e',
  { path: 'i-i-s-avtomatizaciya-prodazhi2-менедж-e/:id' });
  this.route('i-i-s-avtomatizaciya-prodazhi2-менедж-e.new',
  { path: 'i-i-s-avtomatizaciya-prodazhi2-менедж-e/new' });
  this.route('i-i-s-avtomatizaciya-prodazhi2-номенк-l');
  this.route('i-i-s-avtomatizaciya-prodazhi2-номенк-e',
  { path: 'i-i-s-avtomatizaciya-prodazhi2-номенк-e/:id' });
  this.route('i-i-s-avtomatizaciya-prodazhi2-номенк-e.new',
  { path: 'i-i-s-avtomatizaciya-prodazhi2-номенк-e/new' });
  this.route('i-i-s-avtomatizaciya-prodazhi2-организ-l');
  this.route('i-i-s-avtomatizaciya-prodazhi2-организ-e',
  { path: 'i-i-s-avtomatizaciya-prodazhi2-организ-e/:id' });
  this.route('i-i-s-avtomatizaciya-prodazhi2-организ-e.new',
  { path: 'i-i-s-avtomatizaciya-prodazhi2-организ-e/new' });
  this.route('i-i-s-avtomatizaciya-prodazhi2-отч-о-прод-l');
  this.route('i-i-s-avtomatizaciya-prodazhi2-отч-о-прод-e',
  { path: 'i-i-s-avtomatizaciya-prodazhi2-отч-о-прод-e/:id' });
  this.route('i-i-s-avtomatizaciya-prodazhi2-отч-о-прод-e.new',
  { path: 'i-i-s-avtomatizaciya-prodazhi2-отч-о-прод-e/new' });
  this.route('i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл-l');
  this.route('i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл-e',
  { path: 'i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл-e/:id' });
  this.route('i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл-e.new',
  { path: 'i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл-e/new' });
  this.route('i-i-s-avtomatizaciya-prodazhi2-подраз-l');
  this.route('i-i-s-avtomatizaciya-prodazhi2-подраз-e',
  { path: 'i-i-s-avtomatizaciya-prodazhi2-подраз-e/:id' });
  this.route('i-i-s-avtomatizaciya-prodazhi2-подраз-e.new',
  { path: 'i-i-s-avtomatizaciya-prodazhi2-подраз-e/new' });
  this.route('i-i-s-avtomatizaciya-prodazhi2-склады-l');
  this.route('i-i-s-avtomatizaciya-prodazhi2-склады-e',
  { path: 'i-i-s-avtomatizaciya-prodazhi2-склады-e/:id' });
  this.route('i-i-s-avtomatizaciya-prodazhi2-склады-e.new',
  { path: 'i-i-s-avtomatizaciya-prodazhi2-склады-e/new' });
  this.route('i-i-s-avtomatizaciya-prodazhi2-сотруд-l');
  this.route('i-i-s-avtomatizaciya-prodazhi2-сотруд-e',
  { path: 'i-i-s-avtomatizaciya-prodazhi2-сотруд-e/:id' });
  this.route('i-i-s-avtomatizaciya-prodazhi2-сотруд-e.new',
  { path: 'i-i-s-avtomatizaciya-prodazhi2-сотруд-e/new' });
});

export default Router;
