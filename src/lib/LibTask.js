const { PrismaClient } = require('@prisma/client')

module.exports.getItems = async function(){
  try {
    console.log("tasks");
    const prisma = new PrismaClient()
    const items = await prisma.task.findMany()
    await prisma.$disconnect()

    return items
  } catch (err) {
    throw new Error('Error , getItems');
  }
}
//addTask
module.exports.addTask = async function(args){
  try {
console.log(args);
    const prisma = new PrismaClient();
    const result = await prisma.task.create({
      data: {
        title: args.title,
        userId: 0
      }
    }) 
    await prisma.$disconnect()
console.log(result);
    return result
  } catch (err) {
    throw new Error('Error , addTask');
  }
}
