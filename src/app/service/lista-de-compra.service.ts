import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private listaDeCompra: Item[];

  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem('itens') || '[]');
  }
  getListaDeCompra(){
    return this.listaDeCompra;
  }

  criarItem(nomeDoItem :string) {
    const id = this.listaDeCompra.length + 1
    const item : Item = {
      id: id,
      nome: nomeDoItem,
      data: new Date().toLocaleString('pt-br'),
      comprado: false
    }
    return item
  }

  adicionarItemNaLista(nomeDoItem: string) {
    const item = this.criarItem(nomeDoItem)
    this.listaDeCompra.push(item);
    //this.atualizarLocalStorage();

  }

  editarItemDaLista(ItemAntigo: Item, nomeEditadoItem: string) {
    const itemEditado : Item = {
      id: ItemAntigo.id,
      nome: nomeEditadoItem,
      data: ItemAntigo.data,
      comprado: ItemAntigo.comprado

    }

    const id = ItemAntigo.id;
    this.listaDeCompra.splice(Number(id)-1, 1, itemEditado);
    //this.atualizarLocalStorage()
  }
  atualizarLocalStorage(){
    localStorage.setItem('itens', JSON.stringify(this.listaDeCompra));
  }
}
