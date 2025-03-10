import { Client } from "./src/client.ts";
import { Query } from "./src/query.ts";
import { AppwriteException } from "./src/exception.ts";
import { Account } from "./src/services/account.ts";
import { Avatars } from "./src/services/avatars.ts";
import { Database } from "./src/services/database.ts";
import { Functions } from "./src/services/functions.ts";
import { Health } from "./src/services/health.ts";
import { Locale } from "./src/services/locale.ts";
import { Storage } from "./src/services/storage.ts";
import { Teams } from "./src/services/teams.ts";
import { Users } from "./src/services/users.ts";

export {
    Client,
    Query,
    AppwriteException,
    Account,
    Avatars,
    Database,
    Functions,
    Health,
    Locale,
    Storage,
    Teams,
    Users,
};

export type { Models } from "./src/models.d.ts";
export type { QueryTypes, QueryTypesList } from "./src/query.ts";
