import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/models/Banner';
import { BannerService } from 'src/app/services/banner.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-banner-manager',
  templateUrl: './banner-manager.component.html',
  styleUrls: ['./banner-manager.component.scss']
})
export class BannerManagerComponent implements OnInit {
  banner: Banner;
  banners : Banner[];
  page = 1;
  pageSize = 10;
  public isCollapsed = true;


  constructor(
    private BannerService : BannerService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.getBanner()
  }
  getBanner(){
    this.BannerService.getBanner().subscribe(data => { this.banners  = data
    console.log(data) })
  }
  delBanner(id){
    this.banners = this.banners.filter(banner => banner.id != id)
    this.BannerService.removeBanner(id).subscribe(() => this.router.navigateByUrl('/admin/banner-manager'));
  }

}
