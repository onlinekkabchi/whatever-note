export async function POST(req) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  const token = await fetch(
    `http://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT}&code=${code}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    }
  );

  if (!res.ok) {
    return new Response(JSON.stringify({ message: "token 받아오기 실패" }), {
      status: 506,
    });
  }

  const result = await res.json();

  return new Response(JSON.stringify({ kakao: result }), {
    status: 200,
  });
}
