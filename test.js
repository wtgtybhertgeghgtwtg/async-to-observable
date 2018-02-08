import test from 'ava';
import asyncToObservable from '.';

test.cb('with a Promise that rejects.', t => {
  asyncToObservable(() => Promise.reject()).subscribe({
    error: () => t.end()
  });
});

test.cb('with a Promise that resolves.', t => {
  t.plan(3);
  asyncToObservable(async next => {
    next(1);
    next(1);
    next(1);
  }).subscribe({
    complete: () => t.end(),
    error: () => t.fail(),
    next: value => t.is(value, 1)
  });
});
