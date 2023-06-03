import Address from "./address.vo"

describe("Address Value Object Unit Tests", () => {

  it("should be able to create an address", () => {

    const address = new Address("Street A", 123, "City A", "State A", "Country A")

    expect(address).toBeDefined()
    expect(address.street).toBe("Street A")
    expect(address.number).toBe(123)
    expect(address.city).toBe("City A")
    expect(address.state).toBe("State A")
    expect(address.country).toBe("Country A")
  })

  it("should NOT be able to create an address with INVALID parameters", () => {

    expect(() => {
      new Address("", 123, "City A", "State A", "Country A")
    }).toThrowError("street is required")


    expect(() => {
      new Address("Street A", -123, "City A", "State A", "Country A")
    }).toThrowError("number must be greather than zero")


    expect(() => {
      new Address("Street A", 123, "", "State A", "Country A")
    }).toThrowError("city is required")

    expect(() => {
      new Address("Street A", 123, "City A", "", "Country A")
    }).toThrowError("state is required")

    expect(() => {
      new Address("Street A", 123, "City A", "State A", "")
    }).toThrowError("country is required")

  })

  it("should be able to generate a full address", () => {

    const address = new Address("Street A", 123, "City A", "State A", "Country A")

    expect(address).toBeDefined()
    expect(address.toString()).toBe("Street A, 123, City A, State A, Country A")
  })


})