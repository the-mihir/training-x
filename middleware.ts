import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This is a simplified middleware example
// In a real application, you would verify the JWT token and extract user roles
export function middleware(request: NextRequest) {
  // Role checks temporarily disabled for design preview
  // Will be re-implemented later when needed

  return NextResponse.next()
}

// Configure matcher for paths that should trigger this middleware
// All paths temporarily removed from matcher
export const config = {
  matcher: [],
}
