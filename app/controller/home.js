'use strict';
const fs = require('fs');

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async webhook() {
    const {ctx} = this;
    fs.writeFile('./public/log.txt', JSON.stringify(ctx.request.body), () => {})
    ctx.body = ctx.request.body
  }
}

module.exports = HomeController;
