import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.page.html",
  styleUrls: ["./blog.page.scss"],
})
export class BlogPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  singleBlog(blog: number) {
    if (blog == 1) {
      this.router.navigate(["/blog1"]);
    } else if (blog == 2) {
      this.router.navigate(["/blog2"]);
    } else {
      this.router.navigate(["/blog3"]);
    }
  }
}
