import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Simple check: If url starts with /dashboard, logic goes here
    // For now, we just let it pass until you add Auth
    return NextResponse.next();
}

export const config = {
    matcher: '/dashboard/:path*',
};