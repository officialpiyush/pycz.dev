CREATE TABLE `links` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`key` varchar(200) NOT NULL,
	`parent` enum('none','link') NOT NULL DEFAULT 'none',
	`description` text,
	`url` text NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`enabled` boolean NOT NULL DEFAULT true);

CREATE UNIQUE INDEX key_idx ON links (`key`);