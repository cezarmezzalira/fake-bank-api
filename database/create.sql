CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
create schema "fakebank";
create table "fakebank"."customers" (
  id uuid not null DEFAULT uuid_generate_v4(),
  "name" varchar NOT NULL,
  "document" varchar NOT NULL,
  "birth_date" date NOT NULL,
  "address" varchar NOT NULL,
  "city" varchar NOT NULL,
  "state" varchar NOT NULL,
  "zip_code" varchar NOT NULL,
  "active" bool NOT NULL DEFAULT true,
  "password" varchar NOT NULL,
  "created_at" timestamp NOT NULL default now(),
  "updated_at" timestamp NOT NULL default now(),
  primary key (id)
);