ALTER TABLE "user" RENAME TO "logins";--> statement-breakpoint
ALTER TABLE "favorites" DROP CONSTRAINT "favorites_userId_user_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "favorites" ADD CONSTRAINT "favorites_userId_logins_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."logins"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
