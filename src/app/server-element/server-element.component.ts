import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy,
  ViewChild, ElementRef
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit, OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @ViewChild('heading') header: ElementRef;
  constructor() {
    console.log('constructor');
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges', changes);
  }

  ngOnInit() {
    console.log('ngOnInit');
    console.log(this.header.nativeElement.textContent);
    //tutaj nie widać text content
  }

  ngDoCheck(){
    console.log('ngDoCheck');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit');
  }
  //...
  ngAfterViewInit(){
    console.log('ngAfterViewInit');
    console.log(this.header.nativeElement.textContent);
    //dopiero tutaj jest widoczne
  }

  ngOnDestroy(){
    console.log('onDestroy');
  }
}
