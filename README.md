# prisma-orm-tute

First install all the dependencies by running this command

#### **<code>npm install</code>**

Then init prisma by running command

#### **<code>npx prisma init --datasource-provider postgresql</code>**

You can choose other database as a datasource provider in flag too such as SQLite, MongoDB, MySQL etc.

Then define your models in **"schema.prisma"** file. Then run below command to migrate your table changes into your database.

#### **<code>npx prisma migrate dev --name init</code>**