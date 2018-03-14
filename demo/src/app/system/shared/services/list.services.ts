import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import {NgForage, NgForageConfig} from "@ngforage/ngforage-ng5";


import {ConfigService} from "../../../shared/services/config.services";
import {Item} from "../models/item.model";


@Injectable()
export class ListService {
  constructor(private http:Http,
              private ngf:NgForage,
              private config:ConfigService) {
  };

  async getData():Promise<any> {
    let itemList:Item[];
    let v:number = await this.getNumberOfItems();

    if (v > 0) {
      itemList = await this.getItems();
    } else {
      itemList = this.setDefaultData();
    }

    return Promise.all(itemList).then((result) => {
        return result
      })
      .catch((error) => {
        console.log(error)
      })
  }

  setDefaultData():Item[] {
    let key:string = '';
    let sites:string[];
    let itemList:Item[] = [];
    let oneItem:Item;

    for (let item of this.config.defaultData) {
      key = item.id;
      sites = [];
      for (let site of item.sites) {
        sites.push(site);
      }
      oneItem = {
        id: item.id,
        username: item.username,
        email: item.email,
        phone: item.phone,
        address: item.address,
        file: null,
        filepath: null,
        sites
      }
      this.addUser(key, oneItem);
      itemList.push(oneItem);
    }
    return itemList;
  }

  async addUser(key:string, item:Item) {
    await this.ngf.setItem(key, item);
  }

  async removeUser(key) {
    await this.ngf.removeItem(key);
  }


  async getNumberOfItems():Promise<number> {
    try {
      let value = await this.ngf.length();
      return value;
    }
    catch (e) {
      console.log('caught error', e);
      return -1;
    }
  }

  async getItems():Promise<any> {
    const keys:string[] = await this.ngf.keys();
    let listItm:Item[] = [];
    for (let i of keys.sort()) {   //await this.ngf.getItem<Item>(i)
      listItm.push(await this.ngf.getItem<Item>(i))
    }
    return Promise.all(listItm).then((result) => {
        return result
      })
      .catch((error) => {
        console.log(error)
      })
  }

  async removeAll() {
    await this.ngf.clear();
  }

  async checkIfDriverIsSupported():Promise<boolean> {
    try {
      let value = this.ngf.supports(NgForageConfig.DRIVER_INDEXEDDB);
      return value;
    }
    catch (e) {
      console.log('caught error', e);
      return false;
    }
  }


}
