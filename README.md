# EcoFridge 

This project allows to register your food in an account. You can save your food perishable and unperishable. Some informations are given to know which food is expired.... 
This project is to reduce food waste and optimize the management of your "fridge".

# 👩‍💻 Technologies

| Back - Spring Boot | version (works) | 
| --- | --- |
| java | 22 |
| maven| 3.9.6 |

| Front - Angular | version (works) | 
| --- | --- |
| npm | 10.5.0 |

| Front - Flutter | version (works) | 
| --- | --- |
| java | 22 |
| dart sdk | 3.4.0 |
| flutter | 3.22.0 stable |

# 🛠 Project and funtionnalities

✅ Connection of user succeed with securized token

✅ Message when connection of user don't succeed

✅ Display food in MyFridge view for users

✅ Sign up for new users

✅ Display expired Food

⬜ Add new FoodBatch in new purshase view

# ⚡️ Standard Execution

```bash
cd back
mvn spring-boot:run
```

URL of Swagger: http://localhost:8080/swagger-ui/index.html

```bash
cd front/angular
npm start
```

URL of website: http://localhost:4200/home

# ☁️ Docker Execution

## Back - Java Spring Boot

To create image Docker, execute this command

```bash
docker build -t back_ecofridge .  
```

To execute application, execute this command. 8080:8080 is port and default port, so change it if you execute application in another port.

```bash
docker run -p 8080:8080 back_ecofridge 
```

## Front - Angular

To create image Docke, execute this command

```bash
docker build -t front_angular_ecofridge .
```

To execute application, execute this command. 4200:4200 is port and default port, so change it if you execute application in another port.

```bash
docker run -p 4200:4200 front_angular_ecofridge
```    