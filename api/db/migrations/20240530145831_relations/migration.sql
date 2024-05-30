/*
  Warnings:

  - Added the required column `stack_id` to the `card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `stack` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "card" ADD COLUMN     "stack_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "stack" ADD COLUMN     "user_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "stack" ADD CONSTRAINT "stack_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "card_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "card" ADD CONSTRAINT "card_stack_id_fkey" FOREIGN KEY ("stack_id") REFERENCES "stack"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
