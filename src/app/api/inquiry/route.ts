export async function POST(request: Request) {
  try { const body = await request.json(); if (!body?.name || !body?.email || !body?.message) return Response.json({ error: "Name, email and message are required." }, { status: 400 }); if (!/^\S+@\S+\.\S+$/.test(body.email)) return Response.json({ error: "Please provide a valid email address." }, { status: 400 }); return Response.json({ ok: true, message: "Thank you. Our investor relations team will be in touch." }, { status: 201 }); }
  catch { return Response.json({ error: "Please send a valid JSON request." }, { status: 400 }); }
}
