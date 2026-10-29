-- Run this in the Supabase SQL Editor

-- Clients table
create table if not exists public.clients (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users not null,
  name text not null,
  sport text,
  position text,
  team text,
  status text default 'Active',
  commission_rate numeric,
  notes text,
  created_at timestamptz default now()
);

-- Deals table
create table if not exists public.deals (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users not null,
  client_id uuid references public.clients on delete cascade,
  brand text not null,
  type text,
  value text,
  status text default 'Negotiating',
  created_at timestamptz default now()
);

-- Contracts table (metadata; files go to Storage)
create table if not exists public.contracts (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users not null,
  client_id uuid references public.clients on delete cascade,
  title text not null,
  file_path text,
  status text default 'Draft',
  created_at timestamptz default now()
);

-- Events / schedule
create table if not exists public.events (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users not null,
  client_id uuid references public.clients on delete set null,
  title text not null,
  date date,
  time text,
  notes text,
  created_at timestamptz default now()
);

-- Enable RLS
alter table public.clients enable row level security;
alter table public.deals enable row level security;
alter table public.contracts enable row level security;
alter table public.events enable row level security;

-- Policies (users can only see/edit their own data)
create policy "Users can CRUD own clients" on public.clients for all using (auth.uid() = user_id);
create policy "Users can CRUD own deals" on public.deals for all using (auth.uid() = user_id);
create policy "Users can CRUD own contracts" on public.contracts for all using (auth.uid() = user_id);
create policy "Users can CRUD own events" on public.events for all using (auth.uid() = user_id);

-- Storage bucket for contracts (create via dashboard or API, then add policy)
-- Bucket name: contracts
-- Policy example: allow authenticated users to upload to their own folder
