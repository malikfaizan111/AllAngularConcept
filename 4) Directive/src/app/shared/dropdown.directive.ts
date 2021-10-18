import { Directive, HostBinding, HostListener } from "@angular/core";
@Directive({
    selector:'[appDropdown]'
})

export class DropdownDirective{
    @HostBinding('class.open') isTrue = false;
    @HostListener('click') toggleOpen(){
            this.isTrue =  !this.isTrue;
    }
}