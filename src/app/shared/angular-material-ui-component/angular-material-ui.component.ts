import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'angular-material-ui-component',
  templateUrl: './angular-material-ui.component.html',
  styleUrls: ['./angular-material-ui.component.scss']
})
export class AngularMaterialUIComponent {
  options: string[] = ['Inglês', 'Esponhol', 'Françes', 'Português', 'Hebraico', 'Grego'];
  panelOpenState = false;
  hide = true;
  value = 'Saulo';
  durationInSeconds = 2;

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  public get nome(){ 
    return this.formulario.get('nome') 
  }

  public formulario: FormGroup = new FormGroup({
    nome: new FormControl(null,Validators.required),
  });

  constructor(private _formBuilder: FormBuilder, private _bottomSheet: MatBottomSheet, public dialog: MatDialog, private _snackBar: MatSnackBar) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  removerNome(){
    this.formulario.reset()
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openSnackBar() {
    this._snackBar.openFromComponent(PizzaPartyComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }
}



@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}

@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'snack-bar-component-example-snack.html',
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class PizzaPartyComponent {}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
})
export class BottomSheetOverviewExampleSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}