export default class Address {

  private _street: string;
  private _number: number;
  private _city: string;
  private _state: string;
  private _country: string;

  constructor(street: string, number: number, city: string, state: string, country: string) {
    this._street = street
    this._number = number
    this._city = city
    this._state = state
    this._country = country

    this.validate()
  }

  validate(): boolean {

    if (this._street.length === 0)
      throw new Error(`street is required`)

    if (this._number < 0)
      throw new Error(`number must be greather than zero`)

    if (this._city.length === 0)
      throw new Error(`city is required`)

    if (this._state.length === 0)
      throw new Error(`state is required`)

    if (this._country.length === 0)
      throw new Error(`country is required`)


    return true
  }

  get street(): string {
    return this._street
  }

  get number(): number {
    return this._number
  }

  get city(): string {
    return this._city
  }

  get state(): string {
    return this._state
  }

  get country(): string {
    return this._country
  }

  toString(): string {
    return `${this._street}, ${this._number}, ${this._city}, ${this._state}, ${this._country}`
  }



}