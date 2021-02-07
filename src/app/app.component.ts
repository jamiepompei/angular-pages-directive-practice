import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images = [
    {
      title: 'MLEMMM',
      url: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'hooman i has flowah',
      url: 'https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'boopity boop',
      url: 'https://images.unsplash.com/photo-1583534778255-5d67d3dcf95d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTN8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'bat doge!!!',
      url: 'https://images.unsplash.com/photo-1544378382-5ea6d7768876?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTA5fHxkb2d8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    }
  ]
}
