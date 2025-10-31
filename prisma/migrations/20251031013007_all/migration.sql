-- CreateTable
CREATE TABLE "Groups" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tasks" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL,

    CONSTRAINT "Tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DailyTasks" (
    "id" TEXT NOT NULL,
    "day" TEXT NOT NULL,
    "tasks_id" TEXT NOT NULL,

    CONSTRAINT "DailyTasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LiveBoards" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "LiveBoards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GroupsToUsers" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_GroupsToUsers_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_DailyTasksToLiveBoards" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_DailyTasksToLiveBoards_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "LiveBoards_user_id_key" ON "LiveBoards"("user_id");

-- CreateIndex
CREATE INDEX "_GroupsToUsers_B_index" ON "_GroupsToUsers"("B");

-- CreateIndex
CREATE INDEX "_DailyTasksToLiveBoards_B_index" ON "_DailyTasksToLiveBoards"("B");

-- AddForeignKey
ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DailyTasks" ADD CONSTRAINT "DailyTasks_tasks_id_fkey" FOREIGN KEY ("tasks_id") REFERENCES "Tasks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiveBoards" ADD CONSTRAINT "LiveBoards_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GroupsToUsers" ADD CONSTRAINT "_GroupsToUsers_A_fkey" FOREIGN KEY ("A") REFERENCES "Groups"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GroupsToUsers" ADD CONSTRAINT "_GroupsToUsers_B_fkey" FOREIGN KEY ("B") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DailyTasksToLiveBoards" ADD CONSTRAINT "_DailyTasksToLiveBoards_A_fkey" FOREIGN KEY ("A") REFERENCES "DailyTasks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DailyTasksToLiveBoards" ADD CONSTRAINT "_DailyTasksToLiveBoards_B_fkey" FOREIGN KEY ("B") REFERENCES "LiveBoards"("id") ON DELETE CASCADE ON UPDATE CASCADE;
