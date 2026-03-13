/*
 * @Author: RW TUF Air wgy1997@mail.ustc.edu.cn
 * @Date: 2026-03-13 19:54:36
 * @LastEditors: RW TUF Air wgy1997@mail.ustc.edu.cn
 * @LastEditTime: 2026-03-13 19:54:45
 * @FilePath: \RSSHub\api\rsshub.ts
 * @Description:
 *
 * Copyright (c) 2026 by wgy1997@mail.ustc.edu.cn, All Rights Reserved.
 */
export const config = {
    runtime: 'edge',
};

export default async function handler(req: Request) {
    const url = new URL(req.url);

    const target = 'http://115.29.238.240:1200' + url.pathname + url.search;

    const resp = await fetch(target, {
        headers: {
            ...Object.fromEntries(req.headers),
            host: 'rw-rss-hub.vercel.app',
            'x-forwarded-host': 'rw-rss-hub.vercel.app',
            'x-forwarded-proto': 'https',
        },
    });

    return new Response(resp.body, {
        status: resp.status,
        headers: resp.headers,
    });
}
