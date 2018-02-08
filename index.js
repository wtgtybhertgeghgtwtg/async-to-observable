'use strict';
const Observable = require('zen-observable');

module.exports = func =>
  new Observable(observer => {
    func(observer.next.bind(observer)).then(
      () => observer.complete(),
      error => observer.error(error),
    );
  });
