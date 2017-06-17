import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpCallerService } from '../service/apiCaller';

@Component({
    selector: 'kd-empList',
    templateUrl: 'app/emplist/emplist.component.html'
})

export class EmplistComponent implements OnInit {
    result: any;
    hiddenElement: boolean = false;
    editedEmpRecord: object = {};
    constructor(private _httpCallerService: HttpCallerService, private router: Router){

    }
    ngOnInit() {
        this._httpCallerService.getData('allEmpList', {}).subscribe(data => {
            this.result = data;
            if(this.result.statusCode === 200) {
                //localStorage.setItem('usrData', JSON.stringify(this.result.data[0]));
                console.log(this.result)
                this.result = this.result.data;
                // this.location.replaceState('/'); // clears browser history so they can't navigate with back button
                //this.router.navigate(['home']);
            }
        });
    }
    editRecord(emp: any): void {
        this.hiddenElement = true;
        this.editedEmpRecord = emp;
    }
    deleteRecord(id: number): void {
        this._httpCallerService.deleteData('empList', 'id', id).subscribe(data => {
            //this.result = data;
            if(this.result.statusCode === 200) {
                console.log(this.result)
                //this.result = this.result.data;
            }
        });
    }
    cancel(): void {
        this.hiddenElement = false;
    }
    saveEditedRecord(): void {
        
    }
}