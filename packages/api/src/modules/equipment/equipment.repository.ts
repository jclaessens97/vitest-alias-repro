import { prisma } from '@/db';

export function getAllEquipment() {
  return prisma.equipment.findMany();
}
