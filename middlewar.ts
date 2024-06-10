import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { log } from "console";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/"]);
export default clerkMiddleware((auth, request) => {
  if (isProtectedRoute(request)) {
    auth;
    auth().protect();
  }
  return NextResponse.next();
});
console.log(isProtectedRoute);


export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
