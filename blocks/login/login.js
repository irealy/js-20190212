import { Block } from '../block';
import template from './login.pug';

export class Login extends Block {
  get bemName () {
    return 'login'
  }
  template (data) {
    return template(data);
  }
}
