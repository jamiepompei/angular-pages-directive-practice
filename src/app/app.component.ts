import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
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
    },
    {
      title: 'weeee SNOW SNOW SNOW',
      url: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8ZG9nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'haiii',
      url: 'https://images.unsplash.com/photo-1534551767192-78b8dd45b51b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'hooman plz i look ridiculous in dis outfit',
      url: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'hoooman can haz moar coffee i is sleeepy',
      url: 'https://images.unsplash.com/photo-1585559700398-1385b3a8aeb6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'i am unamused hooman',
      url: 'https://images.unsplash.com/photo-1493916665398-143bdeabe500?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzd8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'thou shall not pass!!',
      url: 'https://images.unsplash.com/photo-1525253086316-d0c936c814f8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDl8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'hooman bring snacks, i is not leafin bed!!',
      url: 'https://images.unsplash.com/photo-1581888227599-779811939961?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTl8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'is time for walk nao plz?',
      url: 'https://images.unsplash.com/photo-1577828706208-00b4d7549735?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjJ8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'wut do you mean "git up"? i is comfeh',
      url: 'https://images.unsplash.com/photo-1577162365979-30fe9f9244aa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njd8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'i is NOT amused hooman',
      url: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjV8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'tell me i is good doggo and i giv hooman mlems',
      url: 'https://images.unsplash.com/photo-1546581884-81d0901ad6a6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzJ8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'ma i is SLEEPIN shush plz',
      url: 'https://images.unsplash.com/photo-1576514229391-4d082be595cb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzV8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'hooman imma give you a MLEMMMM',
      url: 'https://images.unsplash.com/photo-1530126483408-aa533e55bdb2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzN8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'can has help nao plz? no moars selfies, must get nu stick',
      url: 'https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nzh8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'ahhhh nuffin like da wind in my feathers',
      url: 'https://images.unsplash.com/photo-1559190394-df5a28aab5c5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODN8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'did i do a good?',
      url: 'https://images.unsplash.com/photo-1568483718627-15a190f20fcf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTB8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    }
  ]

  checkWindowIndex(index: number){
    return Math.abs(this.currentPage - index) < 5;
  }
}
