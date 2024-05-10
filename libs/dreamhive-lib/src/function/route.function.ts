/* eslint-disable @typescript-eslint/no-var-requires */
import { readdirSync, statSync } from 'fs';

/* 
  @param expressApp : pass express reference object
  @param directory: path to route directory with __dirname ex. ${__dirname}\\routes
*/

export function registerAppRoutes(expressApp: any, directory, prefix = '') {
  readdirSync(directory).forEach((item) => {
    const itemPath = `${directory}/${item}`;
    const itemStat = statSync(itemPath);

    if (itemStat.isDirectory()) {
      // If it's a directory, recursively call registerRoutes
      registerAppRoutes(itemPath, `${prefix}/${item}`);
    } else if (item.endsWith('.ts') || item.endsWith('.js')) {
      // If it's a JavaScript file, register it as a route
      expressApp.use(`/api`, require(itemPath));
    }
  });
}
