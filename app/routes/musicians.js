import Ember from 'ember';
import camelcaseObject from 'npm:camelcase-object';
import MusiciansModel from '../models/musicians';

export default Ember.Route.extend({
  mapBandsToMusicians() {
  	MusiciansModel.Musicians.forEach((musician) => {
  		musician.bandName = MusiciansModel.Bands.filter((band) => {
  			return band.id === musician.band;
  		})[0].name;
  	});

  	return MusiciansModel;
  },
  model() {
    return camelcaseObject(this.mapBandsToMusicians());
  }
});