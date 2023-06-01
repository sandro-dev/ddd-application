import { v4 as uuid } from 'uuid';

export default class Customer {
  private _id: string
  private _name: string
  private _email: string
  private _address!: string
  private _is_active: boolean
  private _created_at: Date

  constructor(name: string, email: string, address?: string, is_active?: boolean) {
    this._id = uuid()
    this._name = name
    this._email = email
    this._address = address
    this._is_active = is_active || false;
    this._created_at = new Date()

    this.validate()
  }

  // as entidades precisam ter uma validação para manter um estado integro
  validate(): boolean {
    if (!this._name)
      throw new Error('name is required')

    if (!this._email)
      throw new Error(`email is required`)

    return true
  }

  activate(): void {
    if (!this._address)
      throw new Error('address is required to activate a customer')

    this._is_active = true
  }

  deactivate(): void {
    this._is_active = false
  }


  get id(): string {
    return this._id
  }

  get name(): string {
    return this._name
  }

  get email(): string {
    return this._email
  }

  get address(): string {
    return this._address
  }

  get is_active(): boolean {
    return this._is_active
  }


  get created_at(): Date {
    return this._created_at
  }



}