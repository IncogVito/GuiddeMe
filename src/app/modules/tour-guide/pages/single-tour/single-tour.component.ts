import {Component, Input, OnInit} from '@angular/core';
import {Pair} from "../../../shared/models/pair";
import {CardSingleDetailModel} from "../../../shared/models/card-single-detail.model";
import {NavItemModel} from "../../../shared/models/nav-item.model";

@Component({
  selector: 'app-single-tour',
  templateUrl: './single-tour.component.html',
  styleUrls: ['./single-tour.component.scss']
})
export class SingleTourComponent implements OnInit {

  @Input()
  public iconWithDescription: Pair<string, string>[] = [];

  @Input()
  public singleDetails: CardSingleDetailModel[] = [{
    icon: 'schedule',
    text: '180 min',
    colorStyle: 'orange'
  }]

  @Input()
  public navigationList: NavItemModel[] = [{
    title: 'First',
    content: [{
      title: 'First 1',
      text: '"Aenean elementum accumsan tellus vel bibendum. Ut rhoncus pulvinar justo, sed porttitor enim hendrerit ac. Aliquam ut mauris arcu. Mauris blandit, ipsum vitae blandit dignissim, purus tellus convallis ante, mattis lobortis mauris neque sed diam. Suspendisse scelerisque orci eget ante consectetur, id placerat nisi placerat. Aenean mi eros, semper vel quam eu, fermentum eleifend odio. Quisque vitae vulputate tortor. Fusce ut nibh at est blandit venenatis nec venenatis nunc. Etiam eget iaculis nisi. Sed aliquam diam eget justo aliquam, sed placerat velit pellentesque.\\n" +\n' +
        '    "\\n" +\n' +
        '    "Nullam malesuada et orci quis fringilla. Nam libero risus, efficitur nec sodales vitae, viverra quis enim. Pellentesque cursus elit turpis, sit amet suscipit augue facilisis at. Nulla volutpat lectus nec elit posuere rhoncus. Mauris porttitor libero augue, vel tincidunt nibh ornare eget. Phasellus eget dui vitae neque faucibus sodales eget quis quam. Sed pretium sapien molestie turpis elementum tincidunt. Quisque a velit porttitor, scelerisque purus ut, malesuada metus. Nulla ut placerat lectus. Suspendisse potenti. Cras dignissim nunc nec volutpat accumsan. Sed eu sapien tellus. Suspendisse pharetra varius scelerisque. ' +
        'Vivamus ante diam, bibendum non justo at, accumsan dapibus metus. Suspendisse porta lectus lacus, vitae iaculis nisl hendrerit a. Vestibulum nulla sapien, tristique id imperdiet id, tempor eu dolor."\n',
      imageUrl: ''
    }
    ]
  }, {
    title: 'Second',
    content: [{
      title: "Mapa",
      imageUrl: 'assets/mapa.jpg',
    }]

  }, {
    title: 'Third',
    content: [{
      title: 'First 1',
      text: '"Aenean elementum accumsan tellus vel bibendum. Ut rhoncus pulvinar justo, sed porttitor enim hendrerit ac. Aliquam ut mauris arcu. Mauris blandit, ipsum vitae blandit dignissim, purus tellus convallis ante, mattis lobortis mauris neque sed diam. Suspendisse scelerisque orci eget ante consectetur, id placerat nisi placerat. Aenean mi eros, semper vel quam eu, fermentum eleifend odio. Quisque vitae vulputate tortor. Fusce ut nibh at est blandit venenatis nec venenatis nunc. Etiam eget iaculis nisi. Sed aliquam diam eget justo aliquam, sed placerat velit pellentesque.\\n" +\n' +
        '    "\\n" +\n' +
        '    "Nullam malesuada et orci quis fringilla. Nam libero risus, efficitur nec sodales vitae, viverra quis enim. Pellentesque cursus elit turpis, sit amet suscipit augue facilisis at. Nulla volutpat lectus nec elit posuere rhoncus. Mauris porttitor libero augue, vel tincidunt nibh ornare eget. Phasellus eget dui vitae neque faucibus sodales eget quis quam. Sed pretium sapien molestie turpis elementum tincidunt. Quisque a velit porttitor, scelerisque purus ut, malesuada metus. Nulla ut placerat lectus. Suspendisse potenti. Cras dignissim nunc nec volutpat accumsan. Sed eu sapien tellus. Suspendisse pharetra varius scelerisque. ' +
        'Vivamus ante diam, bibendum non justo at, accumsan dapibus metus. Suspendisse porta lectus lacus, vitae iaculis nisl hendrerit a. Vestibulum nulla sapien, tristique id imperdiet id, tempor eu dolor."\n',
      imageUrl: 'assets/touristic-category.jpg'
    }]
  }
  ];


  constructor() {
  }

  ngOnInit(): void {
  }

}
