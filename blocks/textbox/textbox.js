import { Block } from '../block';
import template from './textbox.pug';
/* eslint-disable */
import _ from './textbox.scss';
/* eslint-enable */

export class Textbox extends Block {
  template (data) {
    return template(data);
  }
}
