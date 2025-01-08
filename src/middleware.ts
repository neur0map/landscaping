import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware() {
  // Add middleware logic here if needed
  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
}; 