import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  // Helper function to hash passwords
  const hashPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  };

  // * Clean up the existing data
  console.log("Cleaning up existing data...");

  // Delete users first due to foreign key constraint with roles
  await prisma.user.deleteMany();

  // Then delete roles
  await prisma.rol.deleteMany();

  console.log("Existing data cleaned up.");

  // * Create Roles
  console.log("Creating roles...");
  const adminRole = await prisma.rol.create({
    data: {
      name: "admin",
    },
  });

  const userRole = await prisma.rol.create({
    data: {
      name: "user",
    },
  });
  console.log("Roles created.");

  // * Create Users
  console.log("Creating users...");
  const adminUser = await prisma.user.create({
    data: {
      name: "admin",
      email: "admin@example.com",
      password: await hashPassword("password"),
      rolId: adminRole.id,
    },
  });

  const userUser = await prisma.user.create({
    data: {
      name: "user",
      email: "user@example.com",
      password: await hashPassword("password"),
      rolId: userRole.id,
    },
  });
  console.log("Users created.");

  // Print out the inserted data
  console.log({ adminRole, userRole, adminUser, userUser });
}

main()
  .catch((e) => {
    console.error("Error: ", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
