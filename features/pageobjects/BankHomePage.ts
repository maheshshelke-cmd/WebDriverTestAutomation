import { $ } from '@wdio/globals'
import Page from './page.js';

class bankHomePage extends Page {
    
    public get registerLink () {
        return $('=Register');
    }
    public get fName () {
        return $('//input[@id="customer.firstName"]');
        }
    public get lName () {
            return $('//input[@id="customer.lastName"]');
        }
    public get address () {
        return $('//input[@id="customer.address.street"]');
        }
    public get city () {
        return $('//input[@id="customer.address.city"]');
        }
    public get state () {
        return $('//input[@id="customer.address.state"]');
        }
    public get zip () {
        return $('//input[@id="customer.address.zipCode"]');
        }
    public get phone () {
        return $('//input[@id="customer.phoneNumber"]');
        }
        public get ssn () {
        return $('//input[@id="customer.ssn"]');
        }
    public get username () {
        return $('//input[@id="customer.username"]');
        }
    public get password () {
        return $('//input[@id="customer.password"]');
        }
    public get confirmPassword () {
            return $('//input[@id="repeatedPassword"]');
        }
    public get registerButton () {
            return $('.button');
            }

    public get loginuserName () {
        return $('//input[@name="username"]');
        }

    public get loginPassword () {
        return $('//input[@name="password"]');
        }

    public get loginButton () {
        return $('//input[@value="Log In"]');
        }

    public get accountOverviewLink () {
            return $('=Accounts Overview');
        }

    async enterDetails(webElement, value) {
        await webElement.setValue(value);
    }

    async clickElement(webElement) {
        await webElement.waitForDisplayed();
        await webElement.click();
}

}

export default new bankHomePage();