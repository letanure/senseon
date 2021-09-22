import { setupWorker, rest } from 'msw'
import { app } from '~/store/app';

const API_PATH = '/api'

const USER_CREDENTIALS = {
  'user1': 'pass1',
  'user2': 'pass2',
  'user3': 'pass3',
}

const COUNTER_VALUE_KEY = 'counter_value';

const initialCounterValue = window.sessionStorage.getItem(COUNTER_VALUE_KEY)
if (initialCounterValue === null) window.sessionStorage.setItem(COUNTER_VALUE_KEY, '0');

export default function (context) {
  console.debug('Plugin: api-mocking initialisation...');

  const worker = setupWorker(
    rest.get(
      API_PATH,
      (req, res, ctx) => {
        return res(ctx.json({
            success: true,
            mocked: true
          }));
      }
    ),

    rest.get(
      `${API_PATH}/counter/reset`,
      (req, res, ctx) => {
        window.sessionStorage.setItem(COUNTER_VALUE_KEY, '0');
        return res(ctx.json({
          value: 0,
          mocked: true
        }));
      }
    ),

    rest.get(
      `${API_PATH}/counter`,
      (req, res, ctx) => {
        const value = parseInt(window.sessionStorage.getItem(COUNTER_VALUE_KEY));
        return res(ctx.json({
          value,
          mocked: true
        }));
      }
    ),

    rest.get(
      `${API_PATH}/counter/decrement`,
      (req, res, ctx) => {
        const oldValue = parseInt(window.sessionStorage.getItem(COUNTER_VALUE_KEY));
        const newValue = oldValue - 1;
        window.sessionStorage.setItem(COUNTER_VALUE_KEY, newValue.toString());
        return res(ctx.json({
          value: newValue,
          mocked: true
        }));
      }
    ),

    rest.get(
      `${API_PATH}/counter/increment`,
      (req, res, ctx) => {
        const oldValue = parseInt(window.sessionStorage.getItem(COUNTER_VALUE_KEY));
        const newValue = oldValue + 1;
        window.sessionStorage.setItem(COUNTER_VALUE_KEY, newValue.toString());
        return res(ctx.json({ value: newValue }))
      }
    ),

    rest.get(
      `${API_PATH}/data`,
      (req, res, ctx) => {
        const data = [];
        for (let i = 0; i < 10; i++) {
          data.push({
            label: `Slice ${i+1}`,
            value: Math.random() * 100
          });
        }

        return res(ctx.json({data }))
      }
    ),

    rest.post(
      `${API_PATH}/login`,
      (req, res, ctx) => {
        const username = req.body['username'];

        if (!username) {
          return res(
            ctx.status(400),
            ctx.json({
              message: 'Username is required',
              mocked: true,
              success: false
            })
          );
        }

        const password = req.body['password'];
        if (!password) {
          return res(
            ctx.status(400),
            ctx.json({
              message: 'Password is required',
              mocked: true,
              success: false
            })
          );
        }

        if (!Object.keys(USER_CREDENTIALS).includes(username) || password !== USER_CREDENTIALS[username]) {
          return res(
            ctx.status(403),
            ctx.json({
              message: 'Wrong credentials',
              mocked: true,
              success: false
            })
          );
        }

        return res(ctx.json({
          success: true,
          mocked: true
        }));
      }
    )
  )


  worker.start({
    onUnhandledRequest: 'bypass',
  }).then(() => {
    console.debug('MSR - worker started');
    context.store.dispatch(`app/${app.actions.POLL_FOR_API}`);
  });
}
