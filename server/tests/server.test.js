const request = require('supertest');
const express = require('express');
const server = require('../server');
const indexHTML = require('../views/index.html');

describe('server', function () {
  beforeEach(() => {
    this.app = server.getApp(express());
  });

  test('/ route should give 200 and return the index html', (done) => {
    request(this.app)
      .get('/')
      .expect(200, indexHTML())
      .end((err) => {
        if (err) throw err;
        done();
      });
  });

  test('should call listen with the passed port when starting the server', () => {
    const mockApp = { listen: jest.fn() };
    server.start(3000, mockApp);
    expect(mockApp.listen).toBeCalledWith(3000, expect.anything());
  });
});
