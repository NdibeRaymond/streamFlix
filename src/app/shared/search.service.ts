import {Injectable} from '@angular/core';
var Fuse = require('fuse.js');


declare let fuse:any;


@Injectable()
export class SearchService {

 Search(searchTerm:string,all){
   var options = {
     shouldSort: true,
     threshold: 0.2,
     location: 0,
     distance: 100,
     maxPatternLength: 32,
     minMatchCharLength: 1,
     keys:[
       "title",
       "genre",
     ]};

     let fss = new Fuse(all, options);
     let result = fss.search(searchTerm);
     return result;
 }

}
