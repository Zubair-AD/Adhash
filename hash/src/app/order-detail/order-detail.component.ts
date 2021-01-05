import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  name="Lehza i7s sport Wireless Earphones";
  color="color : white";
  seller="Seller : RS Future";
  amt="₹399";
  offer="2 offers Applied"
  date="Delivery expected by Jan 09, 2021"
  item="CANCEL ITEM"
  help="NEED HELP?"
  constructor() { }

  ngOnInit(): void {
  }

  public counts = ["Recieved","In Progress","Ready for Billing",
  "Billed","Order Closed"];
  public orderStatus = "In Progress"



  imageObject = [{
    image: 'https://storiesflistgv2.azureedge.net/stories/2019/08/flipkartideas_banner_FKS.jpg',
    thumbImage: 'https://storiesflistgv2.azureedge.net/stories/2019/08/flipkartideas_banner_FKS.jpg',
   
}, {
    image: 'https://storiesflistgv2.azureedge.net/stories/2019/09/Inarticle_banner1.jpg',
    thumbImage: 'https://storiesflistgv2.azureedge.net/stories/2019/09/Inarticle_banner1.jpg'
}, {
    image: 'https://blog.indifi.com/wp-content/uploads/2019/12/Why-Flipkart-Should-be-a-Preferred-Choice-If-You-Are-Thinking-of-Taking-Business-Online--500x279.jpg',
    thumbImage: 'https://blog.indifi.com/wp-content/uploads/2019/12/Why-Flipkart-Should-be-a-Preferred-Choice-If-You-Are-Thinking-of-Taking-Business-Online--500x279.jpg',

}, {
    image: 'https://i.pinimg.com/originals/0b/28/cb/0b28cbdd38398e10763eed914dc4ef14.jpg',
    thumbImage: 'https://i.pinimg.com/originals/0b/28/cb/0b28cbdd38398e10763eed914dc4ef14.jpg',
   
}];








}
