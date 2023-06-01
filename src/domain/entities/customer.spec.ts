import Customer from "./customer"

describe("Entity Unit Test", () => {

  it('should be able to create a customer', () => {
    const customer = new Customer("John", "john@doe.com")

    expect(customer).toBeDefined()
    expect(customer.id).toBeDefined()
    expect(customer.name).toBe("John")
    expect(customer.email).toBe("john@doe.com")
    expect(customer.address).toBeUndefined()
    expect(customer.is_active).toBe(false)
    expect(customer.created_at).toBeInstanceOf(Date)
  })


  it('should NOT be able to create a customer with INVALID parameters', () => {

    expect(() => new Customer("", "john@doe.com")).toThrowError("name is required")

    expect(() => new Customer("Johnm", "")).toThrowError("email is required")

  })
  it('should be able to activate a customer', () => {

    const customer = new Customer("John", "john@doe.com", "Street A, Number 123, City A, State A, Brazil")
    customer.activate()

    expect(customer).toBeDefined()
    expect(customer.is_active).toBe(true)
  })


  it('should be able to deactivate a customer', () => {

    const customer = new Customer("John", "john@doe.com", "Street A, Number 123, City A, State A, Brazil")
    customer.activate()

    expect(customer).toBeDefined()
    expect(customer.is_active).toBe(true)

    customer.deactivate()
    expect(customer.is_active).toBe(false)
  })



  it('should NOT be able to activate a customer without an addres', () => {

    const customer = new Customer("John", "john@doe.com")
    expect(() => {
      customer.activate()
    }).toThrowError("address is required to activate a customer")
  })




})