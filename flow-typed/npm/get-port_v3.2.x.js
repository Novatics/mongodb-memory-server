/**
 * Flowtype definitions for get-port v3.2
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.2.3
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module "get-port" {
  declare var getPort: (options?: {
    port?: ?number,
    host?: ?string
  }) => Promise<number>;
  declare module.exports: typeof getPort;
}
