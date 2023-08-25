CREATE TABLE `links` (
	`id` text PRIMARY KEY NOT NULL,
	`key` text(200) NOT NULL,
	`parent` text DEFAULT 'none' NOT NULL,
	`description` text,
	`url` text NOT NULL,
	`enabled` integer DEFAULT true,
	`created_at` integer DEFAULT (strftime('%s', 'now')),
	`updated_at` integer DEFAULT (strftime('%s', 'now'))
);
--> statement-breakpoint
CREATE UNIQUE INDEX `key_idx` ON `links` (`key`);