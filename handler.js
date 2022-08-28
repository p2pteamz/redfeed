import {scan} from './db';

export async function GetPaginatedTransactions() {
  return {
    statusCode: 200,
    body: JSON.stringify(await scan())
  };
};


