import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/models/Banner';
import { BannerService } from 'src/app/services/banner.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-banner-add',
  templateUrl: './banner-add.component.html',
  styleUrls: ['./banner-add.component.scss']
})
export class BannerAddComponent implements OnInit {
  banner: Banner = new Banner();
  
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
  }
  addBanner(){
    // this.productService.addProduct(this.product);
    this.bannerService.addBanner(this.banner).subscribe(data => this.router.navigateByUrl('/admin/banner-manager'));
  }

}
