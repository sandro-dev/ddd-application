import Address from "../value-objects/address.vo"
import Customer from "./customer"

describe("Entity Unit Test", () => {

  it('should be able to create a customer', () => {
    const customer = new Customer("John", "john@test.com")

    expect(customer).toBeDefined()
    expect(customer.id).toBeDefined()
    expect(customer.name).toBe("John")
    expect(customer.email).toBe("john@test.com")
    expect(customer.address).toBeUndefined()
    expect(customer.is_active).toBe(false)
    expect(customer.created_at).toBeInstanceOf(Date)
  })
  it('should be able to change a customer name or email', () => {
    const customer = new Customer("John", "john@test.com")

    expect(customer).toBeDefined()
    expect(customer.id).toBeDefined()
    expect(customer.name).toBe("John")

    customer.changeName("Bill")
    expect(customer.name).toBe("Bill")

    customer.changeEmail("bill@test.com")
    expect(customer.email).toBe("bill@test.com")

  })


  it('should NOT be able to create a customer with INVALID parameters', () => {

    expect(() => new Customer("", "john@test.com")).toThrowError("name is required")

    expect(() => new Customer("Johnm", "")).toThrowError("email is required")

  })
  it('should be able to activate a customer', () => {

    const customer = new Customer("John", "john@test.com")
    const address = new Address("Street A", 123, "City A", "State A", "Brazil")
    customer.changeAddress(address)
    customer.activate()

    expect(customer).toBeDefined()
    expect(customer.is_active).toBe(true)
  })


  it('should be able to deactivate a customer', () => {

    const customer = new Customer("John", "john@test.com")
    const address = new Address("Street A", 123, "City A", "State A", "Brazil")
    customer.changeAddress(address)
    customer.activate()

    expect(customer).toBeDefined()
    expect(customer.is_active).toBe(true)

    customer.deactivate()
    expect(customer.is_active).toBe(false)
  })



  it('should NOT be able to activate a customer without an addres', () => {

    const customer = new Customer("John", "john@test.com")
    expect(() => {
      customer.activate()
    }).toThrowError("address is required to activate a customer")
  })




})