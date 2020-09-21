import { Directive, Input,  forwardRef, ElementRef } from '@angular/core';
import { Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appFilesUploader]',
  providers:[
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => FilesUploaderDirective),
      multi: true,
    }
  ]
})
export class FilesUploaderDirective implements  Validator  {

  @Input() allowedMimeTypes: string[] = [];
  @Input() notAllowedMimeTypes: string[] = [];
  @Input() maxSizeKb: number = 5;
  @Input() maxNameLength: number = 50;

  constructor(private el:ElementRef) { }

  public validate() {
     
    let files:FileList = this.el.nativeElement.files; 
     let error = this.validateTypes(files) ? this.validateTypes(files):this.validateSize(files) ? this.validateSize(files) : this.validateNameLength(files) ? this.validateNameLength(files) : null;
     return error
  }


  validateTypes(files:FileList):any{
    let error= null;
     Array.from(files).forEach((file:File)=>{
            if(this.allowedMimeTypes.indexOf(file.type)<0){
              error = {invalidMimeType:true}
            }  
      })
    Array.from(files).forEach((file: File) => {
      if (this.notAllowedMimeTypes.indexOf(file.type) >= 0) {
        error = { invalidMimeType: true }
      }
    })

     return error;
  }


  validateSize(files:FileList):any{
    let error= null;
    Array.from(files).forEach((file:File)=>{
       
      let sizeInKb = file.size/1024;

      if(sizeInKb > this.maxSizeKb){
        error = {invalidFileSize:true}
      }
    })

    return error;
       
  }

  validateNameLength(files: FileList):any{
      let error = null;
      Array.from(files).forEach((file:File)=>{
        if(file.name.length > this.maxNameLength){
           error={invalidNameLength:true}
        }
      })
      return error;
  }

}
