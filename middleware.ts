import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: ["((?!^/dashboard).*)"],
  // publicRoutes: (req) => !req.url.includes("/dashboard"),
  // Routes that can always be accessed, and have
  // no authentication information
  ignoredRoutes: ["/((?!api|trpc))(_next.*|.+\.[\w]+$)", "/api"],
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};