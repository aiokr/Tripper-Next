import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/post", "/post/(.*)", "/posts", "/posts/(.*)", "/category", "/category/(.*)", "/lens", "/photo", "/photo/(.*)", "/album", "/album/(.*)","/about"]
});


export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};