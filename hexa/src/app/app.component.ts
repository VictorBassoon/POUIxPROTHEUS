import { Component, OnInit } from '@angular/core';

import { PoMenuItem, PoTableColumn } from '@po-ui/ng-components';
import { PoPageDynamicSearchFilters } from '@po-ui/ng-templates';
import { ProAppConfigService, ProJsToAdvplService } from '@totvs/protheus-lib-core';
import { ProtheusService } from './providers/protheus.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public columns: Array<PoTableColumn> = [];
  public items: Array<any> = [];

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClick.bind(this) },
    { label: 'Cadastro de produtos', action: () =>{this.proJsToAdvplService.jsToAdvpl('MATA010', 'Comando Javascript');} }
  ];

  constructor(
    private proJsToAdvplService: ProJsToAdvplService,
    private proAppConfigService: ProAppConfigService,
    private restProtheus: ProtheusService
  ) {}
  ngOnInit(): void {
    this.columns = this.getColumns();
    this.items = this.getItems();
  }

  private onClick() {

  }

  click1(): void {
    this.proJsToAdvplService.jsToAdvpl('mensagemJavascript', 'Comando Javascript');
  }

  click2(): void {
    this.proJsToAdvplService.jsToAdvpl('receberProtheus', '');
  }
  click3(): void {
    this.proAppConfigService.callAppClose(true);
  }

  // click4(): void {
  //   this.proAppConfigService.callAppClose(false);
  // }
  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'Code', type: 'string', width: '8%' },
      { property: 'Description', type: 'string', width: '8%' },
      { property: 'Title', type: 'string', width: '8%' },
      { property: 'Street', type: 'string', width: '8%' },
      { property: 'Neighborhood', type: 'string', width: '8%' },
      { property: 'City', type: 'string', width: '8%' },
      { property: 'State', type: 'string', width: '8%' },
    ]
  }
  getItems(): Array<any> {
    this.restProtheus.getProtheus()
    .then((res:any) => {

      this.items = res["items"]
      console.log(this.items)})
    .catch(error => {console.error(error)})
  return this.items

  }
  // onChangeDisclaimers(disclaimers) {
  //   const filter = {};
  //   disclaimers.forEach(item => {
  //     filter[item.property] = item.value;
  //   });
  //   this.searchItems(filter);
  // }

}
