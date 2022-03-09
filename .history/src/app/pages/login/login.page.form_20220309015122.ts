import { FormBuilder, FormGroup, Validators } from "@angular/forms";
export class LoginPageForm {
    private formBuilder: FormBuilder;

    constructor(formBuilder: FormBuilder){
        this.formBuilder = formBuilder;
    }
    createForm() : FormGroup {
        // return null;
        return this.formBuilder.group({
            email:['',[Validators.required]], //Initial value empty text
            password:['', [Validators.required]]
        })
    }
}