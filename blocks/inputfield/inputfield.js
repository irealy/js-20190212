import { Block } from '../block';
import template from './inputfield.pug';
/* eslint-disable */
import _ from './inputfield.scss';
/* eslint-enable */

export class Inputfield extends Block {
  get bemName () {
    return 'inputfield';
  }
  template (data) {
    return template(data);
  }
  get value () {
    return this.getElement('input').value;
  }
}
