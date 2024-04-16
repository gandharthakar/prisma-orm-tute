import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {

    // Create A One / Single User.

    // const create_user = await prisma.users.create({
    //     data: {
    //         name: "Amit Thakur",
    //         email: "amitk@test.com",
    //         age: 25,
    //         userPreference: {
    //             create: {
    //                 enable_email_updates: true
    //             }
    //         }
    //     },
    //     include: {
    //         userPreference: true
    //     }
    // });
    // console.log(create_user);


    // Create Mutilple Users.

    // const create_many_user = await prisma.users.createMany({
    //     data: [
    //         {
    //             name: "Ratan Tiwari",
    //             email: "rttiw@example.com",
    //             age: 28
    //         },
    //         {
    //             name: "Rachal Smith",
    //             email: "smith_rachal@email.com",
    //             age: 21
    //         },
    //         {
    //             name: "Prataap Patil",
    //             email: "pt_pt123@testmail.com",
    //             age: 35
    //         }
    //     ]
    // });
    // console.log(create_many_user);

    
    // Read Single Specific User.

    // const read_user = await prisma.users.findFirst({
    //     where: {
    //         // name: "Amit Thakur"
    //         id: "81a9cfc4-d873-402d-ba23-c1f158f5ce4a"
    //     },
    //     include: {
    //         userPreference: true
    //     }
    // })
    // console.log(read_user);


    // Read Multiple Users.

    const read_mult_users = await prisma.users.findMany({
        include: {
            userPreference: true
        }
    })
    console.log(read_mult_users);

    // Delete Many Users.

    // const delmny_users = await prisma.users.deleteMany();
    // console.log(delmny_users);
}

main()
.catch(err => console.log(err.message))
.finally(async () => {
    await prisma.$disconnect();
})