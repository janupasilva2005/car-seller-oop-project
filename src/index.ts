/**
 * Car Seller
 *
 * Vehicle - Car and Bike only
 * User - admin and subscriber
 *
 * Admin - Add new vehicles, Remove vehicles
 * Subscriber - Buy vehicle, Set their budget
 */

/**
 * @interface Vehicle
 */
interface VehicleInterface {
  id: string
  brand: string
  wheels: number
  country: string
  year: number | string
  price: number
}

/**
 * @interface User
 */
interface UserInterface {
  id: string
  name: string
  email: string
  password: string
}

/**
 * @class Vehicle
 */
abstract class Vehicle {
  public id: string
  public brand: string
  public wheels: number
  public country: string
  public year: number | string
  public price: number

  constructor(vehicle: VehicleInterface) {
    this.id = vehicle.id
    this.brand = vehicle.brand
    this.wheels = vehicle.wheels
    this.country = vehicle.country
    this.year = vehicle.year
    this.price = vehicle.price
  }
}

/**
 * @class Car
 */
class Car extends Vehicle {
  public seats: number

  constructor(vehicle: VehicleInterface, seats: number) {
    super(vehicle)
    this.seats = seats
  }

  public reviewCarInfo(): Object {
    return {
      id: this.id,
      year: this.year,

      car: {
        brand: this.brand,
        wheels: this.wheels,
        country: this.country,
        seats: this.seats,
      },
    }
  }
}

/**
 * @class Seller
 */
abstract class Seller {
  static shopName: string = 'Sell-A-Car'
  static vehicles: Vehicle[] = []
}

/**
 * @class User
 */
abstract class User {
  public id: string
  public name: string
  public email: string
  private password: string
  public type: string

  constructor(user: UserInterface, type: string) {
    this.id = user.id
    this.name = user.name
    this.email = user.email
    this.password = user.password
    this.type = type
  }
}

/**
 * @class Admin
 */
class Admin extends User {
  public adminId: number

  constructor(admin: UserInterface, adminId: number) {
    super(admin, 'admin')
    this.adminId = adminId
  }

  public changeShopName(newName: string): boolean {
    if (newName.length >= 5) {
      Seller.shopName = newName

      return true
    }

    return false
  }

  public getShopName(): string {
    return Seller.shopName
  }

  public addCar(car: Car): boolean {
    Seller.vehicles.push(car)

    return true
  }

  public getVehicles(): Array<Vehicle> {
    return Seller.vehicles
  }

  public removeVehicle(vehicleId: string): void {
    let newVehicles = Seller.vehicles.filter((vehicle) => {
      return vehicle.id != vehicleId
    })
    Seller.vehicles = newVehicles
  }
}

/**
 * @class Subscriber
 */
class Subscriber extends User {
  public budget: number

  constructor(subscriber: UserInterface, budget: number) {
    super(subscriber, 'subscriber')
    this.budget = budget
  }

  public getSubscriberBudget(): number {
    return this.budget
  }
}
