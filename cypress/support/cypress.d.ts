import { mount } from 'cypress/react18';

declare module '*.png'
declare module '*.svg'
declare module '*.jpeg'
declare module '*.jpg'
declare module '*.svg'
declare module '*.module.css'
declare module '*.css'
interface Window {
    nxg: any
}

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
    namespace Cypress {
        interface Chainable {
            mount: typeof mount;
            getByDataTestId: (dataTestId) => Chainable<JQuery<HTMLElement>>;
            verifyTextOnElement(elementId: string, expectedString: string): void;
            getData(
                url: string,
                method: string
            ):Chainable<any>;
            openUrl(url: string): Chainable<void>;
            postData(method: string,url: string, requestBody: object): Chainable<any>;
            login(sessionValue: string): Chainable<void>;
        }
    }
}