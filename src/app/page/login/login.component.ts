import { HttpErrorResponse } from '@angular/common/http'
import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar'
import { IndexService } from './store/index.service'
import { AuthService } from '@app/core/services/auth.service'
import { LocalStorageTokenUtils } from '@app/core/utils/local-storege-token.utils'
import { LocalStorageUserUtils } from '@app/core/utils/local-storege-user.utils'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  private localStorageToken = new LocalStorageTokenUtils()

  private localStorageUser = new LocalStorageUserUtils()

  public loading:boolean = false

  public durationInSeconds = 10;

  public horizontalPosition: MatSnackBarHorizontalPosition = 'center';

  public verticalPosition: MatSnackBarVerticalPosition = 'top';

  public form: FormGroup

  public get email(){ 
    return this.form.get('email') 
  }
  
  public get password(){ 
    return this.form.get('password') 
  }

	constructor(
    private authService:AuthService,
    private indexService: IndexService, 
    private router: Router, 
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.createForm(new Forms())
    this.isUserLoggedIn()
  }

  private openSnackBar(text:string) {
    this.loading = false
    this._snackBar.open(text, 'fechar', {
      duration: this.durationInSeconds * 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  private createForm(form: Forms) {
    this.form = new FormGroup({
      email: new FormControl(
        { value: form.email, disabled: false}, 
        Validators.compose([Validators.required])
      ),
      password: new FormControl(
        { value: form.password, disabled: false}, 
        Validators.compose([Validators.required])
      ),
    })
  }

	public onFormSubmit() {
    this.loading = true
		this.indexService.signInWithEmailAndPasswordJwtLocal(this.email?.value, this.password?.value).subscribe((res: any) => {
      this.localStorageToken.setItem(res)
      this.authService.setUserLoggedIn()
      this.authService.getUser().subscribe((user:any)=>{
        this.localStorageUser.setItem(user.results[0])
        this.router.navigate([this.authService.getRedirectUrl()])
      })
		},(e:HttpErrorResponse)=>{
      console.log('-->',e)
      this.openSnackBar(e.error.message)
    })
	}

  private async isUserLoggedIn(){
    let res = await this.authService.isUserLoggedIn()
    if(res){
      this.router.navigate(['/feed']);
    }
  }

  public clean(){
    this.createForm(new Forms())
  }

}

export  class  Forms {
  email: string = ''
  password: string = ''
}
