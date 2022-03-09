import { FormBuilder } from "@angular/forms";
import { LoginPageForm } from "./login.page.form";

describe('LoginPageForm',()=>{
    it('should create login form empty', ()=>{
        const loginPageForm = new LoginPageForm(new FormBuilder);
        // expect(loginPageForm.createForm()).not.toBeNull();
        // expect(false).toBeTruthy(); //Intentional Error To test
        const form = loginPageForm.createForm();
        expect(form).not.toBeNull();
        expect(form.get('email')).not.toBeNull();
        expect(form.get('email').value).not.toEqual("");
        expect(form.get('email').valid).not.toBeFalsy();
        expect(form.get('password')).not.toBeNull();
        expect(form.get('password').value).not.toEqual("");
        expect(form.get('password').valid).not.toBeFalsy(";
    })
})