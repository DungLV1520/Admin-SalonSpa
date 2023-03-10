import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-basic",
  templateUrl: "./basic.component.html",
  styleUrls: ["./basic.component.scss"],
})
export class BasicComponent implements OnInit {
  year: number = new Date().getFullYear();

  constructor() {}

  ngOnInit(): void {}

  config = {
    allowNumbersOnly: true,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: "",
    inputStyles: {
      width: "80px",
      height: "50px",
    },
  };
}
