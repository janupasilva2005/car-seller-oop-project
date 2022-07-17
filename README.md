# Car Seller Shop

### This is a simple project to practice OOP :)

## How to get started

```javascript
    npm install
    npm run build
    npm start
```

#### 1. How to create an admin(owner)

```javascript
const admin = new Admin(
  {
    id: '0001', // Id
    name: 'root', // admin name
    email: 'root@gmail.com', // admin email
    password: 'root123', // admin password
  },
  1
)
```

#### 2. Add a vehicle

```javascript
// Car
admin.addCar(
  new Car(
    {
      id: '001', // Vehicle id
      brand: 'toyota', // Vehicle brand
      wheels: 4, // Number of wheels
      country: 'japan', // Made country
      year: 2012, // Year of manufactured
      price: 1000, // Price of the vehicle
    },
    4
  )
)
```

```javascript
// Bike
admin.addBike(
  new Bike(
    {
      id: '002', // Vehicle id
      brand: 'bmw', // Vehicle brand
      wheels: 2, // Number of wheels
      country: 'japan', // Made country
      year: 2012, // Year of manufactured
      price: 3000, // Price of the vehicle
    },
    4
  )
)
```

#### 3. Remove a vehicle

```javascript
admin.removeVehicle('003') // Your vehicle id
```

#### 4. How to create an user(subscriber)

```javascript
// Car
const sub1 = new Subscriber(
  {
    id: '0001',
    name: 'john',
    email: 'john@gmail.xyz',
    password: 'john',
  },
  5000
)
```

#### 5. Buy a vehicle

```javascript
console.log(sub1.buyVehicle('001'))
```

#### 6. View subscribers vehicle list

```javascript
console.log(sub1.getSubscribersGarage())
```
