-- CreateTable
CREATE TABLE "card_user" (
    "id" TEXT NOT NULL,
    "external_auth_provider" TEXT NOT NULL DEFAULT 'auth0',
    "external_auth_id" TEXT NOT NULL,

    CONSTRAINT "card_user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stack" (
    "id" TEXT NOT NULL,
    "title" TEXT,

    CONSTRAINT "stack_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "card" (
    "id" TEXT NOT NULL,
    "front_text" TEXT,
    "front_image" TEXT,
    "back" TEXT NOT NULL,

    CONSTRAINT "card_pkey" PRIMARY KEY ("id")
);
