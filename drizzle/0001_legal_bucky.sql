CREATE TABLE IF NOT EXISTS "askgg_message" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "askgg_message_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"created_by" varchar(255) DEFAULT 'anonymous' NOT NULL,
	"body" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "askgg_message" ADD CONSTRAINT "askgg_message_created_by_askgg_user_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."askgg_user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
