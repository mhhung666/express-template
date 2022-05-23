import {sleep} from '../time';

test('test sleep', async () => {
    jest.setTimeout(10000);
    console.log('start');
    await sleep(3000);
    console.log('end');
});