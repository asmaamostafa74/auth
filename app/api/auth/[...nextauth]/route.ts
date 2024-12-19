import NextAuth from "next-auth";

import { authOptions } from "@/lib/nextAuth";

const handler = NextAuth (authOptions);

export {handler as Get, handler as POSt}