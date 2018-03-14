export class Item {
  constructor(
    public id: string,
    public username: string,
    public email: string,
    public phone: string,
    public sites: string[],
    public address?: string,
    public file?: File,
    public filepath?: string
  ){}
}
