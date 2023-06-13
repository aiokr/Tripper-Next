import { authMiddleware } from "@clerk/nextjs";
import { NextRequest, NextResponse } from 'next/server'

async function beforeAuthMiddleware(req) {
  const { nextUrl } = req
  const isApi = nextUrl.pathname.startsWith('/api/')
  return NextResponse.next()
}

function afterAuthMiddleware(auth, req) {
  const { nextUrl } = req

}

export default authMiddleware({
  beforeAuth: beforeAuthMiddleware,
  afterAuth: afterAuthMiddleware,
  publicRoutes: ["/", "/post", "/post/(.*)", "/posts", "/posts/(.*)", "/category", "/category/(.*)", "/lens", "/photo", "/photo/(.*)", "/album", "/album/(.*)", "/about"],
});


export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};