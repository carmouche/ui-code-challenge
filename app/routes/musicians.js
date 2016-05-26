import Ember from 'ember';
import camelcaseObject from 'npm:camelcase-object';
import MusiciansModel from '../models/musicians';

export default Ember.Route.extend({
  model() {
    return camelcaseObject(MusiciansModel);
  }
});