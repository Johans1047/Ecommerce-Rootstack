import { cookies } from 'next/headers';

export async function POST() {
    const cookieStore = cookies();
    
    cookies().delete('jssessid');
    
    return new Response('Logged out successfully', {
        status: 200,
        headers: {
            'Set-Cookie': 'jssessid=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT'
        }
    });
}