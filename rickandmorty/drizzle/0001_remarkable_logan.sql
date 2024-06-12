CREATE TABLE IF NOT EXISTS "user" (
	"id" text PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "favorites" ALTER COLUMN "characterId" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "favorites" ALTER COLUMN "characterId" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "favorites" DROP COLUMN IF EXISTS "created";