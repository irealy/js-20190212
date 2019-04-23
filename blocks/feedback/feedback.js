import { Block } from '../block';
import { Inputfield } from '../inputfield/inputfield';
import template from './feedback.pug';
/* eslint-disable */
import _ from './feedback.scss';
/* eslint-enable */

export class Feedback extends Block {
  get bemName () {
    return 'feedback';
  }
  template (data) {
    return template(data);
  }
  constructor (options) {
    super(options);
    this.userName = new Inputfield({
      name: 'username',
      label: 'Ваше имя',
      value: '',
      required: true
    });
    

    this.comment = new Inputfield({
      name: 'comment',
      label: 'Ваше мнение',
      value: '',
      required: true
    });
  }
  render (el) {
    super.render(el);
    this.userName.render(this.getElement('username'));
    this.comment.render(this.getElement('comment'));
    this.el.querySelector('form').addEventListener('submit', event => {
      event.preventDefault();
      console.log(this.userName.value, this.comment.value);
    })
  }
}
