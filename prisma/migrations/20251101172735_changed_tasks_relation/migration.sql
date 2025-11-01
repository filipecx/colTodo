/*
  Warnings:

  - You are about to drop the column `tasks_id` on the `DailyTasks` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."DailyTasks" DROP CONSTRAINT "DailyTasks_tasks_id_fkey";

-- AlterTable
ALTER TABLE "DailyTasks" DROP COLUMN "tasks_id";

-- CreateTable
CREATE TABLE "_DailyTasksToTasks" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_DailyTasksToTasks_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_DailyTasksToTasks_B_index" ON "_DailyTasksToTasks"("B");

-- AddForeignKey
ALTER TABLE "_DailyTasksToTasks" ADD CONSTRAINT "_DailyTasksToTasks_A_fkey" FOREIGN KEY ("A") REFERENCES "DailyTasks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DailyTasksToTasks" ADD CONSTRAINT "_DailyTasksToTasks_B_fkey" FOREIGN KEY ("B") REFERENCES "Tasks"("id") ON DELETE CASCADE ON UPDATE CASCADE;
