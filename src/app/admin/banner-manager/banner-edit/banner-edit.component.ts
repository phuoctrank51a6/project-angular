import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/models/Banner';
import { BannerService } from 'src/app/services/banner.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-banner-edit',
  templateUrl: './banner-edit.component.html',
  styleUrls: ['./banner-edit.component.scss']
})
export class BannerEditComponent implements OnInit {
  banner: Banner;
  
  form = new FormGroup({
    'id': new FormControl(null),
    'name': new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    'img': new FormControl('', [
      Validators.required,
      Validators.pattern('https?://.+')
    ])
  })
  
get name() { return this.form.get('name'); }
get img() { return this.form.get('img'); }

  constructor(
    private bannerService: BannerService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.editBanner();
  }
  editBanner(){
    this.route.params.subscribe(data => {
      let {id} = data;
      console.log(id);
      this.bannerService.detailBanner(id).subscribe(data => 
        // console.log(data)  
        this.banner = data
      );
    }) 
    // this.productService.detailProduct();
  }
  updateBanner(){
    // this.productService.updateProduct(this.product);
    // console.log(this.product);
    this.bannerService.updateBanner(this.banner).subscribe(() => this.router.navigateByUrl('/admin/banner-manager'));
      // console.log('hello')
      // this.product = data
  }

}
