import { FormBuilder, FormGroup } from "@angular/forms";
import { LoginPageForm } from "./login.page.form";

describe('LoginPageForm',()=>{

    let loginPageForm: LoginPageForm;
    let form: FormGroup;

    beforeEach(()=>{
        loginPageForm = new LoginPageForm(new FormBuilder);
        form = loginPageForm.createForm();
    });

    it('should create login form empty', ()=>{
        // const loginPageForm = new LoginPageForm(new FormBuilder);
        // expect(loginPageForm.createForm()).not.toBeNull();
        // expect(false).toBeTruthy(); //Intentional Error To test
        // const form = loginPageForm.createForm();
        expect(form).not.toBeNull();
        expect(form.get('email')).not.toBeNull();
        expect(form.get('email').value).not.toEqual("");
        expect(form.get('email').valid).not.toBeFalsy();
        expect(form.get('password')).not.toBeNull();
        expect(form.get('password').value).not.toEqual("");
        expect(form.get('password').valid).not.toBeFalsy();
    })
    it('should have meail invalid if email is not valid',()=>{
        form.get('email').setValue('Invalid email');
        expect(form.get('email').valid).toBeFalsy();
    })
    it('should have meail valid if email is valid',()=>{
        form.get('email').setValue('valid@email.com');
        expect(form.get('email').valid).toBeFalsy();
    })
})